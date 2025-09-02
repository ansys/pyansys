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

    function renderPage(pageIndex) {
      container.innerHTML = ""; // Clear old testimonials
      const start = pageIndex * cardsPerPage;
      const end = start + cardsPerPage;
      const pageData = data.slice(start, end); // <-- only 3 items

      pageData.forEach((testimonial) => {
        const col = document.createElement("div");
        col.className = "col-md-4 mb-4";

        const author = document.createElement("h2");
        author.className = "text-left";
        author.textContent = testimonial.author;

        const content = document.createElement("p");
        content.className = "mb-0";
        content.textContent = testimonial.content;

        const logo = document.createElement("img");
        logo.src = testimonial.logo;
        logo.className = "rounded-circle mt-auto align-self-end";
        logo.style.height = "80px";
        logo.style.width = "auto";
        logo.alt = testimonial.author || "Logo";

        const topDiv = document.createElement("div");
        topDiv.appendChild(author);
        topDiv.appendChild(content);

        const testimonialDiv = document.createElement("div");
        testimonialDiv.className =
          "testimonial p-4 bg-white rounded shadow-sm h-100 d-flex flex-column";
        testimonialDiv.appendChild(topDiv);
        testimonialDiv.appendChild(logo);

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
        dot.style.width = "4px";
        dot.style.height = "4px";
        dot.style.display = "inline-block";
        dot.style.cursor = "pointer";
        dot.addEventListener("click", () => {
          currentPage = i;
          renderPage(currentPage);
        });
        dotsContainer.appendChild(dot);
      }
    }

    // Initial render: show only 3
    renderPage(currentPage);
  })
  .catch((error) => {
    console.error("Error loading testimonials:", error);
  });
