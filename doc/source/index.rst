.. title:: PyAnsys

.. raw:: html

    <!-- Carousel: slides + indicators -->
    <div id="customCarousel" class="carousel slide" data-bs-ride="carousel">

      <!-- Slides -->
      <div class="carousel-inner">

        <!-- First slide -->
        <div class="carousel-item active" style="background-image: url('_static/landing-page/antenna.png'); background-size: cover; background-position: center;">
          <div class="carousel-content">
            <h2>Automate your simulations using Python</h2>
            <p>
                PyAnsys provides Pythonic access to Ansys simulation tools, making automation,
                scripting, and integration easier for engineers and developers.
            </p>
            <a href="#" class="btn btn-custom">Getting started</a>
          </div>
        </div>

        <!-- Second slide -->
        <div class="carousel-item" style="background-image: url('https://picsum.photos/id/1025/1200/500'); background-size: cover; background-position: center;">
          <div class="carousel-content">
            <h2>Discover the project that best suits your needs</h2>
            <p>The PyAnsys ecosystem contains a rich set of multi-physics Python APIs designed to empower engineers, researchers, and developers to interact seamlessly with Ansys simulation tools.</p>
            <a href="#" class="btn btn-custom">Explore</a>
          </div>
        </div>

        <!-- Third slide -->
        <div class="carousel-item" style="background-image: url('https://picsum.photos/id/1039/1200/500'); background-size: cover; background-position: center;">
          <div class="carousel-content">
            <h2>Read about the latest news of PyAnsys</h2>
            <p>Stay tuned for updates on new features, releases, community contributions, and how PyAnsys is transforming simulation workflows across industries.</p>
            <a href="#" class="btn btn-custom">Discover</a>
          </div>
        </div>

        <!-- Fourth slide -->
        <div class="carousel-item" style="background-image: url('https://picsum.photos/id/1043/1200/500'); background-size: cover; background-position: center;">
          <div class="carousel-content">
            <h2>Ocean Breeze</h2>
            <p>Breathe in the salty air and feel the calm of the sea.</p>
            <a href="#" class="btn btn-custom">Relax</a>
          </div>
        </div>

      </div>

      <!-- Indicators -->
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#customCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="discover-pyansys">Automate your simulations using Python</button>
        <button type="button" data-bs-target="#customCarousel" data-bs-slide-to="1" aria-label="pyansys-projects">Discover the projects</button>
        <button type="button" data-bs-target="#customCarousel" data-bs-slide-to="2" aria-label="City Lights">Latest news about PyAnsys</button>
        <button type="button" data-bs-target="#customCarousel" data-bs-slide-to="3" aria-label="Ocean Breeze">Contact us</button>
      </div>

    </div>

    <hr class="mt-6 mb-2">

    <!-- Key Features -->
    <section class="bg-light">
      <div class="container">
        <h2 class="text-center">Key features of PyAnsys</h2>
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="d-flex align-items-center mb-2">
              <h5 class="mb-0"><i class="fas fa-robot text-dark me-2"></i>Automation</h5>
            </div>
            <p>
              Automate your simulation workflows to eliminate repetitive tasks,
              reduce human error, and accelerate your development cycle.
            </p>
            <img style="padding-top: 0rem;" src="_static/landing-page/pipe.png" class="img-fluid rounded" alt="PyAnsys" />
          </div>
          <div class="col-md-4 mb-4">
            <div class="d-flex align-items-center mb-2">
              <h5 class="mb-0"><i class="fas fa-code text-dark me-2"></i>Python API</h5>
            </div>
            <p>
              Access a robust and intuitive Python API that enables powerful
              scripting capabilities, customization, and extensibility.
            </p>
            <img style="padding-top: 0rem;" src="_static/landing-page/camera.png" class="img-fluid rounded" alt="PyAnsys" />
          </div>
          <div class="col-md-4 mb-4">
            <div class="d-flex align-items-center mb-2">
              <h5 class="mb-0"><i class="fas fa-cubes text-dark me-2"></i>Integration</h5>
            </div>
            <p>
              Seamlessly integrate Ansys tools with other Python-based
              frameworks, allowing for a unified and scalable simulation
              ecosystem.
            </p>
            <img style="padding-top: 0rem;" src="_static/landing-page/porkchop.png" class="img-fluid rounded" alt="PyAnsys" />
          </div>
        </div>
      </div>
    </section>


    <!-- Slide Selectors Below -->
    <div class="row mt-4 text-center">
      <div class="col-md-4 mb-2">
        <button class="btn btn-outline-dark w-100" data-bs-target="#pyansysCarousel" data-bs-slide-to="0">
          <strong>Automate FEA</strong><br>Finite element scripting
        </button>
      </div>
      <div class="col-md-4 mb-2">
        <button class="btn btn-outline-dark w-100" data-bs-target="#pyansysCarousel" data-bs-slide-to="1">
          <strong>Post-Processing</strong><br>Extract and visualize data
        </button>
      </div>
      <div class="col-md-4 mb-2">
        <button class="btn btn-outline-dark w-100" data-bs-target="#pyansysCarousel" data-bs-slide-to="2">
          <strong>ML Integration</strong><br>Combine simulation + AI
        </button>
      </div>
    </div>
  </div>
  </section>

    <!-- Testimonials Section -->
    <section class="bg-light py-5">
      <div class="container">
        <h2 class="text-center mb-4">What Our Users Say</h2>
        <div id="testimonialMultiCarousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner" id="testimonialCarouselContent">
            <!-- Slides will be inserted here -->
          </div>

          <button class="carousel-control-prev" type="button" data-bs-target="#testimonialMultiCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#testimonialMultiCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
    <!-- Bootstrap JS (may not be necessary since PyData already declares this) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="_static/js/landing_page.js"></script>

.. toctree::
    :hidden:
    :maxdepth: 3

    Home<self>
    getting-started
    projects
    blog
