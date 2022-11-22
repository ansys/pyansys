"""Configuration file for docs.pyansys.com landing page."""
from datetime import datetime

from ansys_sphinx_theme import pyansys_logo_black
from sphinx.builders.latex import LaTeXBuilder

from pyansys import __version__ as pyansys_version

LaTeXBuilder.supported_image_types = ["image/png", "image/pdf", "image/svg+xml"]  # noqa: E501

project = "pyansys"
copyright = f"(c) {datetime.now().year} ANSYS, Inc. All rights reserved"
author = "ANSYS Inc."

# get the PyAnsys version
release = version = pyansys_version

# use the default pyansys logo
html_logo = pyansys_logo_black
html_theme = "ansys_sphinx_theme"

# specify the location of your github repo
html_theme_options = {
    "github_url": "https://github.com/pyansys",
    "show_prev_next": False,
    "show_breadcrumbs": True,
}

html_short_title = html_title = "PyAnsys"

# Sphinx extensions
extensions = []

# The suffix(es) of source filenames.
source_suffix = ".rst"

# The master toctree document.
master_doc = "index"
