"""Version of pyansys module.

On the ``main`` branch, use 'dev0' to denote a development version.
For example:

__version__ = 0, 58, 'dev0'

"""

try:
    import importlib.metadata as importlib_metadata
except ModuleNotFoundError:  # pragma: no cover
    import importlib_metadata

# Read from the pyproject.toml
# major, minor, patch
__version__ = importlib_metadata.version("pyansys")
