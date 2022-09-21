PyAnsys metapackage
===================
|pyansys| |python| |pypi| |GH-CI| |MIT| |black|

.. |pyansys| image:: https://img.shields.io/badge/Py-Ansys-ffc107.svg?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABDklEQVQ4jWNgoDfg5mD8vE7q/3bpVyskbW0sMRUwofHD7Dh5OBkZGBgW7/3W2tZpa2tLQEOyOzeEsfumlK2tbVpaGj4N6jIs1lpsDAwMJ278sveMY2BgCA0NFRISwqkhyQ1q/Nyd3zg4OBgYGNjZ2ePi4rB5loGBhZnhxTLJ/9ulv26Q4uVk1NXV/f///////69du4Zdg78lx//t0v+3S88rFISInD59GqIH2esIJ8G9O2/XVwhjzpw5EAam1xkkBJn/bJX+v1365hxxuCAfH9+3b9/+////48cPuNehNsS7cDEzMTAwMMzb+Q2u4dOnT2vWrMHu9ZtzxP9vl/69RVpCkBlZ3N7enoDXBwEAAA+YYitOilMVAAAAAElFTkSuQmCC
   :target: https://docs.pyansys.com/
   :alt: PyAnsys

.. |python| image:: https://img.shields.io/pypi/pyversions/pyansys?logo=pypi
   :target: https://pypi.org/project/pyansys/
   :alt: Python

.. |pypi| image:: https://img.shields.io/pypi/v/pyansys.svg?logo=python&logoColor=white
   :target: https://pypi.org/project/pyansys/
   :alt: PyPI

.. |GH-CI| image:: https://github.com/pyansys/pyansys/actions/workflows/ci-build.yml/badge.svg
   :target: https://github.com/pyansys/pyansys/actions/workflows/ci-build.yml
   :alt: GH-CI

.. |MIT| image:: https://img.shields.io/badge/License-MIT-yellow.svg
   :target: https://opensource.org/licenses/MIT
   :alt: MIT

.. |black| image:: https://img.shields.io/badge/code%20style-black-000000.svg?style=flat
   :target: https://github.com/psf/black
   :alt: Black

Welcome to the PyAnsys metapackage repository. This project originated as a single ``pyansys`` package,
which provides support to Ansys product releases. Compatibility of these packages amongst themselves
and with the Ansys product release they are linked to is ensured.

At this moment, this package ensures the compatibility between the following PyAnsys packages:

- `PyAEDT <https://aedt.docs.pyansys.com/>`_ : Pythonic interface to AEDT (Ansys Electronic Desktop)
- `PyDPF-Core <https://dpf.docs.pyansys.com/>`_ : Pythonic interface to DPF (Data Processing Framework) for building more advanced and customized workflows
- `PyDPF-Post <https://post.docs.pyansys.com/>`_ : Pythonic interface to DPF's postprocessing toolbox for manipulating and transforming simulation data
- `PyFluent <https://fluent.docs.pyansys.com/>`_ : Pythonic interface to Ansys Fluent
- `PyFluent-Parametric <https://fluentparametric.docs.pyansys.com/>`_ : Pythonic interface to Ansys Fluent parametric workflows
- `PyFluent-Visualization <https://fluentvisualization.docs.pyansys.com/>`_ : Pythonic interface to visualize Ansys Fluent simulations using Python
- `PyMAPDL <https://mapdl.docs.pyansys.com/>`_ : Pythonic interface to MAPDL.
- `PyMAPDL Reader <https://reader.docs.pyansys.com/>`_: Pythonic interface to read legacy MAPDL result files (MAPDL 14.5 and later)
- `PyPIM <https://pypim.docs.pyansys.com/>`_: Pythonic interface to communicate with the PIM (Product Instance Management) API
- `Granta MI BoM Analytics <https://grantami.docs.pyansys.com/>`_: Pythonic interface to Granta MI BoM Analytics services
- `Shared Components <https://shared.docs.pyansys.com/>`_: Shared software components to enable package interoperability and minimize maintenance

Much effort is underway to continue expanding and developing packages in the
`PyAnsys GitHub <https://github.com/pyansys/>`__ account. On the ``Issues`` page
for each package, you can post issues and request new features. You can also email
questions to `PyAnsys Support <mailto:pyansys.support@ansys.com>`_.

By default, the PyAnsys package installs these core modules:

- `PyAEDT`_
- `PyDPF-Core`_
- `PyDPF-Post`_
- `PyFluent`_
- `PyMAPDL`_
- `PyPIM`_
- `Granta MI BoM Analytics`_
- `Shared Components`_

However, the ``pyansys`` package also contains certain extra targets, which can be installed upon request:

- **mapdl-all**: this target installs the core packages and `PyMAPDL Reader`_.
- **fluent-all**: this target installs the core packages and `PyFluent-Parametric`_ and `PyFluent-Visualization`_.
- **all**: this target install all extra ``pyansys`` packages.

Package installation
--------------------

Two installation modes are provided: user and offline.

User mode installation
^^^^^^^^^^^^^^^^^^^^^^

Before installing ``pyansys`` in user mode, ensure that you have the latest
version of `pip <https://pypi.org/project/pip/>`_ with:

.. code:: bash
   
    python -m pip install -U pip

Then, install ``pyansys`` with:

.. code:: bash

   python -m pip install pyansys

If you are interested in **installing an extra target** such as ``fluent-all``:

.. code:: bash

   python -m pip install pyansys[fluent-all]

If you are interested in **installing a specific version** such as ``2023.1.0``:

.. code:: bash

   python -m pip install pyansys==2023.1.0

Offline mode installation
^^^^^^^^^^^^^^^^^^^^^^^^^

If you lack an internet connection on your installation machine, the recommended way of installing
the ``pyansys`` metapackage is downloading the wheelhouse archive from the
`Releases Page <https://github.com/pyansys/pyansys/releases>`_ for your corresponding machine architecture.

Each wheelhouse archive contains all the Python wheels necessary to install ``pyansys`` metapackage from
scratch on Windows, Linux, and MacOS from Python 3.7 to 3.10. You can install this on an isolated system with
a fresh Python installation or on a virtual environment.

For example, on Linux with Python 3.7, unzip the wheelhouse archive and install it with the following:

.. code:: bash

    unzip pyansys-v2023.1.0-wheelhouse-Linux-3.7-core.zip wheelhouse
    pip install pyansys -f wheelhouse --no-index --upgrade --ignore-installed

If you're on Windows with Python 3.9, unzip to a wheelhouse directory and install using the same command as above.

Consider installing using a `virtual environment <https://docs.python.org/3/library/venv.html>`_.

Versioning system
-----------------

The ``pyansys`` metapackage follows a semantic-like versioning system, though it has been adapted to the
Ansys product release mechanism. In that sense, the following kind of versioning system is followed:

.. code:: bash

   XXXX.Y.ZZ

Where:

- ``XXXX`` is the Ansys product release year (for example, 2022)
- ``Y`` is the Ansys product release within the same year (for example, 1, which relates to R1)
- ``ZZ`` is the patched versions to the ``pyansys`` metapackage, if any.

Consequently, the first ``pyansys`` metapackage compatible with the 2024 R2 release would be:

.. code:: bash

   2024.2.0

And any subsequent patched version of that package would be:

.. code:: bash

   2024.2.1
   2024.2.2
   2024.2.3
   ...

You can request for a specific version install when pip installing your package:

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

For more information about Ansys products, visit the `Ansys web site <https://www.ansys.com/>`_.
