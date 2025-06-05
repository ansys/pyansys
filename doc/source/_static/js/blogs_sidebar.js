document.addEventListener("DOMContentLoaded", () => {
  const state = {
    products: new Set(),
    industries: new Set(),
    tags: new Set(),
  };
  const blogContainer = document.getElementById("blog-container");
  let allPosts = {};

  function createCheckbox(name, containerId, type) {
    const id = `${type}-${name}`;

    const wrapper = document.createElement("div");
    wrapper.className = "checkbox-wrapper";

    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = id;
    input.value = name;
    input.style.marginRight = "5px";

    const label = document.createElement("label");
    label.setAttribute("for", id);
    label.textContent = name;
    label.style.cursor = "pointer";

    input.addEventListener("change", () => {
      if (input.checked) {
        state[type].add(name);
      } else {
        state[type].delete(name);
      }
      updateVisiblePosts();
      updateTagFilter();
      // updateProductFilter();
      updateIndustryFilter();
    });

    wrapper.appendChild(input);
    wrapper.appendChild(label);

    const container = document.querySelector(
      `#${containerId} .collapsible-content`,
    );
    if (container) container.appendChild(wrapper);
  }

  function generateFilters(data) {
    const products = new Set();
    const industries = new Set();
    const tags = new Set();

    for (const key in data) {
      const post = data[key];

      (post.products || "")
        .split(",")
        .map((p) => p.trim())
        .filter(Boolean)
        .forEach((p) => products.add(p));
      (post.industries || "")
        .split(",")
        .map((c) => c.trim())
        .filter(Boolean)
        .forEach((c) => industries.add(c));
      (post.tags || "")
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean)
        .forEach((t) => tags.add(t));
    }

    [...products]
      .sort()
      .forEach((p) => createCheckbox(p, "product-filters", "products"));
    [...industries]
      .sort()
      .forEach((i) => createCheckbox(i, "industry-filters", "industries"));
    [...tags].sort().forEach((t) => createCheckbox(t, "tag-filters", "tags"));
  }

  function updateTagFilter() {
    const selectedProducts = [...state.products];
    const selectedIndustries = [...state.industries];

    for (const label of document.querySelectorAll("#tag-filters label")) {
      const checkbox = label.querySelector("input[type=checkbox]");
      const value = checkbox.value;

      let isVisible = false;

      for (const key in allPosts) {
        const post = allPosts[key];
        const postTags = (post.tags || "").split(",").map((t) => t.trim());
        const postProducts = (post.products || "")
          .split(",")
          .map((p) => p.trim());
        const postIndustries = (post.industries || "")
          .split(",")
          .map((c) => c.trim());

        const matchProduct =
          selectedProducts.length === 0 ||
          postProducts.some((p) => selectedProducts.includes(p));
        const matchIndustry =
          selectedIndustries.length === 0 ||
          postIndustries.some((c) => selectedIndustries.includes(c));
        const matchTag = postTags.includes(value);

        if (matchProduct && matchIndustry && matchTag) {
          isVisible = true;
          break;
        }
      }

      label.style.display = isVisible ? "block" : "none";
    }
  }

  // function updateProductFilter() {
  //   const selectedTags = [...state.tags];
  //   const selectedIndustries = [...state.industries];
  //   const productSet = new Set();

  //   for (const key in allPosts) {
  //     const post = allPosts[key];
  //     const postProducts = (post.products || "").split(",").map(p => p.trim());
  //     const postIndustries = (post.industries || "").split(",").map(c => c.trim());
  //     const matchTag = selectedTags.length === 0 || (post.tags || "").split(",").map(t => t.trim()).some(t => selectedTags.includes(t));
  //     const matchIndustry = selectedIndustries.length === 0 || postIndustries.some(c => selectedIndustries.includes(c));

  //     if (matchTag && matchIndustry) {
  //       postProducts.filter(Boolean).forEach(p => productSet.add(p));
  //     }
  //   }

  //   const container = document.querySelector("#product-filters .collapsible-content");
  //   if (!container) return;

  //   container.innerHTML = "";
  //   [...productSet].sort().forEach(p => createCheckbox(p, "product-filters", "products"));
  // }

  function updateIndustryFilter() {
    const selectedTags = [...state.tags];
    const selectedProducts = [...state.products];
    const industrySet = new Set();

    for (const key in allPosts) {
      const post = allPosts[key];
      const postIndustries = (post.industries || "")
        .split(",")
        .map((c) => c.trim());
      const postProducts = (post.products || "")
        .split(",")
        .map((p) => p.trim());
      const matchTag =
        selectedTags.length === 0 ||
        (post.tags || "")
          .split(",")
          .map((t) => t.trim())
          .some((t) => selectedTags.includes(t));
      const matchProduct =
        selectedProducts.length === 0 ||
        postProducts.some((p) => selectedProducts.includes(p));

      if (matchTag && matchProduct) {
        postIndustries.filter(Boolean).forEach((c) => industrySet.add(c));
      }
    }

    const container = document.querySelector(
      "#industry-filters .collapsible-content",
    );
    if (!container) return;

    container.innerHTML = "";
    [...industrySet]
      .sort()
      .forEach((c) => createCheckbox(c, "industry-filters", "industries"));
  }

  function updateVisiblePosts() {
    if (!blogContainer) return;
    blogContainer.innerHTML = "";

    for (const key in allPosts) {
      const post = allPosts[key];
      const postProducts = (post.products || "")
        .split(",")
        .map((p) => p.trim());
      const postIndustries = (post.industries || "")
        .split(",")
        .map((c) => c.trim());
      const postTags = (post.tags || "").split(",").map((t) => t.trim());

      const matchProduct =
        state.products.size === 0 ||
        postProducts.some((p) => state.products.has(p));
      const matchIndustry =
        state.industries.size === 0 ||
        postIndustries.some((c) => state.industries.has(c));
      const matchTag =
        state.tags.size === 0 || postTags.some((t) => state.tags.has(t));

      if (matchProduct && matchIndustry && matchTag) {
        const postCard = document.createElement("div");
        postCard.className = "project-card sd-card sd-shadow-sm sd-card-hover";
        postCard.onclick = () => (window.location.href = `${key}.html`);

        const description = post.description || "";
        const shortDescription =
          description.length > 100
            ? description.slice(0, 100) + "..."
            : description;

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
    document.querySelectorAll(".collapsible").forEach((button) => {
      button.addEventListener("click", function () {
        this.classList.toggle("active");
        const content = this.nextElementSibling;
        content.style.display =
          content.style.display === "block" ? "none" : "block";
      });
    });
  }

  fetch("/_static/blog_metadata.json")
    .then((res) => res.json())
    .then((data) => {
      allPosts = data;
      setupCollapsibles();
      generateFilters(data);
      updateVisiblePosts();
    });
});
