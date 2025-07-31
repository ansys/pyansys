=======
PyAnsys
=======

Welcome to the PyAnsys project. While this project originated as a single ``pyansys`` package,
it is now a collection of many Python packages for using Ansys products through Python:

.. toctree::
   :hidden:
   :maxdepth: 3

   getting-started
   user_guide
   api
   examples
   tools/index

.. jinja:: project_context

    .. raw:: html

        <div class="projects">
            {% for project, metadata in projects['projects'].items() %}

            {% if metadata.get('families') %}
                {% set families = metadata.get('families', []) %}
                {% set family_attr = families | join(',') | lower | replace(' ', '-') %}
                {% set family_display = families[0] | lower | replace(' ', '-') %}
            {% else %}
                {% set families = [metadata.get('family', 'other')] %}
                {% set family_attr = metadata.get('family', 'other') | lower | replace(' ', '-') %}
                {% set family_display = metadata.get('family', 'other') | lower | replace(' ', '-') %}
            {% endif %}
            {% set tags = metadata.get('tags', []) %}

            <div
                class="project-card sd-card sd-shadow-sm sd-card-hover"
                data-families="{{ families }}"
                data-family="{{ family_display }}"
                data-tags="{{ tags }}"
                onclick="window.location.href='{{ metadata['documentation']['base'] }}';"
            >
                <img class="project-thumbnail" src="{{ metadata['thumbnail'] }}" />
                <div class="sd-card-body">
                    <p class="sd-card-title sd-font-weight-bold"> {{ metadata['name'] }} </p>
                    <p class="sd-card-body-text"> {{ metadata['description'] }} </p>
                    <p class="sd-card-text">
                        {% for family in families %}
                        <span class="sd-sphinx-override sd-badge sd-bg-muted sd-text-primary">{{ family }}</span>
                        {% endfor %}
                        {% for tag in metadata['tags'] %}
                        <span class="sd-sphinx-override sd-badge sd-bg-muted sd-text-primary">{{ tag }}</span>
                        {% endfor %}
                        </p>
                </div>
            </div>

            {% endfor %}
        </div>
