Install PyAnsys
###############

.. raw:: html

    <!-- Include DataTables CSS, jQuery, and JS -->
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.13.6/css/jquery.dataTables.min.css">
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>

Installing the PyAnsys metapackage is as simple as installing any Python
library. However, you must have a licensed copy of `Ansys <Ansys Customer
Portal>`_ to use it.

Online installation
===================

Download and install PyAnsys from `PyPI`_:

.. tab-set::

    .. tab-item:: :fab:`windows` **Windows**

        .. code-block:: bash

            python -m pip install pyansys

    .. tab-item:: :fab:`apple` **MacOS**

        .. code-block:: bash

            python -m pip install pyansys

    .. tab-item:: :fab:`linux` **Linux**

        .. code-block:: bash

            python -m pip install pyansys

The PyAnsys |version| metapackage installs the following projects:

.. jinja:: dependencies

    .. raw:: html

        <!-- Initialize DataTables -->
        <script>
            $(document).ready(function() {
                $('#pyansys-projects').DataTable();
            });
        </script>

        <!-- Populate and render the table -->
        <table id="pyansys-projects" class="display" style="width:100%">
            <thead>
                <tr>
                    <th>PyAnsys project</th>
                    <th>Version</th>
                </tr>
            </thead>
            <tbody>
                {% for project, version in dependencies.items() %}
                <tr>
                    <td>{{ project }}</td>
                    <td>{{ version }}</td>
                </tr>
                {% endfor %}
            </tbody>
        </table>

Additional targets
------------------




Offline installation
====================

Download the artifacts for your platform:

.. tab-set::

    .. tab-item:: :fab:`windows` **Windows**

        .. code-block:: bash

            python -m pip install pyansys

    .. tab-item:: :fab:`apple` **MacOS**

        .. code-block:: bash

            python -m pip install pyansys

    .. tab-item:: :fab:`linux` **Linux**

        .. code-block:: bash

            python -m pip install pyansys


