PyAnsys metapackage
===================
|pyansys| |python| |pypi| |GH-CI| |MIT| |black| |pre-commit|

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

.. |pre-commit| image:: https://results.pre-commit.ci/badge/github/pyansys/pyansys/main.svg
   :target: https://results.pre-commit.ci/latest/github/pyansys/pyansys/main
   :alt: pre-commit.ci status

Welcome to the PyAnsys metapackage repository. The ``pyansys`` metapackage
provides a single package of collected PyAnsys packages that ensures compatibility
of these packages amongst themselves and the Ansys product release that they are linked to.

The ``pyansys`` metapackage ensures compatibility between these PyAnsys packages:

- `PyAEDT <https://aedt.docs.pyansys.com/>`_: Pythonic interface to AEDT (Ansys Electronics Desktop).
- `PyAnsys Math <https://math.docs.pyansys.com/>`_: Pythonic interface to PyAnsys Math libraries.
- `PyDPF-Core <https://dpf.docs.pyansys.com/>`_: Pythonic interface to Ansys DPF (Data Processing Framework) for building more advanced and customized workflows.
- `PyDPF-Post <https://post.docs.pyansys.com/>`_: Pythonic interface to DPF's postprocessing toolbox for manipulating and transforming simulation data.
- `PyDPF Composites <https://composites.dpf.docs.pyansys.com/>`_: Pythonic interface for DPF's postprocessing of layered and short-fiber composite models.
- `PyFluent <https://fluent.docs.pyansys.com/>`_: Pythonic interface to Ansys Fluent.
- `PyFluent-Parametric <https://parametric.fluent.docs.pyansys.com/>`_: Pythonic interface to Ansys Fluent parametric workflows.
- `PyFluent-Visualization <https://visualization.fluent.docs.pyansys.com/>`_: Pythonic interface to visualize Ansys Fluent simulations.
- `PyMAPDL <https://mapdl.docs.pyansys.com/>`_: Pythonic interface to Ansys MAPDL (Mechanical APLD).
- `PyMAPDL Reader <https://reader.docs.pyansys.com/>`_: Pythonic interface to read legacy MAPDL result files (MAPDL 14.5 and later).
- `PyMotorCAD <https://motorcad.docs.pyansys.com/>`_: Pythonic interface to Ansys Motor-CAD.
- `PyOptislang <https://optislang.docs.pyansys.com/>`_: Pythonic interface to Ansys Optislang.
- `PyPIM <https://pypim.docs.pyansys.com/>`_: Pythonic interface to communicate with the Ansys PIM (Product Instance Management) API.
- `PyPrimeMesh <https://prime.docs.pyansys.com>`_: Pythonic interface to Ansys Prime Server, which delivers core Ansys meshing technology.
- `PySeascape <https://seascape.docs.pyansys.com/>`_: Pythonic interface to communicate with Ansys RedHawkSC and TotemSC.
- `PySystemCoupling <https://systemcoupling.docs.pyansys.com/>`_: Pythonic interface to communicate with Ansys System Coupling.
- `PyTwin <https://twin.docs.pyansys.com/>`_: Pythonic interface to communicate with consumption workflows for Ansys digital twins.
- `Granta MI BoM Analytics <https://bomanalytics.grantami.docs.pyansys.com/>`_: Pythonic interface to Ansys Granta MI BoM Analytics services.
- `Shared Components <https://shared.docs.pyansys.com/>`_: Shared Ansys software components to enable package interoperability and minimize maintenance.

Much effort is underway to continue expanding and developing packages in the
`PyAnsys GitHub <https://github.com/pyansys/>`__ account. On the ``Issues`` page
for each package, you can post issues and request new features. You can also feel
free to post a question on the [Ansys Developer Forums](https://discuss.ansys.com/).

By default, the PyAnsys metapackage installs these core modules:

- `PyAEDT`_
- `PyAnsys Math`_
- `PyDPF-Core`_
- `PyDPF-Post`_
- `PyDPF Composites`_
- `PyFluent`_
- `PyMAPDL`_
- `PyMotorCAD`_
- `PyOptislang`_
- `PyPIM`_
- `PyPrimeMesh`_
- `PySeascape`_
- `PySystemCoupling`_
- `PyTwin`_
- `Granta MI BoM Analytics`_
- `Shared Components`_

Additionally, the ``pyansys`` metapackage contains certain extra targets that
can be installed upon request:

- **mapdl-all**: This target installs the core packages and `PyMAPDL Reader`_.
- **fluent-all**: This target installs the core packages and `PyFluent-Parametric`_ and `PyFluent-Visualization`_.
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
`Releases Page <https://github.com/pyansys/pyansys/releases>`_ for your corresponding machine architecture.

Each wheelhouse archive contains all the Python wheels necessary to install the ``pyansys`` metapackage from
scratch on Windows, Linux, and MacOS from Python 3.7 to 3.10. You can install this on an isolated system with
a fresh Python installation or on a virtual environment.

For example, on Linux with Python 3.7, unzip the wheelhouse archive and install it with the following
commands:

.. code:: bash

    unzip pyansys-v2023.1.dev0-wheelhouse-Linux-3.7-core.zip wheelhouse
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
