=======
PyAnsys
=======

Welcome to the PyAnsys project. While this project originated as a single ``pyansys`` package,
it is now a collection of many Python packages for using Ansys products through Python:

.. toctree::
   :hidden:
   :maxdepth: 3

   getting_started
   user_guide
   api
   examples
   supported_versions
   package_versions/index
   tools/index

.. jinja:: project_context

    .. grid:: 3
        :gutter: 3 3 4 4

        {% for project, metadata in projects['projects'].items() %}
        .. grid-item-card:: {{ metadata['name'] }}
          :img-top: {{ metadata['thumbnail'] }}
          :link: {{ metadata['documentation']['base'] }}
          :class-title: pyansys-card-title

          {{ metadata['description'] }}

        {% endfor %}
