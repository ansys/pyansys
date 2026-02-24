.. _ref_other_contribs:

Open-source contributions
#########################

Beyond the PyAnsys simulation libraries, the Ansys team actively maintains and
contributes a collection of **open-source tools and utilities** made freely
available to the broader engineering and scientific Python community. These
projects support developer workflows, documentation, code quality, and
repository management. We are open to contributions from anyone.

.. note::

   The projects listed here are community-oriented open-source tools. They are
   not PyAnsys simulation interfaces, but rather developer utilities and shared
   infrastructure that benefit the wider ecosystem. Contributions and feedback
   are always welcome.

.. jinja:: project_context

    .. raw:: html

        {% from "_templates/project_card.html" import render_card %}
        <div class="projects">
            {% for project, metadata in projects['projects'].items() %}
                {%- if 'Others' in metadata.get('families', []) %}
                    {{ render_card(metadata, show_families=False) | indent(20) }}
                {%- endif %}
            {%- endfor %}
        </div>
