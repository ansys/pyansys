function collectFamilies(data) {
  const familyCounts = {};

  if (!data.projects || typeof data.projects !== "object") {
    console.error("Invalid projects data structure:", data.projects);
    return familyCounts;
  }

  const projects = Object.values(data.projects);

  for (const project of projects) {
    if (!project || typeof project !== "object") continue;

    const family = project.family;

    if (family) {
      familyCounts[family] = (familyCounts[family] || 0) + 1;
    }
  }

  return familyCounts;
}

function collectTags(data) {
  const tagCounts = {};

  if (!data.projects || typeof data.projects !== "object") {
    console.error("Invalid projects data structure:", data.projects);
    return tagCounts;
  }

  const projects = Object.values(data.projects);

  for (const project of projects) {
    if (!project || typeof project !== "object") continue;

    const tags = project.tags;

    if (Array.isArray(tags)) {
      tags.forEach((tag) => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      });
    }
  }

  return tagCounts;
}

function displayFamilies(familyCounts) {
  const familiesContainer = document.getElementById("product-families-list");
  familiesContainer.innerHTML = "";

  const sortedFamilies = Object.keys(familyCounts).sort();
  const maxVisible = 5; // Show only first 5 initially
  let showMoreClicked = false;

  sortedFamilies.forEach((family, index) => {
    const familyCount = familyCounts[family];

    const familyRow = document.createElement("div");
    familyRow.className = "family-row";
    if (index >= maxVisible) familyRow.style.display = "none"; // Hide extra items initially

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `family-${CSS.escape(family)}`;
    checkbox.addEventListener("change", handleFamilySelection);

    const familyName = document.createElement("span");
    familyName.className = "family-name";
    familyName.textContent = family;

    familyRow.appendChild(checkbox);
    familyRow.appendChild(familyName);

    familiesContainer.appendChild(familyRow);
  });

  // Handle "Show more" click
  const showMoreButton = document.querySelector(".product-families .show-more");
  showMoreButton.addEventListener("click", () => {
    if (!showMoreClicked) {
      document.querySelectorAll(".family-row").forEach(row => row.style.display = "flex");
      showMoreButton.style.display = "none"; // Hide "Show more" after clicking
      showMoreClicked = true;
    }
  });
}

function displayTags(tagCounts) {
  const tagsContainer = document.getElementById("product-tags-list");
  tagsContainer.innerHTML = "";

  const sortedTags = Object.keys(tagCounts).sort();
  const maxVisible = 5; // Show only first 5 initially
  let showMoreClicked = false;

  sortedTags.forEach((tag, index) => {
    const tagCount = tagCounts[tag];

    const tagRow = document.createElement("div");
    tagRow.className = "tag-row";
    if (index >= maxVisible) tagRow.style.display = "none"; // Hide extra items initially

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `tag-${CSS.escape(tag)}`;
    checkbox.addEventListener("change", handleTagSelection);

    const tagName = document.createElement("span");
    tagName.className = "tag-name";
    tagName.textContent = tag;

    tagRow.appendChild(checkbox);
    tagRow.appendChild(tagName);

    tagsContainer.appendChild(tagRow);
  });

  // Handle "Show more" click
  const showMoreButton = document.querySelector(".product-tags .show-more");
  showMoreButton.addEventListener("click", () => {
    if (!showMoreClicked) {
      document.querySelectorAll(".tag-row").forEach(row => row.style.display = "flex");
      showMoreButton.style.display = "none"; // Hide "Show more" after clicking
      showMoreClicked = true;
    }
  });
}

function handleFamilySelection() {
  applyFilters();
}

function handleTagSelection() {
  applyFilters();
}

function applyFilters() {
  const selectedFamilies = Array.from(
    document.querySelectorAll(
      '#product-families-list input[type="checkbox"]:checked',
    ),
  ).map((checkbox) =>
    checkbox.id.replace("family-", "").replace("\\ ", "-").toLowerCase(),
  );

  const selectedTags = Array.from(
    document.querySelectorAll(
      '#product-tags-list input[type="checkbox"]:checked',
    ),
  ).map((checkbox) =>
    checkbox.id.replace("tag-", "").replace("\\ ", "-").toLowerCase(),
  );

  console.log("Selected families:", selectedFamilies);
  console.log("Selected tags:", selectedTags);

  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    const family = card.getAttribute("data-family").toLowerCase();
    const rawTags = card.getAttribute("data-tags");

    let cardTags = [];
    if (rawTags) {
      try {
        cardTags = JSON.parse(rawTags.replace(/'/g, '"')).map((tag) =>
          tag.toLowerCase(),
        );
      } catch (error) {
        console.error("Error parsing data-tags:", rawTags, error);
      }
    }

    // Check if the card matches the selected families
    const matchesFamily =
      selectedFamilies.length === 0 || selectedFamilies.includes(family);

    // Check if the card matches the selected tags
    const matchesTag =
      selectedTags.length === 0 ||
      selectedTags.some((tag) => cardTags.includes(tag));

    // Show only if both family & tag filters match (or if no filter is applied)
    card.style.display = matchesFamily && matchesTag ? "flex" : "none";
  });
}

function initializeAllCards() {
  const articleElement = document.querySelector("article");
  const projects = articleElement.querySelectorAll(".project-card");
  projects.forEach((project) => {
    project.style.display = "flex";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  fetch(PROJECTS_FILE)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // Display families
      const familyCounts = collectFamilies(data);
      displayFamilies(familyCounts);

      // Display tags
      const tagCounts = collectTags(data);
      displayTags(tagCounts);

      // Render all cards
      initializeAllCards();
    })
    .catch((error) => {
      console.error("Error fetching the projects data:", error);
    });
});
