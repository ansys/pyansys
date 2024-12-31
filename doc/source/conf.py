"""Configuration file for docs.pyansys.com landing page."""

from datetime import datetime
import os
from pathlib import Path
import subprocess

from ansys_sphinx_theme import ansys_favicon, get_version_match
import github
import jinja2
from PIL import Image
import requests
import sphinx
from sphinx.builders.latex import LaTeXBuilder
import toml
import yaml

from pyansys import __version__ as pyansys_version

# Declare constants
GENERATED_DIR = Path(__file__).parent / "package_versions"

VERSIONS_TEMPLATE = """
Package versions in PyAnsys {{ version }}
============================{{ "=" * version|length }}

The PyAnsys packages delivered in version {{ version }} are:
{{ ' ' }}
{%- for entry in table %}
{{ entry }}
{%- endfor %}
"""

INDEX_TEMPLATE = """
Package versions
================

Users can find below the list of PyAnsys packages available in the various
PyAnsys metapackages. The tables shows the package versions available in each
metapackage release.

.. toctree::
   :maxdepth: 3
   {{ ' ' }}
   {%- for version in versions %}
   version_{{ version }}
   {%- endfor %}
"""

TMP_FILE = Path("tmp_pyproject.toml")

LaTeXBuilder.supported_image_types = [
    "image/png",
    "image/pdf",
    "image/svg+xml",
]  # noqa: E501

project = "pyansys"
copyright = f"(c) {datetime.now().year} ANSYS, Inc. All rights reserved"
author = "ANSYS Inc."
cname = os.getenv("DOCUMENTATION_CNAME", default="nocname.com")
switcher_version = get_version_match(pyansys_version)

# Get the PyAnsys version
release = version = pyansys_version

html_theme = "ansys_sphinx_theme"
html_short_title = html_title = "PyAnsys"

# Favicon
html_favicon = ansys_favicon

html_sidebars = {
    "index": ["landing_page_sidebar.html"],
}

extensions = [
    "sphinx_design",
    "sphinx_copybutton",
    "sphinxcontrib.mermaid",
    "sphinx_jinja",
]

# Static files
templates_path = ["_templates"]
html_static_path = ["_static"]
html_css_files = ["css/landing_page.css"]
html_js_files = ["js/custom.js"]

metadata = Path(__file__).parent.parent.parent / "projects.yaml"

jinja_contexts = {
    "project_context": {"projects": yaml.safe_load(metadata.read_text(encoding="utf-8"))}
}

html_context = {
    "github_user": "ansys",
    "github_repo": "pyansys",
    "github_version": "main",
    "doc_path": "doc/source",
}

html_theme_options = {
    "logo": "pyansys",
    "github_url": "https://github.com/ansys/pyansys",
    "show_prev_next": False,
    "show_breadcrumbs": True,
    "collapse_navigation": True,
    "use_edit_page_button": True,
    "icon_links": [
        {
            "name": "Support",
            "url": "https://github.com/ansys/pyansys/discussions",
            "icon": "fa fa-comment fa-fw",
        },
        {
            "name": "Contribute",
            "url": "https://dev.docs.pyansys.com/how-to/contributing.html",
            "icon": "fa fa-wrench",
        },
    ],
    "switcher": {
        "json_url": f"https://{cname}/versions.json",
        "version_match": switcher_version,
    },
    "check_switcher": False,
    "static_search": {
        "threshold": 0.5,
        "min_chars_for_search": 2,
        "ignoreLocation": True,
    },
}

# Check all references work fine
nitpicky = True

# The suffix(es) of source filenames.
source_suffix = ".rst"

# The master toctree document.
master_doc = "index"

exclude_patterns = [
    "_build",
    "Thumbs.db",
    ".DS_Store",
    "links.rst",
]

# Read link all targets from file
path_to_links_rst = Path(__file__).parent / "links.rst"
rst_epilog = path_to_links_rst.read_text(encoding="utf-8")

# Ignore certain URLs
linkcheck_ignore = [
    r"https://www.ansys.com/.*",
    rf"https://pypi.org/project/pyansys/{switcher_version}.*",
    r"https://ansunits.docs.*",
]

# User agent
user_agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36 Edg/123.0.2420.81"  # noqa: E501


###########################################################################

# -------------------------------------------------------------------------
# Defining Sphinx build hooks
# -------------------------------------------------------------------------

###########################################################################
# Generate the package_versions directory
###########################################################################
# This section generates the package_versions directory in the doc/source
# directory. This directory contains the .rst files that list the PyAnsys
# package versions available in the various PyAnsys metapackages releases.
#
# The script retrieves the PyAnsys package versions from the pyproject.toml
# file for the minor versions of the PyAnsys metapackage release branches.


def generate_rst_files(versions: list[str], tables: dict[str, list[str]]):
    """Generate the .rst files for the package versions."""
    # Create Jinja2 environment
    jinja_env = jinja2.Environment(loader=jinja2.BaseLoader())

    # Compile the template
    template = jinja_env.from_string(VERSIONS_TEMPLATE)

    # Generate an .rst file for each version entry
    for version in versions:
        # Generate the content of the .rst file using the Jinja template
        rendered_content = template.render(
            version=version,
            table=tables[version],
        )

        # Define the output path for the generated file
        output_filename = GENERATED_DIR / f"version_{version}.rst"

        # Write the rendered content to the file
        output_filename.write_text(rendered_content, encoding="utf-8")

    # Generate the index.rst file
    index_template = jinja_env.from_string(INDEX_TEMPLATE)
    rendered_index = index_template.render(versions=versions)

    # Write the rendered content to the file
    output_filename = GENERATED_DIR / "index.rst"
    output_filename.write_text(rendered_index, encoding="utf-8")


def get_documentation_link_from_pypi(library: str, version: str) -> str:
    """Get the documentation link from PyPI for a specific library and version."""
    # Get the PyPI metadata for the library
    resp = requests.get(f"https://pypi.org/pypi/{library}/{version}/json")
    metadata = resp.json()

    # Get the documentation URL
    default_url = f"https://pypi.org/project/{library}/{version}"
    try:
        project_urls = metadata["info"]["project_urls"]
        url = None
        for tag in [
            "Documentation",
            "Homepage",
            "Source",
        ]:  # Prefer Documentation, then Homepage, then Source...
            url = project_urls.get(tag)
            if url:
                break

        return url if url else default_url
    except (KeyError, AttributeError):
        return default_url


def pyansys_multiversion_docs_link(docs_link: str, version: str) -> str:
    """Verify if the documentation link is a multi-version link.

    Notes
    -----
    Checks if the documentation link is a multi-version link. If it is, it
    tries to access the documentation for the specific version. In case of
    failure, it returns the default link. This is done on a best effort basis.

    """
    # First, let's check it is an official PyAnsys documentation link
    if "docs.pyansys.com" in docs_link:
        # Clean the link
        tmp_link = docs_link.split("docs.pyansys.com")[0] + "docs.pyansys.com"
        # Get the major.minor version
        major_minor_version = ".".join(version.split(".")[:2])

        # Attempt to access the documentation for the specific version
        try:
            resp = requests.get(f"{tmp_link}/version/{major_minor_version}/index.html")
            if resp.status_code == 200:
                return f"{tmp_link}/version/{major_minor_version}"
        except requests.exceptions.RequestException:
            pass

    # Fall back to the default link
    return docs_link


def build_versions_table(branch: str) -> list[str]:
    """Build the versions table for the PyAnsys libraries."""
    # Download the pyproject.toml file
    resp = requests.get(f"https://raw.githubusercontent.com/ansys/pyansys/{branch}/pyproject.toml")
    with TMP_FILE.open("wb") as file:
        file.write(resp.content)

    # Load the pyproject.toml file using TOML parser
    pyproject_toml = toml.load(TMP_FILE)

    # Check if it is poetrty based or flit based and
    # load the PyAnsys library versions
    list_pyansys_libraries: list[str] = []
    if "poetry" in pyproject_toml["tool"]:  # Assume poetry
        for key, val in pyproject_toml["tool"]["poetry"]["dependencies"].items():
            # Ignore some libraries
            if key in ["python", "importlib-metadata", "Sphinx"]:
                continue

            # Check if the version is a string or a dictionary...
            if (
                isinstance(val, dict)
                and isinstance(val["version"], str)
                and val["version"].startswith("==")
            ):
                list_pyansys_libraries.append(f"{key}{val['version']}")
            elif isinstance(val, str) and val.startswith("=="):
                list_pyansys_libraries.append(f"{key}{val}")
            else:
                continue
    else:  # Assume flit
        list_pyansys_libraries += pyproject_toml["project"]["dependencies"]
        list_pyansys_libraries += pyproject_toml["project"]["optional-dependencies"]["all"]

        # Ignore some libraries: in this case, only importlib-metadata
        list_pyansys_libraries = [
            entry for entry in list_pyansys_libraries if not entry.startswith("importlib-metadata")
        ]

    # Delete the temporary file
    TMP_FILE.unlink()

    # Build the table
    table = []

    # Add the header
    dict_table_entries: dict[str, str] = {}
    for entry in list_pyansys_libraries:
        library, version = entry.split("==")
        pypi_link = f"https://pypi.org/project/{library}/{version}"
        docs_link = get_documentation_link_from_pypi(library, version)

        # EXPERIMENTAL: Let's see if we can point to the actual version documentation...
        docs_link = pyansys_multiversion_docs_link(docs_link, version)

        dict_table_entries[library] = (
            f"`{library} <{docs_link}>`__",
            f"`{version} <{pypi_link}>`__",
        )

    # Get the max length of the library and versions columns
    libcol_size = max(len(entry[0]) for entry in dict_table_entries.values())
    vercol_size = max(len(entry[1]) for entry in dict_table_entries.values())

    # Format the table entries and headers
    table = []
    separator = f"+-{'-' * libcol_size}-+-{'-' * vercol_size}-+"
    table.append(separator)
    table.append(f"| {'Library'.ljust(libcol_size)} | {'Version'.ljust(vercol_size)} |")
    table.append(f"+={'=' * libcol_size}=+={'=' * vercol_size}=+")
    for library, entry in dict_table_entries.items():
        table.append(f"| {entry[0].ljust(libcol_size)} | {entry[1].ljust(vercol_size)} |")
        table.append(separator)

    return table


def get_release_branches_in_metapackage():
    """Retrieve the release branches in the PyAnsys metapackage."""
    # Get the PyAnsys metapackage repository
    g = github.Github(os.getenv("GITHUB_TOKEN", None))
    github_repo = g.get_repo("ansys/pyansys")

    # Get the branches
    branches = github_repo.get_branches()

    # Get the branches that are release branches + main
    release_branches = []
    versions = []
    for branch in branches:
        if branch.name.startswith("release"):
            release_branches.append(branch.name)
            versions.append(branch.name.split("/")[-1])

    # Sort the release branches and versions: from newest to oldest
    release_branches.reverse()
    versions.reverse()

    # Return the dev/main branch and the release branches (and versions)
    return ["main"] + release_branches, ["dev"] + versions


###########################################################################
# Adapting thumbnails to the documentation
###########################################################################
# This section adapts the thumbnails to the documentation. The thumbnails
# are resized to 640x480 pixels and centered on a white background.
#
# The script resizes all images in the _static/thumbnails directory to 640x480
# pixels and saves the resized images in the same directory. After the
# documentation build, the script reverts the changes to the thumbnails.


def resize_with_background(input_image_path, output_image_path, target_size):
    """Resize an image while maintaining aspect ratio and centering it on a white background.

    Parameters
    ----------
    input_image_path : Path
        The path to the input image.
    output_image_path : Path
        The path to save the output image.
    target_size : tuple[int, int]
        The target size of the output image as a tuple (width, height) in pixels.
    """
    # Open the input image
    img = Image.open(input_image_path).convert("RGBA")  # Ensure the image has an alpha channel

    # Resize the image while maintaining aspect ratio
    img.thumbnail(target_size, Image.LANCZOS)

    # Create a white background of the target size
    background = Image.new(
        "RGBA", target_size, (255, 255, 255, 255)
    )  # White background with no transparency

    # Calculate the position to center the resized image on the background
    img_w, img_h = img.size
    bg_w, bg_h = background.size
    offset = ((bg_w - img_w) // 2, (bg_h - img_h) // 2)

    # Paste the resized image onto the white background
    background.paste(img, offset, mask=img)  # Use the image's transparency as a mask

    # Convert the image to RGB to remove the alpha channel (no transparency)
    background = background.convert("RGB")

    # Save the result to the output path
    background.save(output_image_path)


###########################################################################

# --------------------------------------------------------------------------
# Sphinx build hooks
# --------------------------------------------------------------------------


def resize_thumbnails(app: sphinx.application.Sphinx):
    """Resize all images in the current directory to 640x480 pixels."""
    # Process all images

    thumbnail_dir = Path(__file__).parent.absolute() / "_static" / "thumbnails"

    for image in thumbnail_dir.glob("*.png"):
        target_size = (640, 480)
        resize_with_background(image, image, target_size)


def revert_thumbnails(app: sphinx.application.Sphinx, exception):
    """Resize all images in the current directory to 640x480 pixels."""
    thumbnail_dir = Path(__file__).parent.absolute() / "_static" / "thumbnails"

    subprocess.run(["git", "checkout", "--", thumbnail_dir])


def package_versions_table(app: sphinx.application.Sphinx):
    """Generate the package_versions directory."""
    branches, versions = get_release_branches_in_metapackage()
    generate_rst_files(
        versions,
        {version: build_versions_table(branch) for version, branch in zip(versions, branches)},
    )


def setup(app: sphinx.application.Sphinx):
    """Run different hook functions during the documentation build.

    Parameters
    ----------
    app : sphinx.application.Sphinx
        Sphinx instance containing all the configuration for the documentation build.
    """
    # At the beginning of the build process - update the version in cheatsheet
    app.connect("builder-inited", resize_thumbnails)
    app.connect("builder-inited", package_versions_table)

    # Reverting the thumbnails - no local changes
    app.connect("build-finished", revert_thumbnails)
