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

Supported Python versions
-------------------------

The PyAnsys ecosystem follows `SPEC-0`_ for Python version support. This
implies that PyAnsys packages drop support for a Python version three years
after their initial release:

.. mermaid::
   :caption: Python versions supported by SPEC-0 policy (red line) and PyAnsys Python versions supported (color coded)
   :alt: Current Python versions supported by the PyAnsys metapackage
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

* Python versions in gray are no longer supported
* Python versions in light blue are currently supported
* Python versions in dark blue are not supported yet

.. note::

    Adoption and deprecation of Python versions in the PyAnsys ecosystem are
    tentative. Delays may occur due to third party dependencies.

Below you can find a list of the Python versions supported by each PyAnsys
metapackage release:

.. jinja:: releases

    .. raw:: html

        <!-- Include DataTables CSS, jQuery, and JS -->
        <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.13.6/css/jquery.dataTables.min.css">
        <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
        <script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>

        <!-- Initialize DataTables -->
        <script>
            $(document).ready(function() {
                $('#supported-python-versions').DataTable();
            });
        </script>

        <!-- Populate and render the table -->
        <table id="supported-python-versions" class="display" style="width:100%">
            <thead>
                <tr>
                    <th>PyAnsys version</th>
                    <th>Min. Python version</th>
                    <th>Max. Python version</th>
                    <th>Download</th>
                </tr>
            </thead>
            <tbody>
                {% for release in table_data %}
                <tr>
                    <td>{{ release.version }}</td>
                    <td>{{ release.python.lower }}</td>
                    <td>{{ release.python.upper }}</td>
                    <td><a href={{ release.link}}>{{ release.link }}</a></td>
                </tr>
                {% endfor %}
            </tbody>
        </table>
