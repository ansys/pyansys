.. _supported_versions:

Python versions
===============

The PyAnsys ecosystem follows `SPEC-0`_ for Python version support,
which is also similar to `NEP 29`_. This means:

* PyAnsys packages are expected to drop support for Python versions **3 years** after their
  initial release.

You can find below the timeline for the end of support for each Python version according to the SPEC-0 policy
as well as a table showing the Python versions supported by each PyAnsys metapackage, which might slightly
differ from the SPEC-0 policy but is always aligned with it.

* Grayed out Python versions are no longer supported by the current version of the PyAnsys metapackage.
* Light blue Python versions are currently supported.
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

Below you can find a list of the Python versions supported by each PyAnsys metapackage release:

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
.. _SPEC-0: https://scientific-python.org/specs/spec-0000/
.. _NEP 29: https://numpy.org/neps/nep-0029-deprecation_policy.html
.. _2023.1: https://pypi.org/project/pyansys/2023.1.3/
.. _2023.2: https://pypi.org/project/pyansys/2023.2.11/
.. _2024.1: https://pypi.org/project/pyansys/2024.1.8/
.. _2024.2: https://pypi.org/project/pyansys/2024.2.2/
.. _2025.1: https://pypi.org/project/pyansys/2025.1.1/
.. _development: https://github.com/ansys/pyansys
