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

        <div class="projects" style="">
            {% for project, metadata in projects['projects'].items() %}
            <div class="project-card" data-family="{{ metadata.get('family', 'other') | lower }}">
                <img class="project-thumbnail" src="{{ metadata['thumbnail'] }}" />
                <p class="project-title"> {{ metadata['name'] }} </p>
                <p class="project-description"> {{ metadata['description'] }} </p>
            </div>
            {% endfor %}
        </div>
