fetch(BLOG_FILE)
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("blogs-landingpage");
    if (!container) return;

    // Sort blogs by date (descending) and take the latest 4
    // also takes its key
    const blogs = Object.entries(data)
      .sort(([, a], [, b]) => new Date(b.date) - new Date(a.date))
      .slice(0, 4)
      .map(([key, value]) => ({ key, ...value }));

    blogs.forEach((blog) => {
      const card = document.createElement("div");
      card.className = "project-card sd-card sd-shadow-sm sd-card-hover";
      // blog link is the key of the dict
      card.onclick = () => {
        window.location.href = `${blog.key}`;
      };

      // Normalize tags to array
      let tags = [];
      if (Array.isArray(blog.products)) {
        tags = blog.products;
      } else if (typeof blog.products === "string") {
        tags = blog.products.split(",").map((t) => t.trim());
      }

      const description = blog.description || "";
      const shortDescription =
        description.length > 100
          ? description.slice(0, 100) + "..."
          : description;

      // Key is the link to the docs

      card.innerHTML = `
        <img class="project-lp-thumbnail" src="_static/${blog.image}" alt="${blog.title}" />
        <div class="sd-card-body" style="display: flex; flex-direction: column; height: 100%; justify-content: flex-start; gap: 0.75em;">
        <p class="sd-card-text" style="margin: 0;">
          ${tags
            .map(
              (tag) =>
                `<span class="sd-sphinx-override sd-badge sd-bg-muted sd-text-primary">${tag}</span>`,
            )
            .join("")}
        </p>
        <p class="sd-card-title sd-font-weight-bold" style="margin: 0;">${blog.title}</p>
          <p class="blog-meta-row" style="display: flex; justify-content: space-between; align-items: center; font-size: 0.95em; margin: 0; padding: 0;">
            <span style="white-space: nowrap;"><span style="display:inline-block;width:1.5em;height:1.5em;border-radius:50%;background:#008000;color:#fff;text-align:center;line-height:1.5em;font-family:sans-serif;margin-right:0.3em;">A</span>${blog.author || "PyAnsys Team"}</span>
            <span style="white-space: nowrap;"><i class="fa fa-calendar"></i> ${blog.date || "Unknown Date"}</span>
          </p>
          <p class="sd-card-body-text" style="margin: 0;">${shortDescription}</p>
        </div>
      `;

      container.appendChild(card);
    });
  })
  .catch((error) => {
    // Optionally log or display error
    console.error("Failed to load blog metadata:", error);
  });
