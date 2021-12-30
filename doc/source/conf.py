"""Configuration file for docs.pyansys.com landing page."""
project = 'pyansys'
copyright = '(c) 2021 ANSYS, Inc. All rights reserved'
author = 'ANSYS Inc.'

release = version = '0.61.0'

html_logo = 'https://docs.pyansys.com/_static/pyansys-logo-black-cropped.png'
html_theme = 'pyansys_sphinx_theme'

html_theme_options = {
    "github_url": "https://github.com/pyansys/",
}

# Sphinx extensions
extensions = []

# The suffix(es) of source filenames.
source_suffix = '.rst'

# The master toctree document.
master_doc = 'index'

