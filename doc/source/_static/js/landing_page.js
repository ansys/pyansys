fetch("_static/testimonials.json")
  .then((response) => response.json())
  .then((data) => {
    const testimonials = data.testimonials;
    const chunkSize = 3;
    const carouselContent = document.getElementById(
      "testimonialCarouselContent",
    );

    for (let i = 0; i < testimonials.length; i += chunkSize) {
      const chunk = testimonials.slice(i, i + chunkSize);
      const carouselItem = document.createElement("div");
      carouselItem.classList.add("carousel-item");
      if (i === 0) carouselItem.classList.add("active");

      const row = document.createElement("div");
      row.classList.add("row");

      chunk.forEach((testimonial, index, array) => {
        const col = document.createElement("div");
        col.classList.add("col-md-4", "mb-3");

        // If only one testimonial in this slide, center it
        if (array.length === 1) {
          col.classList.add("mx-auto");
        }

        col.innerHTML = `
            <div class="testimonial-card p-4">
            <p>"${testimonial.content}"</p>
            <footer class="blockquote-footer mt-3">${testimonial.author}</footer>
            </div>
        `;
        row.appendChild(col);
      });
      carouselItem.appendChild(row);
      carouselContent.appendChild(carouselItem);
    }
  })
  .catch((err) => console.error("Failed to load testimonials:", err));
