fetch("_static/landing-page/js/testimonials.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    const container = document.getElementById("testimonials-container");
    const dotsContainer = document.getElementById("testimonials-dots");
    if (!container) {
      console.error("Container element not found.");
      return;
    }

    const cardsPerPage = 3;
    let currentPage = 0;
    const totalPages = Math.ceil(data.length / cardsPerPage);
    let autoSlideInterval;

    function renderPage(pageIndex) {
      container.innerHTML = "";
      const start = pageIndex * cardsPerPage;
      const end = start + cardsPerPage;
      const pageData = data.slice(start, end);

      pageData.forEach((testimonial) => {
        const col = document.createElement("div");
        col.className = "col-md-4 mb-4";

        // Card container
        const testimonialDiv = document.createElement("div");
        testimonialDiv.className =
          "testimonial p-4 bg-white rounded shadow-sm h-100 d-flex flex-column text-center";

        // Logo
        if (testimonial.logo) {
          const logo = document.createElement("img");
          logo.src = testimonial.logo;
          logo.alt = testimonial.author || "Logo";
          logo.className = "rounded-circle mx-auto mb-3";
          testimonialDiv.appendChild(logo);
        }

        // Content
        const content = document.createElement("p");
        content.className = "mb-3 text-muted";
        content.textContent = testimonial.content;
        testimonialDiv.appendChild(content);

        // Author (optional)

        col.appendChild(testimonialDiv);
        container.appendChild(col);
      });

      updateDots(pageIndex);
    }

    function updateDots(activeIndex) {
      dotsContainer.innerHTML = "";
      for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement("span");
        dot.className =
          "dot mx-1 rounded-circle" +
          (i === activeIndex ? " bg-dark" : " bg-secondary");
        dot.style.width = "8px";
        dot.style.height = "8px";
        dot.style.display = "inline-block";
        dot.style.cursor = "pointer";
        dot.addEventListener("click", () => {
          currentPage = i;
          renderPage(currentPage);
          resetAutoSlide();
        });
        dotsContainer.appendChild(dot);
      }
    }

    function startAutoSlide() {
      autoSlideInterval = setInterval(() => {
        currentPage = (currentPage + 1) % totalPages;
        renderPage(currentPage);
      }, 5000);
    }

    function resetAutoSlide() {
      clearInterval(autoSlideInterval);
      startAutoSlide();
    }

    // Initial render and start slideshow
    renderPage(currentPage);
    startAutoSlide();
  })
  .catch((error) => {
    console.error("Error loading testimonials:", error);
  });
