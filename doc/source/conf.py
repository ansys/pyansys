"""Configuration file for docs.pyansys.com landing page."""
from datetime import datetime
from io import open as io_open
import os

from ansys_sphinx_theme import pyansys_logo_black

project = 'pyansys-landing'
copyright = f"(c) {datetime.now().year} ANSYS, Inc. All rights reserved"
author = 'ANSYS Inc.'

# Get version from version info: execute file from raw string
__version__ = None
this_file = os.path.dirname(__file__)
version_file = os.path.join(this_file, '..', '..', 'src', 'pyansys', '_version.py')
with io_open(version_file, mode='r') as fd:
    exec(fd.read())

release = version = __version__

# use the default pyansys logo
html_logo = pyansys_logo_black
html_theme = 'ansys_sphinx_theme'

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
source_suffix = '.rst'

# The master toctree document.
master_doc = 'index'
