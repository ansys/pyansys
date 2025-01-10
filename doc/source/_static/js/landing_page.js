function collectFamilies(data) {
    const familyCounts = {};

    if (!data.projects || typeof data.projects !== 'object') {
        console.error('Invalid projects data structure:', data.projects);
        return familyCounts;
    }

    const projects = Object.values(data.projects);

    for (const project of projects) {
        if (!project || typeof project !== 'object') continue;

        const family = project.family;

        if (family) {
            familyCounts[family] = (familyCounts[family] || 0) + 1;
        }
    }

    return familyCounts;
}

function displayFamilies(familyCounts) {
    const familiesContainer = document.getElementById('product-families-list');

    familiesContainer.innerHTML = '';

    const sortedFamilies = Object.keys(familyCounts).sort();

    sortedFamilies.forEach(family => {
        const familyCount = familyCounts[family];

        const familyRow = document.createElement('div');
        familyRow.className = 'family-row';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `family-${CSS.escape(family)}`;
        checkbox.addEventListener('change', handleFamilySelection);

        const familyName = document.createElement('span');
        familyName.className = 'family-name';
        familyName.textContent = family;

        const familyCountElem = document.createElement('span');
        familyCountElem.className = 'family-count';
        familyCountElem.textContent = `(${familyCount})`;

        familyRow.appendChild(checkbox);
        familyRow.appendChild(familyName);
        //familyRow.appendChild(familyCountElem);

        familiesContainer.appendChild(familyRow);
    });
}

function handleFamilySelection() {
    const selectedFamilies = Array.from(
        document.querySelectorAll('#product-families-list input[type="checkbox"]:checked')
    ).map(checkbox => checkbox.id.replace('family-', '').toLowerCase());

    console.log('Selected families:', selectedFamilies);

    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        const family = card.getAttribute('data-family').toLowerCase();
        card.style.display = selectedFamilies.length === 0 || selectedFamilies.includes(family) ? 'flex' : 'none';
    });
}

function initializeAllCards() {
    const articleElement = document.querySelector('article');
    const projects = articleElement.querySelectorAll('.project-card');
    projects.forEach(project => {
        project.style.display = 'flex';
    });
}

fetch('_static/projects.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const familyCounts = collectFamilies(data);
        displayFamilies(familyCounts);
        initializeAllCards();
    })
    .catch(error => {
        console.error('Error fetching the projects data:', error);
    });

