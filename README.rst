PyAnsys metapackage
===================
|pyansys| |python| |pypi| |downloads| |GH-CI| |MIT| |black| |pre-commit|

.. |pyansys| image:: https://img.shields.io/badge/Py-Ansys-ffc107.svg?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABDklEQVQ4jWNgoDfg5mD8vE7q/3bpVyskbW0sMRUwofHD7Dh5OBkZGBgW7/3W2tZpa2tLQEOyOzeEsfumlK2tbVpaGj4N6jIs1lpsDAwMJ278sveMY2BgCA0NFRISwqkhyQ1q/Nyd3zg4OBgYGNjZ2ePi4rB5loGBhZnhxTLJ/9ulv26Q4uVk1NXV/f///////69du4Zdg78lx//t0v+3S88rFISInD59GqIH2esIJ8G9O2/XVwhjzpw5EAam1xkkBJn/bJX+v1365hxxuCAfH9+3b9/+////48cPuNehNsS7cDEzMTAwMMzb+Q2u4dOnT2vWrMHu9ZtzxP9vl/69RVpCkBlZ3N7enoDXBwEAAA+YYitOilMVAAAAAElFTkSuQmCC
   :target: https://docs.pyansys.com/
   :alt: PyAnsys

.. |python| image:: https://img.shields.io/pypi/pyversions/pyansys?logo=pypi
   :target: https://pypi.org/project/pyansys/
   :alt: Python

.. |pypi| image:: https://img.shields.io/pypi/v/pyansys.svg?logo=python&logoColor=white
   :target: https://pypi.org/project/pyansys/
   :alt: PyPI

.. |downloads| image:: https://img.shields.io/pypi/dm/pyansys.svg
   :target: https://pypi.org/project/pyansys/
   :alt: PyPI Downloads

.. |GH-CI| image:: https://github.com/ansys/pyansys/actions/workflows/ci-build.yml/badge.svg
   :target: https://github.com/ansys/pyansys/actions/workflows/ci-build.yml
   :alt: GH-CI

.. |MIT| image:: https://img.shields.io/badge/License-MIT-yellow.svg
   :target: https://opensource.org/licenses/MIT
   :alt: MIT

.. |black| image:: https://img.shields.io/badge/code%20style-black-000000.svg?style=flat
   :target: https://github.com/psf/black
   :alt: Black

.. |pre-commit| image:: https://results.pre-commit.ci/badge/github/pyansys/pyansys/main.svg
   :target: https://results.pre-commit.ci/latest/github/pyansys/pyansys/main
   :alt: pre-commit.ci status

Welcome to the PyAnsys metapackage repository. The ``pyansys`` metapackage
provides a single package of collected PyAnsys packages that ensures compatibility
of these packages amongst themselves and the Ansys product release that they are linked to.

.. image:: https://raw.githubusercontent.com/ansys/pyansys/main/doc/source/_static/pyansys_dark.png
   :target: https://docs.pyansys.com
   :alt: PyAnsys

The ``pyansys`` metapackage ensures compatibility between these PyAnsys packages:

- `PyACP <https://acp.docs.pyansys.com/>`_: Pythonic interface to Ansys Composite PrepPost (ACP).
- `PyAdditive <https://additive.docs.pyansys.com/>`_: Pythonic interface to the Ansys Additive service.
- `PyAdditive Widgets <https://widgets.additive.docs.pyansys.com/>`_: PyAdditive widget toolkit to visualize additive parametric study results.
- `PyAEDT <https://aedt.docs.pyansys.com/>`_: Pythonic interface to Ansys Electronics Desktop (AEDT).
- `PyAnsys Geometry <https://geometry.docs.pyansys.com/>`_: Pythonic interface to the Ansys Geometry service.
- `PyAnsys Math <https://math.docs.pyansys.com/>`_: Pythonic interface to PyAnsys Math libraries.
- `PyConceptEV <https://conceptev.docs.pyansys.com/>`_: Pythonic interface to Ansys ConceptEV library.
- `PyDPF - Core <https://dpf.docs.pyansys.com/>`_: Pythonic interface to the Data Processing Framework (DPF) for building advanced and customized workflows.
- `PyDPF - Post <https://post.docs.pyansys.com/>`_: Pythonic interface to access and post process Ansys solver result files.
- `PyDPF - Composites <https://composites.dpf.docs.pyansys.com/>`_: Pythonic interface to postprocess layered and short-fiber composite models.
- `PyDyna <https://dyna.docs.pyansys.com/>`_: Pythonic interface to build the Ansys DYNA input deck, submit it to the Ansys LS-DYNA solver, and postprocess its results.
- `PyDynamicReporting <https://dynamicreporting.docs.pyansys.com/>`_: Pythonic interface to Ansys Dynamic Reporting for service and control of its database and reports.
- `PyEDB <https://edb.docs.pyansys.com/>`_: Pythonic interface to the Ansys Electronics Database (EDB) client library.
- `PyEDB - Core <https://edb.core.docs.pyansys.com/>`_: Pythonic interface to Ansys Electronics Database (EDB).
- `PyEnSight <https://ensight.docs.pyansys.com/>`_: Pythonic interface to EnSight, the Ansys simulation postprocessor.
- `PyFluent <https://fluent.docs.pyansys.com/>`_: Pythonic interface to Ansys Fluent.
- `PyFluent - Visualization <https://visualization.fluent.docs.pyansys.com/>`_: Pythonic interface to visualize Ansys Fluent simulations.
- `PyGranta <https://grantami.docs.pyansys.com/>`_: Pythonic interface to Ansys Granta MI services.
- `PyHPS <https://hps.docs.pyansys.com/version/dev/>`_: A Python client for Ansys HPC Platform Services (HPS).
- `PyMAPDL <https://mapdl.docs.pyansys.com/>`_: Pythonic interface to Ansys MAPDL (Mechanical APDL).
- `PyMAPDL Reader <https://reader.docs.pyansys.com/>`_: Pythonic interface to read legacy MAPDL result files (MAPDL 14.5 and later).
- `PyMechanical <https://mechanical.docs.pyansys.com/>`_: Pythonic interface to Ansys Mechanical.
- `PyModelCenter <https://modelcenter.docs.pyansys.com/>`_: Pythonic interface for Ansys ModelCenter
- `PyMotorCAD <https://motorcad.docs.pyansys.com/>`_: Pythonic interface to Ansys Motor-CAD.
- `PyOptislang <https://optislang.docs.pyansys.com/>`_: Pythonic interface to Ansys optislang.
- `PyPIM <https://pypim.docs.pyansys.com/>`_: Pythonic interface to communicate with the Ansys PIM (Product Instance Management) API.
- `PyPrimeMesh <https://prime.docs.pyansys.com/>`_: Python library to acquire geometries and prepare surface and volume meshes for multiple solvers.
- `PyRocky <https://rocky.docs.pyansys.com/>`_: Python library to communicate with Ansys Rocky using Rocky PrePost API.
- `PySeascape <https://seascape.docs.pyansys.com/>`_: Pythonic interface to communicate with Ansys RedHawkSC and TotemSC.
- `PySherlock <https://sherlock.docs.pyansys.com/>`_: Pythonic interface to communicate with Ansys Sherlock.
- `PySimAI <https://simai.docs.pyansys.com/>`_: Pythonic interface to use SimAI.
- `PySystemCoupling <https://systemcoupling.docs.pyansys.com/>`_: Pythonic interface to communicate with Ansys System Coupling.
- `PyTurboGrid <https://turbogrid.docs.pyansys.com/>`_: Pythonic interface to Ansys TurboGrid, a high-quality turbomachinery meshing software app.
- `PyTwin <https://twin.docs.pyansys.com/>`_: Pythonic interface to communicate with consumption workflows for Ansys digital twins.
- `PyWorkbench <https://workbench.docs.pyansys.com/>`_: Pythonic interface to Ansys Workbench.
- `Shared Components <https://shared.docs.pyansys.com/>`_: Shared Ansys software components to enable package interoperability and minimize maintenance.

Other tools delivered as part of the metapackage are:

- `Ansys FileTransfer Tool <https://filetransfer.tools.docs.pyansys.com/>`_: Simple gRPC API tool for moving files between a client and a remote server.
- `Ansys Local Product Launcher <https://local-product-launcher.tools.docs.pyansys.com/>`_: Python utility for launching Ansys products on a local machine and configuring their launch settings.
- `Ansys Tools Path <https://path.tools.docs.pyansys.com/>`_: Library to locate Ansys products in a local machine.
- `Ansys Tools Protobuf Compilation Helper <https://ansys.github.io/ansys-tools-protoc-helper/>`_: Utility library to compile ``.proto`` files to Python source when building the package wheel.
- `Ansys Tools Visualization Interface <https://visualization-interface.tools.docs.pyansys.com/>`_: Python interface between PyAnsys libraries and plotting backends
- `PyAnsys Tools Report <https://report.tools.docs.pyansys.com/>`_:  Tool for reporting your Python environment's package versions and hardware resources in a standardized way.
- `PyAnsys Tools Variable Interop <https://variableinterop.docs.pyansys.com/>`_: Tool for defining basic variables, types, metadata, and values intended to provide interoperability between all products.
- `PyAnsys Tools Versioning <https://versioning.tools.docs.pyansys.com/>`_: Tool for backwards and forwards server support.
- `PyAnsys Units <https://units.docs.pyansys.com/>`_: Pythonic interface for units, unit systems, and unit conversions.
- `PyMaterials Manager <https://manager.materials.docs.pyansys.com/>`_: Python package for unifying material management across the Ansys portfolio.

Much effort is underway to continue expanding and developing packages in the
`PyAnsys GitHub <https://github.com/ansys/>`__ account. On the ``Issues`` page
for each package, you can post issues and request new features. You can also feel
free to post a question on the `Ansys Developer Forums <https://discuss.ansys.com/>`_.

By default, the PyAnsys metapackage installs these core modules:

- `PyACP`_
- `PyAdditive`_
- `PyAdditive Widgets`_
- `PyAEDT`_
- `PyAnsys Geometry`_
- `PyAnsys Math`_
- `PyConceptEV`_
- `PyDPF - Core`_
- `PyDPF - Post`_
- `PyDPF - Composites`_
- `PyDyna`_
- `PyDynamicReporting`_
- `PyEDB`_
- `PyEDB - Core`_
- `PyEnSight`_
- `PyFluent`_
- `PyGranta`_
- `PyHPS`_
- `PyMAPDL`_
- `PyMechanical`_
- `PyMotorCAD`_
- `PyOptislang`_
- `PyPIM`_
- `PyPrimeMesh`_
- `PyRocky`_
- `PySeascape`_
- `PySherlock`_
- `PySimAI`_
- `PySystemCoupling`_
- `PyTurboGrid`_
- `PyTwin`_
- `PyWorkbench`_
- `Shared Components`_

Additionally, the ``pyansys`` metapackage contains certain extra targets that
can be installed upon request:

- **mapdl-all**: This target installs the core packages and `PyMAPDL Reader`_.
- **fluent-all**: This target installs the core packages, and `PyFluent - Visualization`_.
- **tools**: This target installs the core packages, `Ansys FileTransfer Tool`_, `Ansys Local Product Launcher`_, `Ansys Tools Path`_, `Ansys Tools Protobuf Compilation Helper`_, `PyAnsys Tools Report`_, `PyAnsys Tools Variable Interop`_, `PyAnsys Tools Versioning`_, `PyAnsys Units`_, and `PyMaterials Manager`_.
- **all**: This target installs all extra ``pyansys`` packages.

Package installation
--------------------

Two installation modes are provided: user and offline.

User mode installation
^^^^^^^^^^^^^^^^^^^^^^

Before installing the ``pyansys`` metapackage in user mode, ensure that you have
the latest version of `pip <https://pypi.org/project/pip/>`_ with this command:

.. code:: bash

    python -m pip install -U pip

Then, install the ``pyansys`` metapackage with this command:

.. code:: bash

   python -m pip install pyansys

If you are interested in **installing an extra target** such as ``fluent-all``,
you use a command like this:

.. code:: bash

   python -m pip install pyansys[fluent-all]

If you are interested in **installing a specific version** such as ``2023.1.0``,
you use a command like this:

.. code:: bash

   python -m pip install pyansys==2023.1.0

Offline mode installation
^^^^^^^^^^^^^^^^^^^^^^^^^

If you lack an internet connection on your installation machine, the recommended way of installing
the ``pyansys`` metapackage is downloading the wheelhouse archive from the
`Releases Page <https://github.com/ansys/pyansys/releases>`_ for your corresponding machine architecture.

Each wheelhouse archive contains all the Python wheels necessary to install the ``pyansys`` metapackage from
scratch on Windows, Linux, and MacOS from Python 3.9 to 3.11. You can install this on an isolated system with
a fresh Python installation or on a virtual environment.

For example, on Linux with Python 3.9, unzip the wheelhouse archive and install it with the following
commands:

.. code:: bash

    unzip pyansys-v2024.2.0-wheelhouse-Linux-3.9-core.zip wheelhouse
    pip install pyansys -f wheelhouse --no-index --upgrade --ignore-installed

If you're on Windows with Python 3.9, unzip to a wheelhouse directory and then install using
the same ``pip`` command as in the previous example.

Consider installing using a `virtual environment <https://docs.python.org/3/library/venv.html>`_.

Versioning system
-----------------

The ``pyansys`` metapackage follows a semantic-like versioning system, though it has been adapted to the
Ansys product release mechanism. Thus, this kind of versioning system is followed:

.. code:: bash

   XXXX.Y.ZZ

Where:

- ``XXXX`` is the Ansys product release year (for example, 2022).
- ``Y`` is the Ansys product release within the same year (for example, 1, which relates to R1).
- ``ZZ`` is a patched version to the ``pyansys`` metapackage, if any.

Consequently, the first ``pyansys`` metapackage compatible with the 2024 R2 release would be:

.. code:: bash

   2024.2.0

Any subsequent patched version of this package would be:

.. code:: bash

   2024.2.1
   2024.2.2
   2024.2.3
   ...

You can request a specific version install when using ``pip`` to install
your package:

.. code:: bash

   python -m pip install pyansys==2024.2.0

License and acknowledgments
---------------------------
All PyAnsys libraries are licensed under the MIT license.

PyAnsys libraries make no commercial claim over Ansys whatsoever.
These libraries extend the functionality of Ansys products by
adding Python interfaces to legally obtained software products
without changing the core behaviors or licenses of the original
software.

For more information on Ansys products, visit the `Ansys web site <https://www.ansys.com/>`_.
