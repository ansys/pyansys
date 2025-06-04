fetch('testimonials.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('testimonials-container');

    data.forEach(testimonial => {
      const col = document.createElement('div');
      col.className = 'col-md-4 mb-4';

      col.innerHTML = `
        <div class="testimonial p-4 bg-white rounded shadow-sm h-100 d-flex flex-column">
          <div>
            <h2 class="text-left">${testimonial.author}</h2>
            <p class="mb-0">${testimonial.content}</p>
          </div>
          <img src="${testimonial.logo}" 
               class="rounded-circle mt-auto align-self-end"
               style="height: 80px; width: auto;"
               alt="${testimonial.author}">
        </div>
      `;

      container.appendChild(col);
    });
  })
  .catch(error => {
    console.error('Error loading testimonials:', error);
  });
