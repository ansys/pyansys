Blog
####

The PyAnsys blog is a collection of articles and tutorials from the PyAnsys team and community. 
It covers a wide range of topics related to the PyAnsys ecosystem, keeps you up to date with the latest developments, 
and provides insights into how to use the various PyAnsys packages effectively.

.. raw:: html

   <div id="blog-container">
     <!-- Blog posts will be dynamically injected here -->
   </div>

   <script>
   fetch("/_static/blog_metadata.json")
     .then(response => {
       if (!response.ok) {
         throw new Error("Network response was not ok");
       }
       return response.json();
     })
     .then(data => {
       const blogContainer = document.getElementById("blog-container");

       for (const postKey in data) {
         if (data.hasOwnProperty(postKey)) {
           const postData = data[postKey];

           const postCard = document.createElement("div");
           postCard.classList.add("blog-card");

           postCard.innerHTML = `
             <a href="${postKey}.html" class="block">
               ${
                 postData["image"]
                   ? `<img src="/_static/${postData["image"]}" class="blog-image" alt="${postData["title"] || ""}">`
                   : ""
               }
               <h2 class="blog-title">${postData["title"] || postKey}</h2>
             </a>
             <ul class="blog-meta">
               <li><i class="fa fa-user mr-1"></i>${postData["author"] || ""}</li>
               <li><i class="fa fa-calendar mr-1"></i>${postData["date"] || ""}</li>
               <li><i class="fa fa-tags mr-1"></i>${postData["tags"] || ""}</li>
               <li><i class="fa fa-folder mr-1"></i>${postData["categories"] || ""}</li>
             </ul>
             <a href="${postKey}.html" class="read-more">Read more →</a>
           `;

           blogContainer.appendChild(postCard);
         }
       }
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

