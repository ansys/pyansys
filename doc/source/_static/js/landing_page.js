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
        checkbox.addEventListener('change', (event) => {
            handleFamilySelection(event.target, family, familyCount);
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

// Function to update the selected families section
function handleFamilySelection(checkbox, family, familyCount) {
    const selectedFamiliesContainer = document.getElementById('selected-families');

    if (checkbox.checked) {
        // Create a label for the selected family
        const familyLabel = document.createElement('div');
        familyLabel.className = 'selected-family';

        const familyText = document.createElement('span');
        familyText.textContent = family;

        const removeButton = document.createElement('span');
        removeButton.textContent = 'x';
        removeButton.className = 'remove-family';
        removeButton.addEventListener('click', () => {
            // Deselect the checkbox
            checkbox.checked = false;
            // Remove the family label
            familyLabel.remove();
        });

        // Append text and remove button to the family label
        familyLabel.appendChild(familyText);
        familyLabel.appendChild(removeButton);

        // Add the label to the selected families container
        selectedFamiliesContainer.appendChild(familyLabel);
    } else {
        // Find and remove the label if the checkbox is unchecked
        const familyLabels = selectedFamiliesContainer.getElementsByClassName('selected-family');
        for (let label of familyLabels) {
            if (label.querySelector('span').textContent === family) {
                label.remove();
                break;
            }
        }
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
    })
    .catch(error => {
        console.error('Error fetching the projects data:', error);
    });

