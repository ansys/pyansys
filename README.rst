PyAnsys Project
===============

This is a header package for the pyansys project, a collection of python packages to enable the usage of Ansys products through Python.  As of now, these packages are limited to MAPDL and post processing of MAPDL related files, but will grow to encompas more products and features as the project matures.

This project originally begain as a single package, ``pyansys``, and has been expanded to four main packages and a few supporting packages.

PyMAPDL
-----
The ``PyAnsys`` project supports Pythonic access to MAPDL to be able to communicate with the MAPDL process directly from Python.  The original ``PyAnsys`` project was limited to either the console or CORBA interface, and the latest ``ansys-mapdl-core`` package enables a more comprehensive interface with MAPDL and supports:

- All the features of the original module (e.g. pythonic commands, interactive sessions).
- Remote connections to MAPDL from anywhyere via gRPC.
- Direct access to MAPDL arrays, meshes, and geometry as Python objects.
- Low level access to the MAPDL solver through APDL math in a ``scipy`` like interface.

Install this package with:

.. code::

   pip install ansys-mapdl-core


PyMAPDL Reader
--------------

- ansys-mapdl-core
- ansys-mapdl-reader
- ansys-dpf-core
- ansys-dpf-reader

Overview
--------
