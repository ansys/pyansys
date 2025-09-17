Projects
########

.. jinja:: project_context

    .. raw:: html

        <div class="projects">
            {% for project, metadata in projects['projects'].items() %}

            {% set families = metadata.get('families', ['Other']) %}
            {% set family_attr = families | join(',') | lower | replace(' ', '-') %}
            {% set family_display = families[0] | lower | replace(' ', '-') %}
            {% set tags = metadata.get('tags', []) %}

            <div
                class="project-card sd-card sd-shadow-sm sd-card-hover"
                data-families="{{ families }}"
                data-family="{{ family_display }}"
                data-tags="{{ tags }}"
                onclick="window.location.href='{{ metadata['documentation']['base'] }}';"
            >
                {% if metadata.get('starred', False) %}
                <span class="star-icon" title="Highlighted project">&#9733;</span>
                {% endif %}
                <img class="project-thumbnail" src="{{ metadata['thumbnail'] }}" />
                <div class="sd-card-body">
                    <p class="sd-card-title sd-font-weight-bold">
                        {{ metadata['name'] }}
                    </p>
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
            <style>
            .star-icon {
                position: absolute;
                top: 8px;
                left: 8px;
                color: #ffb71b;
                font-size: 1.5em;
                z-index: 2;
                padding: 2px 6px;
                }
            </style>
        </div>
