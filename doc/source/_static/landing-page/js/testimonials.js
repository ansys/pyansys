document.addEventListener("DOMContentLoaded", function () {
  // Use a unique variable name to avoid conflicts
  let testimonialsBasePath = "version/dev/";
  if (
    window.location.pathname.includes("version/dev") ||
    window.location.pathname.includes("version/stable") ||
    window.location.pathname.includes("pull/")
  ) {
    testimonialsBasePath = "";
  }
  const BASE_PATH = testimonialsBasePath;
  fetch(`${BASE_PATH}_static/landing-page/js/testimonials.json`)
    .then((r) => r.json())
    .then((data) => {
      const wrapper = document.getElementById("testimonials-wrapper");
      if (!wrapper) return;

      data.forEach((t) => {
        const slide = document.createElement("div");
        slide.className = "swiper-slide";

        const card = document.createElement("div");
        card.className = "testimonial d-flex flex-column h-100 p-3";

        // logo
        if (t.logo) {
          const logoWrap = document.createElement("div");
          logoWrap.className = "logo-wrap mb-2 text-center";
          const img = document.createElement("img");
          img.src = t.logo;
          img.alt = t.author || "Logo";
          logoWrap.appendChild(img);
          card.appendChild(logoWrap);
        }

        // content
        const content = document.createElement("p");
        content.className = "flex-grow-1 mb-2";
        content.textContent = t.content || "";
        card.appendChild(content);

        // author
        if (t.author) {
          const author = document.createElement("h6");
          author.className = "fw-bold mb-0 mt-2 text-end";
          author.textContent = t.author;
          card.appendChild(author);
        }

        slide.appendChild(card);
        wrapper.appendChild(slide);
      });

      // Only initialize Swiper if not already initialized
      if (!window.testimonialsSwiperInitialized) {
        new Swiper("#testimonials-swiper", {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 20,
          loop: false,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          breakpoints: {
            320: { slidesPerView: 1, slidesPerGroup: 1 },
            768: { slidesPerView: 2, slidesPerGroup: 2 },
            1024: { slidesPerView: 3, slidesPerGroup: 3 },
          },
        });
        window.testimonialsSwiperInitialized = true;
      }
    })
  .catch((err) => console.error("Testimonials error:", err));
});
