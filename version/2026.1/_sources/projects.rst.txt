.. _ref_projects:

Projects
########

.. note::

   Looking for open-source developer tools and shared infrastructure projects
   contributed by the Ansys team to the wider community? Visit the
   :ref:`ref_other_contribs` page.

.. jinja:: project_context

    .. raw:: html

        {% from "_templates/project_card.html" import render_card %}
        <div class="projects">
            {% for project, metadata in projects['projects'].items() %}
                {%- if 'Others' not in metadata.get('families', []) %}
                    {{ render_card(metadata, show_families=True) | indent(20) }}
                {%- endif %}
            {%- endfor %}
        </div>
