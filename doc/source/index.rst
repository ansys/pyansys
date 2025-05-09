.. title:: PyAnsys

.. raw:: html

    <!-- Hero Section -->
    <section class="container py-1 d-flex align-items-center">
      <div class="row">

        <div class="col-md-6 mb-1">
          <h1 class="display-5 fw-bold pt-2">Automate your simulation using Python</h1>
          <p class="lead">
            PyAnsys provides Pythonic access to Ansys simulation tools, making automation,
            scripting, and integration easier for engineers and developers.
          </p>
          <p>
            <ul class="list-unstyled">
              <li><i class="fas fa-check-circle text-success"></i> Easy to use Python API</li>
              <li><i class="fas fa-check-circle text-success"></i> Seamless integration with Ansys products</li>
              <li><i class="fas fa-check-circle text-success"></i> Extensive documentation and community support</li>
            </ul>
          </p>
          <div class="text-center">
            <h5 id="install" class="fw-semibold mb-3">Install</h5>
            <div class="d-flex justify-content-center gap-2 flex-wrap">
              <a href="#windows" class="btn btn-dark btn-lg">
                <i class="fab fa-windows me-2"></i>Windows
              </a>
              <a href="#macos" class="btn btn-dark btn-lg">
                <i class="fab fa-apple me-2"></i>macOS
              </a>
              <a href="#linux" class="btn btn-dark btn-lg">
                <i class="fab fa-linux me-2"></i>Linux
              </a>
            </div>
          </div>
        </div>

        <div class="col-md-6 text-center">
          <img id="hero-image" style="padding-top: 0rem;" src="_static/landing-page/geometry-banner.png" class="img-fluid rounded" alt="PyAnsys" />
        </div>

      </div>
    </section>

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


    <!-- Carousel Section -->
    <section class="py-5">
      <div class="container">
        <h2 class="text-center mb-4">What You Can Do with PyAnsys</h2>
        <div id="pyansysCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://picsum.photos/800/400?random=1" class="d-block w-100 rounded" alt="...">
              <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
                <h5>Automate FEA Analysis</h5>
                <p>Run full finite element workflows through Python scripts.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="https://picsum.photos/800/400?random=2" class="d-block w-100 rounded" alt="...">
              <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
                <h5>Post-Processing</h5>
                <p>Extract and visualize simulation results programmatically.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="https://picsum.photos/800/400?random=3" class="d-block w-100 rounded" alt="...">
              <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
                <h5>Integration with ML</h5>
                <p>Combine simulation with machine learning to build smart systems.</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#pyansysCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#pyansysCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </section>
  

    <!-- Bootstrap JS (may not be necessary since PyData already declares this) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="_static/js/landing-page.js"></script

.. grid:: 2 3 3 4
    :margin: 2
    :gutter: 2


    .. grid-item-card:: End-to-End automation
        :img-bottom: _static/landing-page/pydpf.jpeg
        :img-alt:

        Control meshing, solving, and post-processing using Python scripts to cut time and reduce manual errors.

    .. grid-item-card:: Live data access
        :img-bottom: _static/landing-page/pydpf.jpeg
        :img-alt:

        Leverage real-time access to field data, results, and metadata across Ansys tools using PyAnsys DPF.

    .. grid-item-card:: Built for cloud & HPC
        :img-bottom: _static/landing-page/pydpf.jpeg
        :img-alt:

        Run PyAnsys workflows in scalable environments, from on-premise HPC to hybrid cloud deployments.

.. toctree::
    :hidden:
    :maxdepth: 3

    Home<self>
    getting-started
    projects
    blog
