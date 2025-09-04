fetch("_static/blog_metadata.json")
  .then((response) => response.json())
  .then((data) => {
    // Get the container where you want to add the cards
    const container = document.getElementById("blogs-landingpage");
    // Get the latest 4 blogs (sorted by date if needed)
    const blogs = Object.values(data)
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 4);

    blogs.forEach((blog) => {
      const card = document.createElement("div");
      card.className = "project-card sd-card sd-shadow-sm sd-card-hover";
      card.onclick = () => (window.location.href = `_static/${blog.image}`);
      const tags = Array.isArray(blog.tags)
        ? blog.tags
        : typeof blog.tags === "string"
          ? blog.tags.split(",").map((t) => t.trim())
          : [];

      const description = blog.description || "";
      const shortDescription =
        description.length > 100
          ? description.slice(0, 100) + "..."
          : description;
      card.innerHTML = `
        <img class="project-thumbnail" src="_static/${blog.image}" />
        <div class="sd-card-body">
            <p class="sd-card-title sd-font-weight-bold"> ${blog.title} </p>
            <p class="sd-card-body-text"> ${shortDescription} </b
                <i class="fa fa-user"></i> ${blog.author || "PyAnsys Team"}<br/>
              <i class="fa fa-calendar"></i> ${blog.date || "Unknown Date"}<br/>
            </p>
            <p class="sd-card-text">
                ${tags.map((tag) => `<span class="sd-sphinx-override sd-badge sd-bg-muted sd-text-primary">${tag}</span>`).join("")}
            </p>
        </div>
      `;

      container.appendChild(card);
    });
  });
