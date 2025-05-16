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
        console.log(data);  // Log the returned data to see its structure
        const blogContainer = document.getElementById('blog-container');

        // Iterate through each blog post using a for...in loop
        for (const postKey in data) {
            if (data.hasOwnProperty(postKey)) {
                const postData = data[postKey];
                
                // Create the blog card
                const postCard = document.createElement('div');
                postCard.classList.add('blog-card');
                
                // Add content to the blog card
                postCard.innerHTML = `
                    <a href="${postKey}.html" class="block">
                        ${postData['image'] ? `<img src="/_static/${postData['image']}" class="w-full rounded mb-4" alt="${postData['title'] || ''}">` : ''}
                        <h2 class="text-xl font-bold mb-2">${postData['title'] || postKey}</h2>
                    </a>
                    <li class="inline-block mr-4">
                        <i class="fa fa-user mr-1"></i>${postData['author']}
                    </li>
                    <li class="inline-block mr-4">
                        <i class="fa fa-calendar mr-1"></i>${postData['date']}
                    </li>
                    <li class="inline-block mr-4">
                        <i class="fa fa-tags mr-1"></i>${postData['tags']}
                    </li>
                    <li class="inline-block mr-4">
                        <i class="fa fa-folder mr-1"></i>${postData['categories']}
                    </li>
                    <a href="${postKey}" class="text-primary hover:underline">Read more →</a>
                `;

                // Append the blog card to the container
                blogContainer.appendChild(postCard);
            }
        }
    })
    .catch(error => console.error('Error loading blog metadata:', error));
        </script>
        
    <style>
   .blog-card {
    border: 1px solid #ddd;
    padding: 20px;
    margin: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    .blog-card h2 {
        font-size: 1.5em;
        color: #333;
    }

    .blog-card img {
        width: 100%;
        height: auto;
        border-radius: 5px;
    }

    .blog-card a {
        text-decoration: none;
        color: #007bff;
    }

    .blog-card a:hover {
        text-decoration: underline;
    }

    .blog-card ul {
        list-style: none;
        padding: 0;
    }
    .blog-card ul li {
        display: inline-block;
        margin-right: 10px;
        font-size: 0.9em;
        color: #666;
    }
    .blog-card ul li i {
        margin-right: 5px;
    }

    .blog-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    </style>

.. toctree::
    :maxdepth: 2
    :hidden:

    blog/blog1
    blog/blog2

