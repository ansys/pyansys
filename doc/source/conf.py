"""Configuration file for docs.pyansys.com landing page."""
from datetime import datetime

from pyansys_sphinx_theme import pyansys_logo_black

project = 'pyansys'
copyright = f"(c) {datetime.now().year} ANSYS, Inc. All rights reserved"
author = 'ANSYS Inc.'

release = version = '0.61.2'

# use the default pyansys logo
html_logo = pyansys_logo_black
html_theme = 'pyansys_sphinx_theme'

# specify the location of your github repo
html_theme_options = {
    "github_url": "https://github.com/pyansys/pyansys-sphinx-theme",
    "show_prev_next": False,
    "show_breadcrumbs": True,
}

html_short_title = html_title = "PyAnsys"

# Sphinx extensions
extensions = []

# The suffix(es) of source filenames.
source_suffix = '.rst'

# The master toctree document.
master_doc = 'index'
