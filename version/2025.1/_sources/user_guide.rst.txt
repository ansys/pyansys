User guide
==========

User guides for the different ``pyansys`` packages can be found in their specific documentation.
The ``pyansys`` metapackage itself has no functionalities on its own. It is only a bundle of the
different public PyAnsys libraries that are compatible with a given Ansys Unified Install depending
on the version requested.

****************************
PyAnsys packages user guides
****************************

.. jinja:: project_context

    .. grid:: 3
        :gutter: 3 3 4 4

        {% for project, metadata in projects['projects'].items() %}
          {% if 'Tools' not in metadata['family'] %}
        .. grid-item-card:: {{ metadata['name'] }}
          :img-top: {{ metadata['thumbnail'] }}
          :link: {{ metadata['documentation']['user_guide'] }}
          :class-title: pyansys-card-title
        {% endif %}
        {% endfor %}