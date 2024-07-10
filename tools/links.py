"""
Script for automatic replacement of released links.

Usage is very simple. Just run the script.

.. code:: python

    python links.py
"""

import os
import re

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
"""Root directory of the project relative to this file."""

PYPROJECT_TOML_FILE = os.path.join(ROOT_DIR, "pyproject.toml")
"""Path to pyproject.toml file."""

DOCS_DIRECTORY = os.path.join(ROOT_DIR, "doc", "source")
"""Path to the documentation source directory"""

LINKS = {
    "ansys-acp-core": None,  # Once stable release is out "https://acp.docs.pyansys.com/version/stable", # noqa: E501
    "ansys-additive-core": "https://additive.docs.pyansys.com/version/stable",
    "ansys-additive-widgets": "https://widgets.additive.docs.pyansys.com/version/stable",
    "ansys-conceptev-core": "https://conceptev.docs.pyansys.com/version/stable",
    "ansys-dpf-composites": "https://composites.dpf.docs.pyansys.com/version/stable",  # noqa: E501
    "ansys-dpf-core": "https://dpf.docs.pyansys.com/version/stable",
    "ansys-dpf-post": "https://post.docs.pyansys.com/version/stable",
    "ansys-dpf-gate": None,
    "ansys-dyna-core": "https://dyna.docs.pyansys.com/version/stable",
    "ansys-dynamicreporting-core": "https://dynamicreporting.docs.pyansys.com/version/stable",  # noqa: E501
    "ansys-edb-core": "https://edb.core.docs.pyansys.com/version/stable",
    "ansys-geometry-core": "https://geometry.docs.pyansys.com/version/stable",
    "ansys-fluent-core": "https://fluent.docs.pyansys.com/version/stable",
    "ansys-hps-client": "https://hps.docs.pyansys.com/version/stable",
    "ansys-mapdl-core": "https://mapdl.docs.pyansys.com/version/stable",
    "ansys-math-core": "https://math.docs.pyansys.com/version/stable",
    "ansys-sound-core": "https://sound.docs.pyansys.com/version/stable",
    "ansys-mechanical-core": "https://mechanical.docs.pyansys.com/version/stable",  # noqa: E501
    "ansys-meshing-prime": "https://prime.docs.pyansys.com/version/stable",
    "ansys-modelcenter-workflow": "https://modelcenter.docs.pyansys.com/version/stable",  # noqa: E501
    "ansys-motorcad-core": "https://motorcad.docs.pyansys.com/version/stable",
    "ansys-openapi-common": None,
    "ansys-optislang-core": "https://optislang.docs.pyansys.com/version/stable",
    "ansys-platform-instancemanagement": "https://pypim.docs.pyansys.com/version/stable",  # noqa: E501
    "ansys-pyensight-core": "https://ensight.docs.pyansys.com/version/stable",
    "ansys-rocky-core": "https://rocky.docs.pyansys.com/version/stable",
    "ansys-seascape": "https://seascape.docs.pyansys.com/version/stable",
    "ansys-sherlock-core": "https://sherlock.docs.pyansys.com/version/stable",
    "ansys-simai-core": "https://simai.docs.pyansys.com/version/stable",
    "ansys-systemcoupling-core": "https://systemcoupling.docs.pyansys.com/version/stable",  # noqa: E501
    "ansys-turbogrid-core": "https://turbogrid.docs.pyansys.com/version/stable",
    "ansys-workbench-core": "https://workbench.docs.pyansys.com/version/stable",
    "pyedb": "https://edb.docs.pyansys.com/version/stable",
    "pyaedt": "https://aedt.docs.pyansys.com/version/stable",
    "pygranta": "https://grantami.docs.pyansys.com/version/stable",
    "pytwin": "https://twin.docs.pyansys.com/version/stable",
    # MAPDL - ALL
    "ansys-mapdl-reader": "https://reader.docs.pyansys.com/version/stable",
    # FLUENT - ALL
    "ansys-fluent-visualization": "https://visualization.fluent.docs.pyansys.com/version/stable",  # noqa: E501
    # TOOLS
    "ansys-materials-manager": "https://manager.materials.docs.pyansys.com/version/stable",
    "ansys-tools-filetransfer": "https://filetransfer.tools.docs.pyansys.com/version/stable",  # noqa: E501
    "ansys-tools-local-product-launcher": "https://local-product-launcher.tools.docs.pyansys.com/version/stable",  # noqa: E501
    "ansys-tools-path": "https://path.tools.docs.pyansys.com/version/stable",
    "ansys-tools-protoc-helper": None,
    "ansys-tools-visualization-interface": "https://visualization-interface.tools.docs.pyansys.com/version/stable",  # noqa: E501
    "ansys-units": "https://units.docs.pyansys.com/version/stable",
    "pyansys-tools-report": "https://report.tools.docs.pyansys.com/version/stable",  # noqa: E501
    "pyansys-tools-versioning": "https://versioning.tools.docs.pyansys.com/version/stable",  # noqa: E501
    "pyansys-tools-variableinterop": "https://variableinterop.docs.pyansys.com/version/stable",  # noqa: E501
}
"""Dictionary with PyAnsys packages and their multi-version docs site."""


def retrieve_major_minor(package: str):
    """Extract the major and minor version of a pinned package.

    Notes
    -----
    This function navigates to the package's pyproject.toml file

    and processes it to retrieve the desired major, minor version.


    Parameters
    ----------
    package : str
        The package to be searched for.


    Returns
    -------
    tuple of (int, int)
        The major and minor versions of the package.

    """
    with open(PYPROJECT_TOML_FILE, "r") as file:
        content = file.read()
        pattern = r"\b" + re.escape(package) + r"==(\d+)\.(\d+)"
        match = re.search(pattern, content)

        if match:
            major_version = int(match.group(1))
            minor_version = int(match.group(2))
            return (major_version, minor_version)

    return (None, None)


def search_and_replace(link: str, new_link: str):
    """Replace existing link with the newly provided link.

    Parameters
    ----------
    link : str
        The link to be searched for.
    new_link : str
        The link to replace the existing one.
    """
    # Traverse the docs directory
    for root, _, files in os.walk(DOCS_DIRECTORY):
        # Skip the _static subdirectory
        if "_static" in root.split(os.sep):
            continue

        # Process the files
        for file in files:
            file_path = os.path.join(root, file)
            with open(file_path, "r") as f:
                content = f.read()

            # Search for the link in the content, replace and save
            if link in content:
                new_content = content.replace(link, new_link)

                with open(file_path, "w") as f:
                    f.write(new_content)

                print(f"Replaced '{link}' with '{new_link}' in file: {file_path}")  # noqa: E501


def released_docs():
    """Update links for released documentation.

    Notes
    -----
    Links are expected to point to a certain version when released
    inside the metapackage, and not to the latest stable version. This
    module takes care of updating the links automatically. The script has to
    be run locally and the changes have to be committed to the release branch
    prior to releasing.
    """
    # Loop over all the above defined packages
    for key, value in LINKS.items():
        # Packages that are not adapted to multi-version have a None
        # link associated as its value... skip them.
        if value is None:
            continue

        # Retrieve the major and minor versions of the package
        major, minor = retrieve_major_minor(key)

        if major is None and minor is None:
            # No match found for the link... throw message
            print(f"Error retrieving minor/major version of {key}... Skipping.")  # noqa: E501
            continue

        # Define the new link
        link_root = value.split("/version/")[0]
        new_link = f"{link_root}/version/{major}.{minor}"

        # Search and replace through all our docs links
        search_and_replace(value, new_link)


if __name__ == "__main__":
    released_docs()
