Standalone projects
===================

.. contents::

General purpose
---------------

.. jinja:: project_context

    .. grid:: 3
        :gutter: 3 3 4 4

        {% for project, metadata in projects['projects'].items() %}
          {% if 'General purpose' in metadata['tags'] %}
        .. grid-item-card:: {{ metadata['name'] }}
          :img-top: ../../{{ metadata['thumbnail'] }}
          :link: {{ metadata['documentation']['base'] }}
          :class-title: pyansys-card-title

          {{ metadata['description'] }}
        {% endif %}
        {% endfor %}

Demo purposes
-------------

.. jinja:: project_context

    .. grid:: 3
        :gutter: 3 3 4 4

        {% for project, metadata in projects['projects'].items() %}
          {% if 'Demo' in metadata['tags'] %}
        .. grid-item-card:: {{ metadata['name'] }}
          :img-top: ../../{{ metadata['thumbnail'] }}
          :link: {{ metadata['documentation']['base'] }}
          :class-title: pyansys-card-title

          {{ metadata['description'] }}
        {% endif %}
        {% endfor %}

Repository management
---------------------

.. jinja:: project_context

    .. grid:: 3
        :gutter: 3 3 4 4

        {% for project, metadata in projects['projects'].items() %}
          {% if 'Repository management' in metadata['tags'] %}
        .. grid-item-card:: {{ metadata['name'] }}
          :img-top: ../../{{ metadata['thumbnail'] }}
          :link: {{ metadata['documentation']['base'] }}
          :class-title: pyansys-card-title

          {{ metadata['description'] }}
        {% endif %}
        {% endfor %}

Artificial intelligence
-----------------------

.. jinja:: project_context

    .. grid:: 3
        :gutter: 3 3 4 4

        {% for project, metadata in projects['projects'].items() %}
          {% if 'Artificial intelligence' in metadata['tags'] %}
        .. grid-item-card:: {{ metadata['name'] }}
          :img-top: ../../{{ metadata['thumbnail'] }}
          :link: {{ metadata['documentation']['base'] }}
          :class-title: pyansys-card-title

          {{ metadata['description'] }}
        {% endif %}
        {% endfor %}

Documentation
-------------

.. jinja:: project_context

    .. grid:: 3
        :gutter: 3 3 4 4

        {% for project, metadata in projects['projects'].items() %}
          {% if 'Documentation' in metadata['tags'] %}
        .. grid-item-card:: {{ metadata['name'] }}
          :img-top: ../../{{ metadata['thumbnail'] }}
          :link: {{ metadata['documentation']['base'] }}
          :class-title: pyansys-card-title

          {{ metadata['description'] }}
        {% endif %}
        {% endfor %}
