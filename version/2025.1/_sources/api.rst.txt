API reference
=============

The ``pyansys`` metapackage on its own does not have a specific API. The only information specific-only
to this package that can be provided is its version. This can be looked up as follows:

.. code-block:: pycon

    >>> from pyansys import __version__
    >>> __version__

    '2023.1.0'

However, each of the PyAnsys packages that shape the ``pyansys`` metapackage have their own specific API
reference section. In order to navigate through them, please refer to their documentation.

******************************
PyAnsys packages API reference
******************************

.. jinja:: project_context

    .. grid:: 3
        :gutter: 3 3 4 4

        {% for project, metadata in projects['projects'].items() %}
          {% if 'Tools' not in metadata['family'] %}
        .. grid-item-card:: {{ metadata['name'] }}
          :img-top: {{ metadata['thumbnail'] }}
          :link: {{ metadata['documentation']['api'] }}
          :class-title: pyansys-card-title

        {% endif %}
        {% endfor %}