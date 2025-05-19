Blog
####

The PyAnsys blog is a collection of articles and tutorials from the PyAnsys team and community. 
It covers a wide range of topics related to the PyAnsys ecosystem, keeps you up to date with the latest developments, 
and provides insights into how to use the various PyAnsys packages effectively.

.. raw:: html

  <div style="text-align: center; margin: 20px;">
    <select id="categoryFilter" class="sd-btn sd-btn-outline-primary" style="margin-right: 10px;">
      <option value="">All Categories</option>
    </select>

    <select id="productFilter" class="sd-btn sd-btn-outline-primary">
      <option value="">All Products</option>
    </select>
  </div>

  <div class="projects" id="blog-container">
    <!-- Blog cards will be dynamically injected here -->
  </div>

  <script>
    fetch("/_static/blog_metadata.json")
      .then(response => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then(data => {
        const blogContainer = document.getElementById("blog-container");
        const categoryFilter = document.getElementById("product-families-list");
        const productFilter = document.getElementById("product-tags-list");

        const categoriesSet = new Set();
        const productsSet = new Set();

        for (const postKey in data) {
          if (!data.hasOwnProperty(postKey)) continue;

          const postData = data[postKey];

          const family = (postData.categories || "Other").toLowerCase().replace(/ /g, "-");
          const tags = Array.isArray(postData.tags) ? postData.tags : [postData.tags || "Other"];
          const tagsClass = tags.map(tag => tag.toLowerCase().replace(/ /g, "-")).join(" ");

          categoriesSet.add(postData.categories || "Other");
          tags.forEach(tag => productsSet.add(tag));

          const description = postData.description || "";
          const shortDescription = description.length > 100 ? description.substring(0, 100) + "..." : description;

          const postCard = document.createElement("div");
          postCard.className = `project-card sd-card sd-shadow-sm sd-card-hover`;
          postCard.setAttribute("data-family", family);
          postCard.setAttribute("data-tags", tagsClass);
          postCard.onclick = () => window.location.href = `${postKey}.html`;

          postCard.innerHTML = `
            ${postData.image ? `<img class="project-thumbnail" src="/_static/${postData.image}" alt="${postData.title || postKey}">` : ""}
            <div class="sd-card-body">
              <p class="sd-card-title sd-font-weight-bold">${postData.title || postKey}</p>
              <p class="sd-card-body-text">${shortDescription}</p>
              <div class="sd-card-text">
                <div><i class="fa fa-user" style="margin-right: 0.5rem;"></i>${postData.author || "PyAnsys Team"}</div>
                <div><i class="fa fa-calendar" style="margin-right: 0.5rem;"></i>${postData.date || "Unknown Date"}</div>
              </div>
              <div class="sd-d-grid" style="margin-top: 0.5rem;">
                <a class="sd-sphinx-override sd-btn sd-text-wrap sd-btn-outline-primary reference external" href="${postKey}.html"><span>Read More</span></a>
              </div>
            </div>
          `;

          blogContainer.appendChild(postCard);
        }

         function createCheckbox(container, value, type) {
          const id = `${type}-${value}`;
          const label = document.createElement("label");
          label.style.display = "block";
          label.innerHTML = `
            <input type="checkbox" value="${value}" data-type="${type}" id="${id}"> ${value.replace(/-/g, " ")}
          `;
          container.appendChild(label);
        }

        categoriesSet.forEach(cat => createCheckbox(categoryFilter, cat.toLowerCase().replace(/ /g, "-"), "category"));
        productsSet.forEach(tag => createCheckbox(productFilter, tag.toLowerCase().replace(/ /g, "-"), "product"));

        function filterCards() {
          const selectedCategories = Array.from(document.querySelectorAll('input[data-type="category"]:checked')).map(cb => cb.value);
          const selectedProducts = Array.from(document.querySelectorAll('input[data-type="product"]:checked')).map(cb => cb.value);

          const cards = document.querySelectorAll(".project-card");
          cards.forEach(card => {
            const cardFamily = card.getAttribute("data-family");
            const cardTags = card.getAttribute("data-tags");

            const matchCategory = selectedCategories.length === 0 || selectedCategories.includes(cardFamily);
            const matchProduct = selectedProducts.length === 0 || selectedProducts.some(tag => cardTags.includes(tag));

            card.style.display = (matchCategory && matchProduct) ? "" : "none";
          });
        }

        // Listen to filter changes
        document.getElementById("filter-sidebar").addEventListener("change", filterCards);
      })
      .catch(error => console.error("Error loading blog metadata:", error));
  </script>

  <style>
    #blog-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 20px;
      padding: 20px;
      max-width: 1200px;
      margin: auto;
    }

   <style>
   #blog-container {
     display: grid;
     grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
     gap: 20px;
     padding: 20px;
     max-width: 1200px;
     margin: auto;
   }

   .blog-card {
     background-color: #fff;
     border-radius: 12px;
     overflow: hidden;
     box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
     transition: transform 0.2s ease;
     padding: 16px;
   }

   .blog-card:hover {
     transform: translateY(-5px);
   }

   .blog-card .blog-image {
     width: 100%;
     height: 180px;
     object-fit: cover;
     border-radius: 8px;
     margin-bottom: 12px;
   }

   .blog-card .blog-title {
     font-size: 18px;
     font-weight: bold;
     margin: 10px 0;
   }

   .blog-meta {
     list-style: none;
     padding: 0;
     margin: 0 0 10px;
     font-size: 14px;
     color: #666;
   }

   .blog-meta li {
     margin-bottom: 4px;
   }

   .read-more {
     color: #0066cc;
     font-weight: bold;
     text-decoration: none;
   }

   .read-more:hover {
     text-decoration: underline;
   }
   </style>


.. toctree::
    :maxdepth: 2
    :hidden:

    blog/blog1
    blog/blog2

