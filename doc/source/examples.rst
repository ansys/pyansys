Examples
========

Examples for the different ``pyansys`` packages can be found in their specific documentation.

*************************
PyAnsys packages examples
*************************

.. note:: Combining PyAnsys libraries?

    If you are using multiple PyAnsys libraries, you can find examples on how to combine them
    in the `PyAnsys Workflows <https://workflows.docs.pyansys.com/>`_ page. This page contains
    practical examples on how to chain different PyAnsys libraries together.

.. jinja:: project_context

    .. grid:: 3
        :gutter: 3 3 4 4

        {% for project, metadata in projects['projects'].items() %}
          {% if 'other_tools' not in metadata or metadata['other_tools'] != True %}
        .. grid-item-card:: {{ metadata['name'] }}
          :img-top: {{ metadata['thumbnail'] }}
          :link: {{ metadata['documentation']['examples'] }}
          :class-title: pyansys-card-title

        {% endif %}
        {% endfor %}