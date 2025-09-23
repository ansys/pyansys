function collectFamilies(data) {
  const familyData = {};

  if (!data.projects || typeof data.projects !== "object") {
    console.error("Invalid projects data structure:", data.projects);
    return familyData;
  }

  const projects = Object.values(data.projects);

  for (const project of projects) {
    if (!project || typeof project !== "object") continue;

    const projectFamilies = project.families || ["Other"];
    const icon = project.icon || "ansys-icon-light.svg"; // Fallback icon

    projectFamilies.forEach((family) => {
      if (family) {
        if (!familyData[family]) {
          familyData[family] = { count: 0, icon: icon };
        }
        familyData[family].count += 1;
      }
    });
  }

  return familyData;
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

function displayFamilies(familyData) {
  const familiesContainer = document.getElementById("product-families-list");
  familiesContainer.innerHTML = "";

  const sortedFamilies = Object.keys(familyData).sort();
  const maxVisible = 5;
  let showMoreClicked = false;
  const theme = document.documentElement.dataset.theme || "light";

  sortedFamilies.forEach((family, index) => {
    const { count, icon } = familyData[family];

    const familyRow = document.createElement("div");
    familyRow.className = "family-row";
    if (index >= maxVisible) familyRow.style.display = "none"; // Hide extra items initially

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `family-${CSS.escape(family)}`;
    checkbox.dataset.family = family;
    checkbox.addEventListener("change", handleFamilySelection);

    const familyName = document.createElement("span");
    familyName.className = "family-name";
    familyName.textContent = family;

    const iconImage = document.createElement("img");
    iconImage.alt = `${family} icon`;
    iconImage.className = "ansys-icon";

    let basePath = "version/dev/";
    if (
      window.location.pathname.includes("version/dev") ||
      window.location.pathname.includes("version/stable") ||
      window.location.pathname.includes("pull/")
    ) {
      basePath = "";
    }

    const iconName =
      theme === "dark" && icon === "ansys-icon-light.svg"
        ? "ansys-icon-dark.svg"
        : `${icon}`;
    iconImage.src = `${basePath}${iconName}`;

    const familyCountElement = document.createElement("span");
    familyCountElement.className = "family-count";
    familyCountElement.textContent = `${count}`;

    familyRow.appendChild(checkbox);
    familyRow.appendChild(iconImage);
    familyRow.appendChild(familyName);
    familyRow.appendChild(familyCountElement);

    familiesContainer.appendChild(familyRow);
  });

  // Show more/less toggle
  const showMoreButton = document.querySelector(".product-families .show-more");
  const FamilyRows = document.querySelectorAll(".family-row");
  showMoreButton.addEventListener("click", () => {
    if (showMoreClicked) {
      FamilyRows.forEach((row, index) => {
        if (index >= maxVisible) row.style.display = "none";
      });
      showMoreButton.textContent = "Show more";
      showMoreClicked = false;
    } else {
      FamilyRows.forEach((row) => {
        row.style.display = "flex";
      });
      showMoreButton.textContent = "Show less";
      showMoreClicked = true;
    }
  });
}

function displayTags(tagCounts) {
  const tagsContainer = document.getElementById("product-tags-list");
  tagsContainer.innerHTML = "";

  const sortedTags = Object.keys(tagCounts).sort();
  const maxVisible = 5;
  let showMoreClicked = false;

  sortedTags.forEach((tag, index) => {
    const tagCount = tagCounts[tag];

    const tagRow = document.createElement("div");
    tagRow.className = "tag-row";
    if (index >= maxVisible) tagRow.style.display = "none";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `tag-${CSS.escape(tag)}`;
    checkbox.dataset.tag = tag;
    checkbox.addEventListener("change", handleTagSelection);

    const tagName = document.createElement("span");
    tagName.className = "tag-name";
    tagName.textContent = tag;

    const tagCountElement = document.createElement("span");
    tagCountElement.className = "tag-count";
    tagCountElement.textContent = `${tagCount}`;

    tagRow.appendChild(checkbox);
    tagRow.appendChild(tagName);
    tagRow.appendChild(tagCountElement);

    tagsContainer.appendChild(tagRow);
  });

  const showMoreButton = document.querySelector(".product-tags .show-more");
  const TagRows = document.querySelectorAll(".tag-row");
  showMoreButton.addEventListener("click", () => {
    if (showMoreClicked) {
      TagRows.forEach((row, index) => {
        if (index >= maxVisible) row.style.display = "none";
      });
      showMoreButton.textContent = "Show more";
      showMoreClicked = false;
    } else {
      TagRows.forEach((row) => {
        row.style.display = "flex";
      });
      showMoreButton.textContent = "Show less";
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
  const SelectedTagsContainer = document.getElementById("selected-product-tags-list");
  const SelectedFamiliesContainer = document.getElementById("selected-product-families-list");
  SelectedTagsContainer.innerHTML = "";
  SelectedFamiliesContainer.innerHTML = "";

  const selectedFamilies = Array.from(
    document.querySelectorAll('#product-families-list input[type="checkbox"]:checked')
  ).map((cb) => cb.dataset.family);

  const selectedTags = Array.from(
    document.querySelectorAll('#product-tags-list input[type="checkbox"]:checked')
  ).map((cb) => cb.dataset.tag);

  // Pills
  selectedTags.forEach((tag) => {
    const pill = document.createElement("span");
    pill.className = "selected-tag";
    pill.textContent = tag;
    SelectedTagsContainer.appendChild(pill);
  });

  selectedFamilies.forEach((fam) => {
    const pill = document.createElement("span");
    pill.className = "selected-family";
    pill.textContent = fam;
    SelectedFamiliesContainer.appendChild(pill);
  });

  // Filter project cards
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card) => {
    const cardFamilies = JSON.parse(card.getAttribute("data-families").replace(/'/g, '"') || "[]");
    const cardTags = JSON.parse(card.getAttribute("data-tags").replace(/'/g, '"') || "[]");

    const matchesFamily =
      selectedFamilies.length === 0 || selectedFamilies.some((f) => cardFamilies.includes(f));
    const matchesTag =
      selectedTags.length === 0 || selectedTags.every((t) => cardTags.includes(t));

    card.style.display = matchesFamily && matchesTag ? "flex" : "none";
  });

  // Hide families not in visible projects
  const familyRows = document.querySelectorAll("#product-families-list .family-row");
  familyRows.forEach((row) => {
    const fam = row.querySelector("input").dataset.family;
    const anyCardVisible = Array.from(projectCards).some(
      (c) =>
        c.style.display !== "none" &&
        JSON.parse(c.getAttribute("data-families").replace(/'/g, '"')).includes(fam)
    );
    row.style.display = anyCardVisible ? "flex" : "none";
  });

  // Hide tags not in visible projects
  const tagRows = document.querySelectorAll("#product-tags-list .tag-row");
  tagRows.forEach((row) => {
    const tag = row.querySelector("input").dataset.tag;
    const anyCardVisible = Array.from(projectCards).some(
      (c) =>
        c.style.display !== "none" &&
        JSON.parse(c.getAttribute("data-tags").replace(/'/g, '"')).includes(tag)
    );
    row.style.display = anyCardVisible ? "flex" : "none";
  });
}

function initializeAllCards() {
  const projects = document.querySelectorAll(".project-card");
  projects.forEach((project) => {
    project.style.display = "flex";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  fetch(PROJECTS_FILE)
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      return response.json();
    })
    .then((data) => {
      const familyData = collectFamilies(data);
      displayFamilies(familyData);

      const tagCounts = collectTags(data);
      displayTags(tagCounts);

      initializeAllCards();
    })
    .catch((error) => {
      console.error("Error fetching the projects data:", error);
    });
});

function updateIcon() {
  theme = document.documentElement.dataset.theme || "light";
  let icons = document.querySelectorAll(".ansys-icon");

  if (icons) {
    icons.forEach((iconImage) => {
      if (theme === "dark" && iconImage.src.includes("ansys-icon-light.svg")) {
        iconImage.src = iconImage.src.replace("ansys-icon-light.svg", "ansys-icon-dark.svg");
      }
      if (theme === "light" && iconImage.src.includes("ansys-icon-dark.svg")) {
        iconImage.src = iconImage.src.replace("ansys-icon-dark.svg", "ansys-icon-light.svg");
      }
    });
  }
}

const observer = new MutationObserver(updateIcon);
observer.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ["data-theme"],
});

// Initial call
updateIcon();
