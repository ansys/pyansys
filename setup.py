"""Installation file for ansys-mapdl-core"""
import sys
import os
from io import open as io_open

from setuptools import setup

# Get version from version info: execute file from raw string
__version__ = None
this_file = os.path.dirname(__file__)
version_file = os.path.join(this_file, 'pyansys', '_version.py')
with io_open(version_file, mode='r') as fd:
    exec(fd.read())

NOTIMPLEMENTED = """
*** PyAnsys has moved (and expanded!) ***

To use PyAnsys you need to install the applicable packages for your
product:

MAPDL:

- ``pip install ansys-mapdl-core``

MAPDL Post-Processing:

- ``pip install ansys-mapdl-reader``
- ``pip install ansys-dpf-core``
- ``pip install ansys-dpf-reader``

PyAEDT

- ``pip install pyaedt``

"""

# raise an error when installing but not building
if 'sdist' not in sys.argv:
    sys.exit(NOTIMPLEMENTED)


setup(
    name='pyansys',
    packages=['pyansys'],
    author='Ansys',
    maintainer_email='pyansys.maintainers@ansys.com',
    version=__version__,
    description='Pythonic interfaces to Ansys products',
    long_description=open('README.rst').read(),
    long_description_content_type='text/x-rst',
    license='MIT',
    classifiers=[
        'Development Status :: 4 - Beta',
        'Intended Audience :: Science/Research',
        'Topic :: Scientific/Engineering :: Information Analysis',
        'License :: OSI Approved :: MIT License',
        'Operating System :: Microsoft :: Windows',
        'Operating System :: POSIX',
        'Operating System :: MacOS',
        'Programming Language :: Python :: 3.6',
        'Programming Language :: Python :: 3.7',
        'Programming Language :: Python :: 3.8',
    ],
    url='https://github.com/pyansys',
    keywords='Ansys PyAnsys',
)
