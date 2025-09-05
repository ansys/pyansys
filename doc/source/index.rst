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
        <img class="project-lp-thumbnail" src="_static/thumbnails/pymapdl.png" />
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
        <img class="project-lp-thumbnail" src="_static/thumbnails/pyfluent.png" />
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
        <img class="project-lp-thumbnail" src="_static/thumbnails/intro.png" />
        <div class="sd-card-body">
            <p class="sd-card-title sd-font-weight-bold"> PyAnsys </p>
            <p class="sd-card-body-text"> Python interface to Ansys </p>
            <p class="sd-card-text">
                <span class="sd-sphinx-override sd-badge sd-bg-muted sd-text-primary">Automation</span>
            </p>
        </div>
      </div>

      <div class="project-card sd-card sd-shadow-sm sd-card-hover" onclick="window.location.href='https://docs.pyansys.com/';">
        <img class="project-lp-thumbnail" src="_static/thumbnails/pydpf-core.png" />
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

  <!-- Latest Blogs section -->

  <section id="blogs">
    <h2>PyAnsys Blogs <a href="projects.html" class="btn btn-link float-end">More blogs</a></h2>
    <div class="blogs-landingpage" id="blogs-landingpage">
    <script src="_static/landing-page/js/blogs.js"></script>
  </section>


  <section id="support" class="my-5">
    <div class="container">
      <h2 class="mb-4">How we support our users all over the world</h2>
      <div class="row">

        <!-- Left column (static content) -->
        <div class="col-md-6">
          <div class="support-step">
            <h5>Pre-simulation</h5>
            <p>Define your simulation setup by specifying the geometry in a flexible, parametric format.</p>
          </div>
          <div class="support-step">
            <h5>During simulation</h5>
            <p>Run high-fidelity simulations and gather comprehensive results that reflect the dynamics of your system.</p>
          </div>
          <div class="support-step">
            <h5>Post simulation</h5>
            <p>Extract, visualize, and interpret key data from your simulation to drive the next phase of your project.</p>
          </div>
        </div>

        <!-- Right column (dynamic testimonials) -->
        <div class="col-md-6">
            <div id="testimonials-container" class="slider-viewport"></div>
            <div id="testimonials-dots" class="d-flex justify-content-center mt-3"></div>
        </div>

      </div>
    </div>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

    <!-- Custom JS -->
    <script src="_static/landing-page/js/testimonials.js"></script>
  </section>



.. toctree::
   :maxdepth: 2
   :hidden:

   getting-started
   projects
   blog