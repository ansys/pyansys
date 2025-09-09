

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
        <a href="projects.html" class="btn btn-custom">Explore projects</a>
        <a href="blog.html" class="btn btn-custom">Latest news</a>
        <a href="contact.html" class="btn btn-custom">Contact us</a>
      </div>
    </div>
  </div>


.. jinja:: project_context

  .. raw:: html

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>


    <!-- PyAnsys libraries section -->
    <!-- PyAnsys libraries section -->
    <section id="libraries">
      <h2>PyAnsys libraries
        <a href="projects.html" class="btn btn-link float-end">More libraries</a>
      </h2>

      <div class="swiper">
        <div class="swiper-wrapper">
          {% for project, metadata in projects['projects'].items() %}
            {% set families = metadata.get('families', ['Other']) %}
            {% set family_display = families[0] | lower | replace(' ', '-') %}
            {% set tags = metadata.get('tags', []) %}

            <div class="swiper-slide">
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
            </div>
          {% endfor %}
        </div>

        <!-- Pagination dots -->
        <div class="swiper-pagination"></div>
      </div>
    </section>

    <script>
      const swiper = new Swiper('.swiper', {
        slidesPerView: 4,
        slidesPerGroup: 4,   // 👈 slide 4 at a time
        spaceBetween: 20,
        loop: false,         // keep false if you want real pagination
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          320: { slidesPerView: 1, slidesPerGroup: 1 },  /* mobile */
          768: { slidesPerView: 2, slidesPerGroup: 2 },  /* tablet */
          1024: { slidesPerView: 4, slidesPerGroup: 4 }, /* desktop */
        },
      });
    </script>

    <style>
    /* Make swiper slides stretch evenly */
    .swiper-wrapper {
      display: flex;
      align-items: stretch;
    }

    /* Each slide fills same height */
    .swiper-slide {
      display: flex;
    }
    .project-card {
      height: 470px;   /* adjust as needed */
      display: flex;
      flex-direction: column;
      overflow: hidden; /* prevents extra text overflow */
      margin-bottom: 20px; /* space between rows */
    }
    .swiper-pagination{
      position: initial;
      }
    </style>


.. raw:: html

  <!-- Latest Blogs section -->
  <section id="blogs">
    <h2>PyAnsys Blogs
      <a href="projects.html" class="btn btn-link float-end">More blogs</a>
    </h2>
    <div class="blogs-landingpage" id="blogs-landingpage"></div>
    <script src="_static/landing-page/js/blogs.js"></script>
  </section>

  <section id="support" class="my-5">
    <h2 class="mb-4">How we support our users all over the world</h2>
    <div class="row">
      <!-- Left column (static content) -->
      <div class="col-md-6">
        <div class="step">
          <div class="icon">
            <i class="fas fa-power-off"></i>
          </div>
          <div class="text">
            <h4>Pre-simulation</h4>
            <p>Define your simulation setup by specifying the geometry in a flexible, parametric format.</p>
          </div>
        </div>
        <div class="step">
          <div class="icon">
            <i class="fas fa-rocket"></i>
          </div>
          <div class="text">
            <h4>During simulation</h4>
            <p>Run high-fidelity simulations and gather comprehensive results that reflect the dynamics of your system.</p>
          </div>
        </div>
        <div class="step">
          <div class="icon">
            <i class="fas fa-chart-bar"></i>
          </div>
          <div class="text">
            <h4>Post simulation</h4>
            <p>Extract, visualize, and interpret key data from your simulation to drive the next phase of your project.</p>
          </div>
        </div>
      </div>
      <!-- Right column (dynamic testimonials) -->
      <div class="col-md-6">
        <div id="testimonials-container" class="slider-viewport"></div>
        <div id="testimonials-dots" class="d-flex justify-content-center mt-3"></div>
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