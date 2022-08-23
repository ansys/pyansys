PyAnsys metapackage
===================
|pyansys| |python| |pypi| |GH-CI| |MIT| |black|

.. |pyansys| image:: https://img.shields.io/badge/Py-Ansys-ffc107.svg?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABDklEQVQ4jWNgoDfg5mD8vE7q/3bpVyskbW0sMRUwofHD7Dh5OBkZGBgW7/3W2tZpa2tLQEOyOzeEsfumlK2tbVpaGj4N6jIs1lpsDAwMJ278sveMY2BgCA0NFRISwqkhyQ1q/Nyd3zg4OBgYGNjZ2ePi4rB5loGBhZnhxTLJ/9ulv26Q4uVk1NXV/f///////69du4Zdg78lx//t0v+3S88rFISInD59GqIH2esIJ8G9O2/XVwhjzpw5EAam1xkkBJn/bJX+v1365hxxuCAfH9+3b9/+////48cPuNehNsS7cDEzMTAwMMzb+Q2u4dOnT2vWrMHu9ZtzxP9vl/69RVpCkBlZ3N7enoDXBwEAAA+YYitOilMVAAAAAElFTkSuQmCC
   :target: https://docs.pyansys.com/
   :alt: PyAnsys

.. |python| image:: https://img.shields.io/badge/Python-%3E%3D3.7-blue
   :target: https://pypi.org/project/pyansys/
   :alt: Python

.. |pypi| image:: https://img.shields.io/pypi/v/pyansys.svg?logo=python&logoColor=white
   :target: https://pypi.org/project/pyansys/
   :alt: PyPI

.. |GH-CI| image:: https://github.com/pyansys/pydiscovery/actions/workflows/ci_cd.yml/badge.svg
   :target: https://github.com/pyansys/pyansys/actions/workflows/ci_cd.yml
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

- `PyAEDT <https://aedt.docs.pyansys.com/>`__ : Pythonic interface to AEDT (Ansys Electronic Desktop)
- `PyDPF-Core <https://dpf.docs.pyansys.com/>`__ : Pythonic interface to DPF (Data Processing Framework) for building more advanced and customized workflows
- `PyDPF-Post <https://post.docs.pyansys.com/>`__ : Pythonic interface to DPF's postprocessing toolbox for manipulating and transforming simulation data
- `PyMAPDL <https://mapdl.docs.pyansys.com/>`__ : Pythonic interface to MAPDL.
- `PyMAPDL Reader <https://reader.docs.pyansys.com/>`__: Pythonic interface to read legacy MAPDL result files (MAPDL 14.5 and later)
- `PyFluent <https://fluent.docs.pyansys.com/>`__ : Pythonic interface to Ansys Fluent
- `PyFluent-Parametric <https://fluentparametric.docs.pyansys.com/>`__ : Pythonic interface to Ansys Fluent parametric workflows
- `PyFluent-Visualization <https://fluentvisualization.docs.pyansys.com/>`__ : Pythonic interface to visualize Ansys Fluent simulations using Python
- `PyPIM <https://pypim.docs.pyansys.com/>`__: Pythonic interface to communicate with the PIM (Product Instance Management) API
- `Granta MI BoM Analytics <https://grantami.docs.pyansys.com/>`__: Pythonic interface to Granta MI BoM Analytics services
- `Shared Components <https://shared.docs.pyansys.com/>`_: Shared software components to enable package interoperability and minimize maintenance

Much effort is underway to continue expanding and developing packages in the
`PyAnsys GitHub <https://github.com/pyansys/>`__ account. On the ``Issues`` page
for each package, you can post issues and request new features. You can also email
questions to `PyAnsys Support <mailto:pyansys.support@ansys.com>`_.

Package installation
--------------------

WIP

License and acknowledgments
---------------------------
All PyAnsys libraries are licensed under the MIT license.

PyAnsys libraries make no commercial claim over Ansys whatsoever. 
These libraries extend the functionality of Ansys products by
adding Python interfaces to legally obtained software products
without changing the core behaviors or licenses of the original
software.  

For more information about Ansys products, visit the `Ansys web site <https://www.ansys.com/>`_.
