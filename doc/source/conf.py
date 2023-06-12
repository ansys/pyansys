"""Configuration file for docs.pyansys.com landing page."""
from datetime import datetime
import os

from ansys_sphinx_theme import get_version_match, pyansys_logo_black
from sphinx.builders.latex import LaTeXBuilder

from pyansys import __version__ as pyansys_version

LaTeXBuilder.supported_image_types = ["image/png", "image/pdf", "image/svg+xml"]  # noqa: E501

project = "pyansys"
copyright = f"(c) {datetime.now().year} ANSYS, Inc. All rights reserved"
author = "ANSYS Inc."
cname = os.getenv("DOCUMENTATION_CNAME", default="nocname.com")
switcher_version = get_version_match(pyansys_version)

# get the PyAnsys version
release = version = pyansys_version

# use the default pyansys logo
html_logo = pyansys_logo_black
html_theme = "ansys_sphinx_theme"
html_short_title = html_title = "PyAnsys"

extensions = [
    "sphinx_design",
    "sphinx_copybutton",
]

html_context = {
    "github_user": "ansys",
    "github_repo": "pyansys",
    "github_version": "main",
    "doc_path": "doc/source",
}

html_theme_options = {
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

# make rst_epilog a variable, so you can add other epilog parts to it
rst_epilog = ""
# Read link all targets from file
with open("links.rst") as f:
    rst_epilog += f.read()
