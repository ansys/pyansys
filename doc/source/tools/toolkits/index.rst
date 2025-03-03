PyAnsys toolkits
================

.. contents::

PyAEDT toolkits
---------------
.. jinja:: project_context

    .. grid:: 3
        :gutter: 3 3 4 4

        {% for project, metadata in projects['projects'].items() %}
          {% if 'PyAEDT toolkits' in metadata['tags'] %}
        .. grid-item-card:: {{ metadata['name'] }}
          :img-top: ../../{{ metadata['thumbnail'] }}
          :link: {{ metadata['documentation']['base'] }}
          :class-title: pyansys-card-title

          {{ metadata['description'] }}
        {% endif %}
        {% endfor %}