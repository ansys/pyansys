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

    .. raw:: html

        <div class="projects">
            {% for project, metadata in projects['projects'].items() %}

            {% set family = metadata.get('family', 'other') | lower | replace(' ', '-') %}
            {% set tags = metadata.get('tags', 'other') | lower %}

            <div 
                class="project-card sd-card sd-shadow-sm sd-card-hover" 
                data-family="{{ family }}" 
                data-tags="{{ tags }}"
                onclick="window.location.href='{{ metadata['documentation']['base'] }}';"
            >
                <img class="project-thumbnail" src="{{ metadata['thumbnail'] }}" />
                <div class="sd-card-body">
                    <p class="sd-card-title sd-font-weight-bold"> {{ metadata['name'] }} </p>
                    <p class="sd-card-body-text"> {{ metadata['description'] }} </p>
                </div>
            </div>

            {% endfor %}
        </div>
