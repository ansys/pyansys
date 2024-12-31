// Function to collect families and their counts
function collectFamilies(data) {
    const familyCounts = {};

    // Iterate over each project and collect family info
    for (const projectId in data.projects) {
        const project = data.projects[projectId];
        const family = project.family;

        // Increment the family count
        if (familyCounts[family]) {
            familyCounts[family]++;
        } else {
            familyCounts[family] = 1;
        }
    }

    return familyCounts;
}

// Function to display families in the HTML
function displayFamilies(familyCounts) {
    const familiesContainer = document.getElementById('product-families-list');

    for (const family in familyCounts) {
        const familyCount = familyCounts[family];

        // Create a row for each family
        const familyRow = document.createElement('div');
        familyRow.className = 'family-row';

        // Create a checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        // Create family name
        const familyName = document.createElement('span');
        familyName.className = 'family-name';
        familyName.textContent = family;

        // Create family count
        const familyCountElem = document.createElement('span');
        familyCountElem.textContent = `(${familyCount})`;

        // Append elements to the row
        familyRow.appendChild(checkbox);
        familyRow.appendChild(familyName);
        familyRow.appendChild(familyCountElem);

        // Append the row to the container
        familiesContainer.appendChild(familyRow);
    }
}

// Fetch the JSON data from the 'projects.json' file
fetch('_static/projects.json')
    .then(response => response.json())
    .then(data => {
        // Collect families and display them
        const familyCounts = collectFamilies(data);
        displayFamilies(familyCounts);
    })
    .catch(error => {
        console.error('Error fetching the projects data:', error);
    });
