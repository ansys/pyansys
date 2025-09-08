fetch("_static/blog_metadata.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("blogs-landingpage");
    if (!container) return;

    // Sort blogs by date (descending) and take the latest 4
    const blogs = Object.values(data)
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 4);

    blogs.forEach((blog) => {
      const card = document.createElement("div");
      card.className = "project-card sd-card sd-shadow-sm sd-card-hover";
      card.onclick = () => {
        window.location.href = `_static/${blog.image}`;
      };

      // Normalize tags to array
      let tags = [];
      if (Array.isArray(blog.tags)) {
        tags = blog.tags;
      } else if (typeof blog.tags === "string") {
        tags = blog.tags.split(",").map((t) => t.trim());
      }

      const description = blog.description || "";
      const shortDescription =
        description.length > 100
          ? description.slice(0, 100) + "..."
          : description;

      card.innerHTML = `
        <img class="project-lp-thumbnail" src="_static/${blog.image}" alt="${blog.title}" />
        <div class="sd-card-body">
          <p class="sd-card-title sd-font-weight-bold">${blog.title}</p>
          <p class="sd-card-body-text">${shortDescription}</p>
          <p>
            <i class="fa fa-user"></i> ${blog.author || "PyAnsys Team"}<br/>
            <i class="fa fa-calendar"></i> ${blog.date || "Unknown Date"}
          </p>
          <p class="sd-card-text">
            ${tags
              .map(
                (tag) =>
                  `<span class="sd-sphinx-override sd-badge sd-bg-muted sd-text-primary">${tag}</span>`,
              )
              .join("")}
          </p>
        </div>
      `;

      container.appendChild(card);
    });
  })
  .catch((error) => {
    // Optionally log or display error
    console.error("Failed to load blog metadata:", error);
  });
