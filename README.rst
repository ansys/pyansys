PyAnsys
=======
Welcome to the PyAnsys project.

The PyAnsys project is a collection of Python packages that enable the use of
Ansys products through Python.

This project originated as a single package, ``pyansys``, and has
expanded to several main packages:

- `PyAEDT <https://aedtdocs.pyansys.com/>`__ : Pythonic interface to AEDT (Ansys Electronic Desktop)
- `PyDPF-Core <https://dpfdocs.pyansys.com/>`__ : Pythonic interface to DPF (Data Processing Framework) for building more advanced and customized workflows
- `PyDPF-Post <https://postdocs.pyansys.com/>`__ : Pythonic interface to DPF's postprocessing toolbox for manipulating and transforming simulation data
- `PyMAPDL <https://mapdldocs.pyansys.com/>`__ : Pythonic interface to MAPDL.
- `PyMAPDL Reader <https://readerdocs.pyansys.com/>`__: Pythonic interface to read legacy MAPDL result files (MAPDL 14.5 and later)
- `PyPIM <https://pypim.docs.pyansys.com/>`__: Pythonic interface to communicate with the PIM (Product Instance Management) API
- `Granta MI BoM Analytics <https://grantami.docs.pyansys.com/>`__: Pythonic interface to Granta MI BoM Analytics services
- `Shared Components <https://shared.docs.pyansys.com/>`_: Shared software components to enable package interoperability and minimize maintenance

Much effort is underway to continue expanding and developing packages in the
`PyAnsys GitHub <https://github.com/pyansys/>`__ account. On the ``Issues`` page
for each package, you can post issues and request new features. You can also email
questions to `PyAnsys Support <mailto:pyansys.support@ansys.com>`_.

PIP package installation
------------------------
You must install the applicable packages for an Ansys product. While there
are multiple ways to install a Python package on your local machine, `pip
<https://pypi.org/project/pip/>`_ is the package installer for Python. For
your convenience, this section provides the ``pip`` commands for downloading
and installing the most recent PyAnsys packages. The next section provides
links to comprehensive resources for these packages.

**PyAEDT**
``pip install pyaedt``

  - `PyAEDT Documentation <https://aedtdocs.pyansys.com/>`_
  - `PyAEDT PyPI <https://pypi.org/project/pyaedt/>`_
  - `PyAEDT GitHub <https://github.com/pyansys/PyAEDT/>`_


**PyDPF-Core**
``pip install ansys-dpf-core``

  - `DPF-Core Documentation <https://dpfdocs.pyansys.com/>`__
  - `DPF-Core PyPI <https://pypi.org/project/ansys-dpf-core/>`__
  - `DPF-Core GitHub <https://github.com/pyansys/DPF-Core>`__


**PyDPF-Post**
``pip install ansys-dpf-post``

  - `DPF-Post Documentation <https://dpfdocs.pyansys.com/>`_
  - `DPF-Post PyPI <https://pypi.org/project/ansys-dpf-core/>`_
  - `DPF-Post GitHub <https://github.com/pyansys/DPF-Post>`_


**PyMAPDL**
``pip install ansys-mapdl-core``

  - `PyMAPDL Documentation <https://mapdldocs.pyansys.com/>`_
  - `PyMAPDL PyPI <https://pypi.org/project/ansys-mapdl-core/>`_
  - `PyMAPDL GitHub <https://github.com/pyansys/pymapdl/>`_


**PyMAPDL Reader**
``pip install ansys-mapdl-reader``

  - `Legacy PyMAPDL Reader Documentation <https://readerdocs.pyansys.com/>`_
  - `Legacy PyMAPDL Reader PyPI <https://pypi.org/project/ansys-mapdl-reader/>`_
  - `Legacy PyMAPDL Reader GitHub <https://github.com/pyansys/pymapdl-reader>`_


**PyPIM**
``pip install ansys-platform-instancemanagement``

**Granta MI BoM Analytics**
``pip install ansys-grantami-bomanalytics``

  - `Granta MI BoM Analytics Documentation <https://grantami.docs.pyansys.com/>`_
  - `Granta MI BoM Analytics PyPI <https://pypi.org/project/ansys-grantami-bomanalytics/>`_
  - `Granta MI BoM Analytics GitHub <https://github.com/pyansys/grantami-bomanalytics/>`_


**Shared Components**
The PyAnsys project publishes and consumes shared software components that enable
interoperability between PyAnsys packages and minimize maintenance. For more
information, see the `Shared Components documentation <https://shared.docs.pyansys.com/>`_.
The OpenAPI Common library is a shared component. Here is the command for installing it
and links for its comprehensive resources:

``pip install ansys-openapi-common``

  - `OpenAPI Common Documentation <https://openapi.docs.pyansys.com/index.html/>`_
  - `OpenAPI Common PyPI <https://pypi.org/project/ansys-openapi-common/>`_
  - `OpenAPI Common GitHub <https://github.com/pyansys/openapi-common/>`_



License and Acknowledgments
---------------------------
All PyAnsys libraries are licensed under the MIT license.

PyAnsys libraries make no commercial claim over Ansys whatsoever. 
These libraries extend the functionality of Ansys products by
adding Python interfaces to legally obtained software products
without changing the core behaviors or licenses of the original
software.  

For more information about obtaining Ansys products, visit `Ansys <https://www.ansys.com/>`_.
