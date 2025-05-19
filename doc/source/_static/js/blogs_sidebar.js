document.addEventListener("DOMContentLoaded", () => {
  const state = {
    products: new Set(),
    industries: new Set(),
    tags: new Set()
  };
  const blogContainer = document.getElementById("blog-container");

  let allPosts = {};

  function createCheckbox(name, containerId, type) {
    const id = `${type}-${name}`;
    const label = document.createElement("label");
    label.setAttribute("for", id);

    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = id;
    input.value = name;
    input.addEventListener("change", () => {
      if (input.checked) {
        state[type + "s"].add(name);
      } else {
        state[type + "s"].delete(name);
      }
      updateVisiblePosts();
      updateTagFilter();
    });

    label.appendChild(input);
    label.append(` ${name}`);
    const container = document.getElementById(containerId);
    if (container) container.appendChild(label);
  }

  function generateFilters(data) {
    const products = new Set();
    const industries = new Set();
    const tags = new Set();

    for (const key in data) {
      const post = data[key];

      (post.products || "")
        .split(",")
        .map(p => p.trim())
        .filter(Boolean)
        .forEach(product => products.add(product));

      (post.industries || "")
        .split(",")
        .map(c => c.trim())
        .filter(Boolean)
        .forEach(category => industries.add(category));

      (post.tags || "")
        .split(",")
        .map(t => t.trim())
        .filter(Boolean)
        .forEach(tag => tags.add(tag));
    }

    [...products].sort().forEach(p => createCheckbox(p, "product-filters", "product"));
    [...industries].sort().forEach(i => createCheckbox(i, "industry-filters", "industry"));
    [...tags].sort().forEach(t => createCheckbox(t, "tag-filters", "tag"));
  }

  function updateTagFilter() {
    const selectedProducts = [...state.products];
    const selectedIndustries = [...state.industries];
    const tagSet = new Set();

    for (const key in allPosts) {
      const post = allPosts[key];

      const postProducts = (post.products || "").split(",").map(p => p.trim());
      const postIndustries = (post.industries || "").split(",").map(c => c.trim());

      const matchProduct = selectedProducts.length === 0 || postProducts.some(p => selectedProducts.includes(p));
      const matchIndustry = selectedIndustries.length === 0 || postIndustries.some(c => selectedIndustries.includes(c));

      if (matchProduct && matchIndustry) {
        (post.tags || "")
          .split(",")
          .map(t => t.trim())
          .filter(Boolean)
          .forEach(tag => tagSet.add(tag));
      }
    }

    const tagContainer = document.getElementById("tag-filters");
    if (!tagContainer) return;

    tagContainer.innerHTML = "";
    [...tagSet].sort().forEach(t => createCheckbox(t, "tag-filters", "tag"));
  }

  function updateVisiblePosts() {
    if (!blogContainer) return;

    blogContainer.innerHTML = "";

    for (const key in allPosts) {
      const post = allPosts[key];

      const postProducts = (post.products || "").split(",").map(p => p.trim());
      const postIndustries = (post.industries || "").split(",").map(c => c.trim());
      const postTags = (post.tags || "").split(",").map(t => t.trim());

      const matchProduct = state.products.size === 0 || postProducts.some(p => state.products.has(p));
      const matchIndustry = state.industries.size === 0 || postIndustries.some(c => state.industries.has(c));
      const matchTag = state.tags.size === 0 || postTags.some(t => state.tags.has(t));

      if (matchProduct && matchIndustry && matchTag) {
        const postCard = document.createElement("div");
        postCard.className = "project-card sd-card sd-shadow-sm sd-card-hover";
        postCard.onclick = () => window.location.href = `${key}.html`;

        const description = post.description || "";
        const shortDescription = description.length > 100 ? description.slice(0, 100) + "..." : description;

        postCard.innerHTML = `
          ${post.image ? `<img class="project-thumbnail" src="/_static/${post.image}" alt="${post.title || key}">` : ""}
          <div class="sd-card-body">
            <p class="sd-card-title sd-font-weight-bold">${post.title || key}</p>
            <p class="sd-card-body-text">${shortDescription}</p>
            <p class="sd-card-text">
              <i class="fa fa-user"></i> ${post.author || "PyAnsys Team"}<br/>
              <i class="fa fa-calendar"></i> ${post.date || "Unknown Date"}
            </p>
            <a class="sd-btn sd-btn-outline-primary" href="${key}.html">Read More</a>
          </div>
        `;
        blogContainer.appendChild(postCard);
      }
    }
  }

  function setupCollapsibles() {
    document.querySelectorAll(".collapsible").forEach(button => {
      button.addEventListener("click", function () {
        this.classList.toggle("active");
        const content = this.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
      });
    });
  }

  // Fetch blog data and initialize
  fetch("/_static/blog_metadata.json")
    .then(res => res.json())
    .then(data => {
      allPosts = data;
      generateFilters(data);
      updateVisiblePosts();
      setupCollapsibles();
    });
});
