fetch("_static/landing-page/js/testimonials.json")
  .then((r) => r.json())
  .then((data) => {
    const viewport = document.getElementById("testimonials-container");
    const dotsWrap = document.getElementById("testimonials-dots");
    const track = document.createElement("div");
    track.className = "slider-track";
    viewport.appendChild(track);

    const cardsPerPage = 3;
    const totalPages = Math.ceil(data.length / cardsPerPage); // 👈 dots depend on this
    let current = 0,
      timer;

    // Build pages (each is 3 testimonials)
    for (let p = 0; p < totalPages; p++) {
      const page = document.createElement("div");
      page.className = "slider-page";
      const row = document.createElement("div");
      row.className = "row g-3";

      data.slice(p * cardsPerPage, (p + 1) * cardsPerPage).forEach((t) => {
        const col = document.createElement("div");
        col.className = "col-md-4";

        const card = document.createElement("div");
        card.className = "testimonial d-flex flex-column h-100";

        // logo
        if (t.logo) {
          const logoWrap = document.createElement("div");
          logoWrap.className = "logo-wrap mb-2";
          const img = document.createElement("img");
          img.src = t.logo;
          img.alt = t.author || "Logo";
          logoWrap.appendChild(img);
          card.appendChild(logoWrap);
        }

        // content
        const content = document.createElement("p");
        content.className = "text-muted flex-grow-1 mb-2";
        content.textContent = t.content || "";
        card.appendChild(content);

        // author
        if (t.author) {
          const author = document.createElement("h6");
          author.className = "fw-bold mb-0";
          author.textContent = t.author;
          card.appendChild(author);
        }

        col.appendChild(card);
        row.appendChild(col);
      });

      page.appendChild(row);
      track.appendChild(page);
    }

    // Dots builder (number of dots == totalPages)
    function buildDots() {
      dotsWrap.innerHTML = "";
      for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = "dot" + (i === 0 ? " active" : "");
        dot.addEventListener("click", () => {
          goTo(i);
          restart();
        });
        dotsWrap.appendChild(dot);
      }
    }

    function goTo(i) {
      current = i;
      track.style.transform = `translateX(-${i * 100}%)`;
      [...dotsWrap.children].forEach((d, j) =>
        d.classList.toggle("active", j === i),
      );
    }

    function start() {
      timer = setInterval(() => goTo((current + 1) % totalPages), 5000);
    }
    function restart() {
      clearInterval(timer);
      start();
    }

    buildDots();
    goTo(0);
    start();
  })
  .catch((err) => console.error("Testimonials error:", err));
