.. title:: PyAnsys

.. raw:: html

    <!-- Carousel: slides + indicators -->
    <div id="customCarousel" class="carousel slide" data-bs-ride="carousel">

      <!-- Slides -->
      <div class="carousel-inner">

        <!-- First slide -->
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

    </div>

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