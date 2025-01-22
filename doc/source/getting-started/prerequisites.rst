Prerequisites
#############

You need to have the following prerequisites to get started with PyAnsys:

- A valid Python version
- A licensed version of Ansys

Download and install Ansys
==========================

Download Ansys software from the `Ansys Customer Portal`_. Ensure you have a
license to use the software.

Download and install Python
===========================

Download and install the latest stable version of Python from the
`https://www.python.org/downloads <https://www.python.org/downloads>`_.

Suported Python versions
------------------------

The PyAnsys ecosystem follows `SPEC-0`_ for Python version support. This
implies that PyAnsys packages drop support for a Python version three years
after their initial release:

.. mermaid::
   :caption: Python versions supported by SPEC-0 policy (red line) and PyAnsys Python versions supported (color coded)
   :alt: Python versions supported by SPEC-0 policy (red line) and PyAnsys Python versions supported (color coded)
   :align: center

    gantt
        dateFormat YYYY-MM-DD
        axisFormat %Y-%m
        Python 3.7  :done,   des1, 2018-06-27, 3y
        Python 3.8  :done,   des2, 2019-10-14, 3y
        Python 3.9  :done,   des3, 2020-10-05, 3y
        Python 3.10 :active, des4, 2021-10-04, 3y
        Python 3.11 :active, des5, 2022-10-24, 3y
        Python 3.12 :active, des6, 2023-10-02, 3y
        Python 3.13 :        des7, 2024-10-01, 3y

In previous diagram:

* Python versions in gray are no not supported
* Python versions in light blue are supported
* Python versions in dark blue will be supported in the future

.. note::

    Adoption and deprecation of Python versions in the PyAnsys ecosystem are
    tentative. Delays may occur due to third party dependencies.

Below you can find a list of the Python versions supported by each PyAnsys
metapackage release:

.. jinja:: releases

    .. list-table:: Supported Package Versions
        :header-rows: 1

        * - PyAnsys metapackage version
          - Supported Python versions
        {% for release in table_data %}
        * - `{{ release.version }} <https://pypi.org/project/pyansys/{{ release.pypi}}>`_
          - From Python {{ release.python[0] }} up to Python {{ release.python[1] }}
        {% endfor %}
