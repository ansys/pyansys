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

  sortedFamilies.forEach((family) => {
    const familyCount = familyCounts[family];

    const familyRow = document.createElement("div");
    familyRow.className = "family-row";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `family-${CSS.escape(family)}`;
    checkbox.addEventListener("change", handleFamilySelection);

    const familyName = document.createElement("span");
    familyName.className = "family-name";
    familyName.textContent = family;

    const familyCountElem = document.createElement("span");
    familyCountElem.className = "family-count";
    familyCountElem.textContent = `(${familyCount})`;

    familyRow.appendChild(checkbox);
    familyRow.appendChild(familyName);
    //familyRow.appendChild(familyCountElem);

    familiesContainer.appendChild(familyRow);
  });
}

function displayTags(tagCounts) {
  const tagsContainer = document.getElementById("product-tags-list");
  tagsContainer.innerHTML = "";

  const sortedTags = Object.keys(tagCounts).sort();

  sortedTags.forEach((tag) => {
    const tagCount = tagCounts[tag];

    const tagRow = document.createElement("div");
    tagRow.className = "tag-row";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `tag-${CSS.escape(tag)}`;
    checkbox.addEventListener("change", handleTagSelection);

    const tagName = document.createElement("span");
    tagName.className = "tag-name";
    tagName.textContent = tag;

    const tagCountElem = document.createElement("span");
    tagCountElem.className = "tag-count";
    tagCountElem.textContent = `(${tagCount})`;

    tagRow.appendChild(checkbox);
    tagRow.appendChild(tagName);
    //tagRow.appendChild(tagCountElem);

    tagsContainer.appendChild(tagRow);
  });
}

function handleFamilySelection() {
  const selectedFamilies = Array.from(
    document.querySelectorAll(
      '#product-families-list input[type="checkbox"]:checked',
    ),
  ).map((checkbox) => checkbox.id.replace("family-", "").toLowerCase());

  console.log("Selected families:", selectedFamilies);

  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    const family = card.getAttribute("data-family").toLowerCase();
    card.style.display =
      selectedFamilies.length === 0 || selectedFamilies.includes(family)
        ? "flex"
        : "none";
  });
}

function handleTagSelection() {
  const selectedTags = Array.from(
    document.querySelectorAll(
      '#product-tags-list input[type="checkbox"]:checked',
    ),
  ).map((checkbox) => checkbox.id.replace("tag-", "").toLowerCase());

  console.log("Selected tags:", selectedTags);

  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    const rawTags = card.getAttribute("data-tags");

    if (!rawTags) {
      card.style.display = "none";
      return;
    }

    // Parse the data-tags string
    let cardTags = [];
    try {
      cardTags = JSON.parse(rawTags.replace(/'/g, '"'));
    } catch (error) {
      console.error("Error parsing data-tags:", rawTags, error);
      card.style.display = "none";
      return;
    }

    const cardTagsLower = cardTags.map((tag) => tag.toLowerCase());
    const hasMatchingTag = selectedTags.some((tag) =>
      cardTagsLower.includes(tag),
    );

    card.style.display =
      selectedTags.length === 0 || hasMatchingTag ? "flex" : "none";
  });
}

function initializeAllCards() {
  const articleElement = document.querySelector("article");
  const projects = articleElement.querySelectorAll(".project-card");
  projects.forEach((project) => {
    project.style.display = "flex";
  });
}

fetch("_static/projects.json")
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
