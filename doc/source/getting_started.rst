Getting started
===============

PyAnsys libraries fall into two categories:

- Wrappers over products like `MAPDL <mapdl_course_>`_, `Fluent <ansys_fluent_page_>`_, or `AEDT <ansys_aedt_page_>`_
- Supporting libraries like `DPF <dpf_post_gh_>`_

Most PyAnsys packages require a local installation of Ansys. The version
of Ansys installed dictates the interface and features available to
you. However, PyAnsys libraries use `grpc`_ to communicate to the
products, you can have the product installed remotely and connect to that
remote instance. This still requires that you need a copy of Ansys installed on
the host machine.

For more information on getting a licensed copy of Ansys, visit `Ansys
<ansys_>`_. If you are a student, consider installing a student version by
visiting `Ansys for Students <ansys_students_>`_.


************
Installation
************

There are several ways of installing PyAnsys depending on your use case, but
the easiest is simply to run:

.. code:: bash

   pip install pyansys

This installs all the PyAnsys libraries for the latest released
version of Ansys, for example, v2023R1.

You can always install libraries individually by visiting the install page for
each library. For example, for PyAEDT:

.. code:: bash

   pip install pyaedt


User mode installation
^^^^^^^^^^^^^^^^^^^^^^

Before installing ``pyansys`` in user mode, ensure that you have the latest
version of `pip`_ with:

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

If you lack an internet connection on your installation machine, the
recommended way of installing the ``pyansys`` metapackage is downloading the
wheelhouse archive from the `Releases Page <pyansys_releases_>`_ for your
corresponding machine architecture.

Each wheelhouse archive contains all the Python wheels necessary to install
``pyansys`` metapackage from scratch on Windows, Linux, and MacOS from Python
3.8 to 3.11. You can install this on an isolated system with a fresh Python
installation or on a virtual environment.

For example, on Linux with Python 3.9, unzip the wheelhouse archive and install
it with the following:

.. code:: bash

    unzip pyansys-v2023.2.7-wheelhouse-Linux-3.9-core.zip wheelhouse
    pip install pyansys -f wheelhouse --no-index --upgrade --ignore-installed

If you're on Windows with Python 3.9, unzip to a wheelhouse directory and install using the same command as above.

Consider installing using a `virtual environment <venv_docs_>`_.


Versioning system
-----------------

The ``pyansys`` metapackage follows a semantic-like versioning system, though
it has been adapted to the Ansys product release mechanism. In that sense, the
following kind of versioning system is followed:

.. code:: bash

   XXXX.Y.ZZ

Where:

- ``XXXX`` is the Ansys product release year (for example, 2022)
- ``Y`` is the Ansys product release within the same year (for example, 1,
  which relates to R1)
- ``ZZ`` is the patched versions to the ``pyansys`` metapackage, if any.

Consequently, the first ``pyansys`` metapackage compatible with the 2024 R2
release would be:

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
