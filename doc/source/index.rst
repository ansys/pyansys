.. title:: PyAnsys

.. raw:: html

  <!-- Carousel: slides + indicators -->
  <div id="customCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-background">
      <div class="carousel-content">
        <h2>PyAnsys</h2>
        <p>
            PyAnsys provides Pythonic access to Ansys simulation tools, making automation,
            scripting, and integration easier for engineers and developers.
        </p>
        <a href="getting-started.html" class="btn btn-custom">Getting started</a>
        <a href="projects.html" class="btn btn-custom">Explore projects</a>
        <a href="blog/index.html" class="btn btn-custom">Latest news</a>
        <a href="contact.html" class="btn btn-custom">Contact us</a>
      </div>
    </div>
  </div>

  <!-- Pyansys libraries section -->

  <section id="libraries">
    <h2>PyAnsys libraries <a href="projects.html" class="btn btn-link float-end">More libraries</a></h2>
    <div class="projects-landingpage">

      <div class="project-card sd-card sd-shadow-sm sd-card-hover" onclick="window.location.href='https://docs.pyansys.com/';">
        <img class="project-thumbnail" src="_static/thumbnails/pymapdl.png" />
        <div class="sd-card-body">
            <p class="sd-card-title sd-font-weight-bold"> PyMAPDL </p>
            <p class="sd-card-body-text"> Python interface to MAPDL (Mechanical APDL) </p>
            <p class="sd-card-text">
                <span class="sd-sphinx-override sd-badge sd-bg-muted sd-text-primary">FEA</span>
                <span class="sd-sphinx-override sd-badge sd-bg-muted sd-text-primary">MAPDL</span>
                <span class="sd-sphinx-override sd-badge sd-bg-muted sd-text-primary">Automation</span>
            </p>
        </div>
      </div>

      <div class="project-card sd-card sd-shadow-sm sd-card-hover" onclick="window.location.href='https://docs.pyansys.com/';">
        <img class="project-thumbnail" src="_static/thumbnails/pyfluent.png" />
        <div class="sd-card-body">
            <p class="sd-card-title sd-font-weight-bold"> PyFluent </p>
            <p class="sd-card-body-text"> Python interface to Ansys Fluent </p>
            <p class="sd-card-text">
                <span class="sd-sphinx-override sd-badge sd-bg-muted sd-text-primary">CFD</span>
                <span class="sd-sphinx-override sd-badge sd-bg-muted sd-text-primary">Fluent</span>
                <span class="sd-sphinx-override sd-badge sd-bg-muted sd-text-primary">Automation</span>
            </p>
        </div>
      </div>

      <div class="project-card sd-card sd-shadow-sm sd-card-hover" onclick="window.location.href='https://docs.pyansys.com/';">
        <img class="project-thumbnail" src="_static/thumbnails/intro.png" />
        <div class="sd-card-body">
            <p class="sd-card-title sd-font-weight-bold"> PyAnsys </p>
            <p class="sd-card-body-text"> Python interface to Ansys </p>
            <p class="sd-card-text">
                <span class="sd-sphinx-override sd-badge sd-bg-muted sd-text-primary">Automation</span>
            </p>
        </div>
      </div>

      <div class="project-card sd-card sd-shadow-sm sd-card-hover" onclick="window.location.href='https://docs.pyansys.com/';">
        <img class="project-thumbnail" src="_static/thumbnails/pydpf-core.png" />
        <div class="sd-card-body">
            <p class="sd-card-title sd-font-weight-bold"> PyDPF-Core </p>
            <p class="sd-card-body-text"> Python interface to Ansys DPF (Data Processing Framework) </p>
            <p class="sd-card-text">
                <span class="sd-sphinx-override sd-badge sd-bg-muted sd-text-primary">Post-processing</span>
                <span class="sd-sphinx-override sd-badge sd-bg-muted sd-text-primary">DPF</span>
                <span class="sd-sphinx-override sd-badge sd-bg-muted sd-text-primary">Automation</span>
            </p>
        </div>
      </div>
    </div>
  </section>


    <div class="section-divider">
      <span class="section-title">Explore PyAnsys possibilities</span>
    </div>

    <!-- Workflow cards -->
    <div class="container py-2">
      <div class="row g-4">

        <!-- Card 1 -->
        <div class="col-md-4">
          <div class="card">
            <iframe src='_static/static_viewer.html?fileURL=landing-page/vtksz/geometry.vtksz' width='100%%' height='400px' frameborder='0'></iframe>
            <div class="card-body">
              <h5 class="card-title">Pre-process your simulation</h5>
              <p class="card-text">Define your simulation setup by specifying the geometry in a flexible, parametric format. Clearly establish boundary and initial conditions to ensure accurate modeling of physical behaviors. This foundational step enables precise control over your simulation environment and sets the stage for meaningful analysis.</p>
            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="col-md-4">
          <div class="card">
            <iframe src='_static/static_viewer.html?fileURL=landing-page/vtksz/mesh_2.vtksz' width='100%%' height='400px' frameborder='0'></iframe>
            <div class="card-body">
              <h5 class="card-title">Simulate and collect results</h5>
              <p class="card-text">Run high-fidelity simulations and gather comprehensive results that reflect the dynamics of your system. Leverage powerful computational tools to model complex scenarios, validate designs, and explore different configurations. These insights help you make informed decisions based on real-time simulation outputs.</p>
            </div>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="col-md-4">
          <div class="card">
            <iframe src='_static/static_viewer.html?fileURL=landing-page/vtksz/results.vtksz' width='100%%' height='400px' frameborder='0'></iframe>
            <div class="card-body">
              <h5 class="card-title">Post-process your results</h5>
              <p class="card-text">Extract, visualize, and interpret key data from your simulation to drive the next phase of your project. Post-processing tools help identify trends, highlight performance metrics, and transform raw output into actionable information. This step ensures your workflow remains efficient and results-oriented.</p>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Testimonials Section -->
    <div class="section-divider">
      <span class="section-title">Testimonials</span>
    </div>

    <section class="bg-light py-2">
      <div id="testimonials-container" class="row"></div>
      <div id="testimonials-dots" class="d-flex justify-content-center mt-3"></div>
    </section>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

    <!-- Custom JS -->
    <script src="_static/landing-page/js/testimonials.js"></script>


.. toctree::
   :maxdepth: 2
   :hidden:

   getting-started
   projects
   blog