function collectFamilies(data) {
    const familyCounts = {};

    // Ensure `data.projects` exists and is an object
    if (!data.projects || typeof data.projects !== 'object') {
        console.error('Invalid projects data structure:', data.projects);
        return familyCounts;
    }

    // Extract projects as an array
    const projects = Object.values(data.projects);

    // Iterate over each project and collect family info
    for (const project of projects) {
        if (!project || typeof project !== 'object') continue; // Skip invalid projects

        const family = project.family;

        if (family) {
            // Increment the family count
            familyCounts[family] = (familyCounts[family] || 0) + 1;
        }
    }

    return familyCounts;
}

// Function to display families in the HTML in alphabetical order
function displayFamilies(familyCounts) {
    const familiesContainer = document.getElementById('product-families-list');

    // Clear previous content
    familiesContainer.innerHTML = '';

    // Sort families alphabetically
    const sortedFamilies = Object.keys(familyCounts).sort();

    // Iterate over sorted families and create rows
    sortedFamilies.forEach(family => {
        const familyCount = familyCounts[family];

        // Create a row for each family
        const familyRow = document.createElement('div');
        familyRow.className = 'family-row';

        // Create a checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `family-${CSS.escape(family)}`; // Escape family name for valid id

        // Add event listener to handle family selection/deselection
        checkbox.addEventListener('change', () => {
            handleFamilySelection();
        });

        // Create family name
        const familyName = document.createElement('span');
        familyName.className = 'family-name';
        familyName.textContent = family;

        // Create family count
        const familyCountElem = document.createElement('span');
        familyCountElem.className = 'family-count';
        familyCountElem.textContent = `${familyCount}`;

        // Append elements to the row
        familyRow.appendChild(checkbox);
        familyRow.appendChild(familyName);
        familyRow.appendChild(familyCountElem);

        // Append the row to the container
        familiesContainer.appendChild(familyRow);
    });
}

// Function to update the visibility of cards based on selected families
function handleFamilySelection() {
    const articleElement = document.querySelector('article');
    const sdCards = articleElement.querySelectorAll('.sd-card');
    const selectedCheckboxes = document.querySelectorAll('#product-families-list input[type="checkbox"]:checked');

    if (selectedCheckboxes.length === 0) {
        // If no family is selected, show all cards
        sdCards.forEach(card => {
            card.style.display = 'block';
        });
    } else {
        const selectedFamilies = Array.from(selectedCheckboxes).map(checkbox => checkbox.id.replace('family-', '').toLowerCase());

        sdCards.forEach(card => {
            // Check if the card has a class matching any selected family
            const cardClasses = Array.from(card.classList).map(cls => cls.toLowerCase());
            const isVisible = selectedFamilies.some(family => cardClasses.includes(family));

            card.style.display = isVisible ? 'block' : 'none';
        });
    }
}

// Fetch the JSON data from the 'projects.json' file
fetch('_static/projects.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // Collect families and display them
        const familyCounts = collectFamilies(data);
        displayFamilies(familyCounts);

        // Initially show all "sd-card" divs
        const articleElement = document.querySelector('article');
        const sdCards = articleElement.querySelectorAll('.sd-card');
        sdCards.forEach(card => {
            card.style.display = 'block';
        });
    })
    .catch(error => {
        console.error('Error fetching the projects data:', error);
    });

