Prerequisites
#############

You need to have the following prerequisites to get started with PyAnsys:

- A valid Python version
- A licensed version of Ansys

Download Ansys
==============

Download Ansys software from the `Ansys Customer Portal`_.

Download Python
===============

Download and install the latest stable version of Python from the
`https://www.python.org./downloads`_.


Suported Python versions
------------------------

The PyAnsys ecosystem follows `SPEC-0`_ for Python version support. This
implies that PyAnsys packages drop support for a Python version three years
after their initial release.

You can find below the timeline for the end of support for each Python version according to the SPEC-0 policy
as well as a table showing the Python versions supported by each PyAnsys metapackage, which might slightly
differ from the SPEC-0 policy but is always aligned with it.

* Python versions in gray are no not supported
* Python versions in light blue are currently supported
* Dark blue Python versions are upcoming Python releases for which support is expected in the future.

Some extra remarks:

* The length of the Python version boxes is indicative of the support duration according to the `SPEC-0`_ policy.
* The color of the Python version boxes is indicative of the PyAnsys metapackage current support.

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

Below you can find a list of the Python versions supported by each PyAnsys
metapackage release:

.. jinja:: package_version_for_metapackage

    {% for metapackage, (lower, upper) in package_version_for_metapackage %}
    metapackage, lower, upper
    {% endfor %}

+-----------------+----------------------------+
| Package version | Python versions supported  |
+=================+============================+
| `2023.1`_       | Python 3.7 - Python 3.10   |
+-----------------+----------------------------+
| `2023.2`_       | Python 3.8 - Python 3.11   |
+-----------------+----------------------------+
| `2024.1`_       | Python 3.9 - Python 3.12   |
+-----------------+----------------------------+
| `2024.2`_       | Python 3.9 - Python 3.12   |
+-----------------+----------------------------+
| `2025.1`_       | Python 3.10 - Python 3.12  |
+-----------------+----------------------------+
| `development`_  | Python 3.10 - Python 3.12  |
+-----------------+----------------------------+


.. LINKS
.. _2023.1: https://pypi.org/project/pyansys/2023.1.3/
.. _2023.2: https://pypi.org/project/pyansys/2023.2.11/
.. _2024.1: https://pypi.org/project/pyansys/2024.1.8/
.. _2024.2: https://pypi.org/project/pyansys/2024.2.2/
.. _2025.1: https://pypi.org/project/pyansys/2025.1.0/
.. _development: https://github.com/ansys/pyansys



