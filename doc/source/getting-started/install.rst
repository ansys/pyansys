Install PyAnsys
###############

The PyAnsys metapackage is distributed as a Python library. Its installation
follows the standard Python package installation process.

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

The PyAnsys |version| metapackage includes the following projects:

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
                    <td><a href="https://pypi.org/project/{{ project }}/{{ version }}">{{ version }}</a></td>
                </tr>
                {% endfor %}
            </tbody>
        </table>

Additional targets
------------------

The PyAnsys metapackage contains various targets for installing additional
libraries and tools.

.. jinja:: optional_dependencies

    .. tab-set::

        {% for target, dependencies in optional_dependencies.items() %}

        .. tab-item:: {{ target }}

            Install by running:

            .. code-block:: bash

                python -m pip install pyansys[{{ target }}]

            .. raw:: html

                <!-- Initialize DataTables -->
                <script>
                    $(document).ready(function() {
                        $('#target-{{ target }}').DataTable();
                    });
                </script>

                <!-- Populate and render the table -->
                <table id="target-{{ target }}" class="display" style="width:100%">
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
                            <td><a href="https://pypi.org/project/{{ project }}/{{ version }}">{{ version }}</a></td>
                        </tr>
                        {% endfor %}
                    </tbody>
                </table>




         {% endfor %}


Offline installation
====================

Start by downloading the wheelhouse artifact for your platform:

.. jinja:: wheelhouse

    .. csv-table::
       :header-rows: 1
       :widths: 16, 28, 28, 28

       :fas:`laptop` Platform,
       {%- for python in SUPPORTED_PYTHON_VERSIONS -%}
       :fab:`python` Python {{ python }}
       {%- if not loop.last -%},{%- endif -%}
       {% endfor %}
       {% for platform, icon in wheelhouse.items() -%}
       :fab:`{{ icon }}` {{ platform }},
       {%- for python in SUPPORTED_PYTHON_VERSIONS -%}
       `Download wheelhouse <https://github.com/ansys/pyansys/releases/download/v{{ VERSION }}/pyansys-v{{ VERSION }}-all-wheelhouse-{{ platform }}-{{ python }}.zip>`__
       {%- if not loop.last -%},{%- endif -%}
       {% endfor %}
       {% endfor %}

Next, decompress the artifacts:

.. code-block:: bash

    unzip <path/to/wheelhouse.zip> wheelhouse

Finally, install the PyAnsys metapackage using previously downloaded wheelhouse:

.. code-block:: bash

    python -m pip install pyansys -f wheelhouse --no-index --upgrade --ignore-installed
