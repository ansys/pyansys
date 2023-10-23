"""PyAnsys general package __init__ file."""
import importlib.metadata as importlib_metadata

# Read from the pyproject.toml
# major, minor, patch
__version__ = importlib_metadata.version("pyansys")
