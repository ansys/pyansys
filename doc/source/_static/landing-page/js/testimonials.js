fetch("_static/landing-page/js/testimonials.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    const container = document.getElementById("testimonials-container");
    if (!container) {
      console.error("Container element not found.");
      return;
    }

    data.forEach((testimonial) => {
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
  })
  .catch((error) => {
    console.error("Error loading testimonials:", error);
  });
