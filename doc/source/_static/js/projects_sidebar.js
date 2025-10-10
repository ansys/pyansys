/**
 * Utility: Safely extract object values
 */
function getProjects(data) {
  if (!data?.projects || typeof data.projects !== "object") {
    console.error("Invalid projects data structure:", data.projects);
    return [];
  }
  return Object.values(data.projects).filter((p) => typeof p === "object");
}

/**
 * Collect family data with counts and icons
 */
function collectFamilies(data) {
  return getProjects(data).reduce((acc, project) => {
    const families = project.families?.length ? project.families : ["Other"];
    const icon = project.icon || "ansys-icon-light.svg";

    families.forEach((family) => {
      if (!family) return;
      if (!acc[family]) acc[family] = { count: 0, icon };
      acc[family].count += 1;
    });
    return acc;
  }, {});
}

/**
 * Collect tag counts across all projects
 */
function collectTags(data) {
  return getProjects(data).reduce((acc, project) => {
    (project.tags || []).forEach((tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {});
}

/**
 * DOM Helpers
 */
const DOM = {
  clear: (el) => (el.innerHTML = ""),
  create: (tag, attrs = {}, children = []) => {
    const el = document.createElement(tag);
    Object.entries(attrs).forEach(([k, v]) => {
      if (k === "class") el.className = v;
      else if (k === "text") el.textContent = v;
      else el.setAttribute(k, v);
    });
    children.forEach((child) => el.appendChild(child));
    return el;
  },
  qs: (selector) => document.querySelector(selector),
  qsa: (selector) => Array.from(document.querySelectorAll(selector)),
};

/**
 * Display functions
 */
function displayFamilies(familyData) {
  const container = DOM.qs("#product-families-list");
  DOM.clear(container);

  const sortedFamilies = Object.keys(familyData).sort();
  const theme = document.documentElement.dataset.theme || "light";
  const maxVisible = 5;

  sortedFamilies.forEach((family, i) => {
    const { count, icon } = familyData[family];
    const row = DOM.create("div", { class: "family-row" });
    if (i >= maxVisible) row.style.display = "none";

    const checkbox = DOM.create("input", {
      type: "checkbox",
      id: `family-${CSS.escape(family)}`,
      "data-family": family,
    });
    checkbox.addEventListener("change", handleFilterChange);

    const iconPath = getIconPath(icon, theme);
    const img = DOM.create("img", {
      src: iconPath,
      alt: `${family} icon`,
      class: "ansys-icon",
    });

    const name = DOM.create("span", { class: "family-name", text: family });
    const countEl = DOM.create("span", {
      class: "family-count",
      text: String(count),
    });

    row.append(checkbox, img, name, countEl);
    container.appendChild(row);
  });

  setupShowMore(
    ".product-families .show-more",
    "#product-families-list .family-row",
    maxVisible,
  );
}

function displayTags(tagCounts) {
  const container = DOM.qs("#product-tags-list");
  DOM.clear(container);

  const sortedTags = Object.keys(tagCounts).sort();
  const maxVisible = 5;

  sortedTags.forEach((tag, i) => {
    const count = tagCounts[tag];
    const row = DOM.create("div", { class: "tag-row" });
    if (i >= maxVisible) row.style.display = "none";

    const checkbox = DOM.create("input", {
      type: "checkbox",
      id: `tag-${CSS.escape(tag)}`,
      "data-tag": tag,
    });
    checkbox.addEventListener("change", handleFilterChange);

    const name = DOM.create("span", { class: "tag-name", text: tag });
    const countEl = DOM.create("span", {
      class: "tag-count",
      text: String(count),
    });

    row.append(checkbox, name, countEl);
    container.appendChild(row);
  });

  setupShowMore(
    ".product-tags .show-more",
    "#product-tags-list .tag-row",
    maxVisible,
  );
}

/**
 * Show more/less handler
 */
function setupShowMore(buttonSelector, rowSelector, maxVisible) {
  const button = DOM.qs(buttonSelector);
  const rows = DOM.qsa(rowSelector);
  let expanded = false;

  rows.forEach(
    (row, i) => (row.style.display = i < maxVisible ? "flex" : "none"),
  );
  if (button) button.textContent = "Show more";

  button?.addEventListener("click", () => {
    expanded = !expanded;
    rows.forEach((row, i) => {
      row.style.display = expanded || i < maxVisible ? "flex" : "none";
    });
    button.textContent = expanded ? "Show less" : "Show more";
  });
}

/**
 * Helpers
 */
function getIconPath(icon, theme) {
  const darkModeIcon =
    theme === "dark" && icon === "ansys-icon-light.svg"
      ? "ansys-icon-dark.svg"
      : icon;
  const basePath = window.location.pathname.match(
    /version\/(dev|stable)|pull\//,
  )
    ? ""
    : "version/dev/";
  return `${basePath}${darkModeIcon}`;
}

function parseArrayFromAttr(value) {
  if (!value) return [];
  try {
    return JSON.parse(value);
  } catch {
    try {
      return JSON.parse(value.replace(/'/g, '"'));
    } catch {
      console.warn("Unable to parse data attribute:", value);
      return [];
    }
  }
}

/**
 * Filtering logic
 */
function handleFilterChange() {
  applyFilters();
}

function applyFilters() {
  const selectedFamilies = DOM.qsa("#product-families-list input:checked").map(
    (cb) => cb.dataset.family,
  );
  const selectedTags = DOM.qsa("#product-tags-list input:checked").map(
    (cb) => cb.dataset.tag,
  );

  updateSelectedPills(selectedFamilies, selectedTags);
  updateProjectCards(selectedFamilies, selectedTags);

  if (selectedTags.length > 0 && selectedFamilies.length === 0) {
    // Tags only → tag counts stay fixed, families update
    updateFamilyCountsFromVisible();
  } else if (selectedFamilies.length > 0 && selectedTags.length === 0) {
    // Families only → family counts stay fixed, tags update
    updateTagCountsFromVisible();
  } else if (selectedTags.length > 0 && selectedFamilies.length > 0) {
    // Both selected → both families and tags update
    updateCountsFromVisible();
  } else {
    resetAllCounts();
  }

  updateVisibleProjectsLimit();
}

function updateProjectCards(selectedFamilies, selectedTags) {
  DOM.qsa(".project-card").forEach((card) => {
    const families = parseArrayFromAttr(card.getAttribute("data-families"));
    const tags = parseArrayFromAttr(card.getAttribute("data-tags"));

    let visible = true;

    if (selectedTags.length > 0) {
      visible = selectedTags.every((t) => tags.includes(t));
      if (visible && selectedFamilies.length > 0) {
        visible = selectedFamilies.some((f) => families.includes(f));
      }
    } else if (selectedFamilies.length > 0) {
      visible = selectedFamilies.some((f) => families.includes(f));
    }

    card.style.display = visible ? "flex" : "none";
  });
}

/**
 * Dynamic counts updates
 */
function updateFamilyCountsFromVisible() {
  const visibleCards = DOM.qsa(".project-card").filter(
    (c) => c.style.display !== "none",
  );
  const familyCounts = {};
  visibleCards.forEach((card) => {
    const fams = parseArrayFromAttr(card.getAttribute("data-families"));
    fams.forEach((f) => (familyCounts[f] = (familyCounts[f] || 0) + 1));
  });

  DOM.qsa("#product-families-list .family-row").forEach((row) => {
    const fam = row.querySelector("input")?.dataset.family;
    const count = familyCounts[fam] || 0;
    const countSpan = row.querySelector(".family-count");
    if (countSpan) countSpan.textContent = String(count);
    row.style.display = count > 0 ? "flex" : "none";
  });
}

function updateTagCountsFromVisible() {
  const visibleCards = DOM.qsa(".project-card").filter(
    (c) => c.style.display !== "none",
  );
  const tagCounts = {};
  visibleCards.forEach((card) => {
    const tags = parseArrayFromAttr(card.getAttribute("data-tags"));
    tags.forEach((t) => (tagCounts[t] = (tagCounts[t] || 0) + 1));
  });

  DOM.qsa("#product-tags-list .tag-row").forEach((row) => {
    const tag = row.querySelector("input")?.dataset.tag;
    const count = tagCounts[tag] || 0;
    const countSpan = row.querySelector(".tag-count");
    if (countSpan) countSpan.textContent = String(count);
    row.style.display = count > 0 ? "flex" : "none";
  });
}

function updateCountsFromVisible() {
  // Both selected → update both sides
  updateFamilyCountsFromVisible();
  updateTagCountsFromVisible();
}

function resetAllCounts() {
  // ✅ Show all project cards again
  DOM.qsa(".project-card").forEach((card) => (card.style.display = "flex"));

  const familyCounts = {};
  const tagCounts = {};

  // ✅ Count all projects (no filters)
  DOM.qsa(".project-card").forEach((card) => {
    const fams = parseArrayFromAttr(card.getAttribute("data-families"));
    const tags = parseArrayFromAttr(card.getAttribute("data-tags"));
    fams.forEach((f) => (familyCounts[f] = (familyCounts[f] || 0) + 1));
    tags.forEach((t) => (tagCounts[t] = (tagCounts[t] || 0) + 1));
  });

  // ✅ Reset family list counts and show all families
  DOM.qsa("#product-families-list .family-row").forEach((row) => {
    const fam = row.querySelector("input")?.dataset.family;
    const countSpan = row.querySelector(".family-count");
    const count = familyCounts[fam] || 0;
    if (countSpan) countSpan.textContent = String(count);
    row.style.display = "flex";
  });

  // ✅ Reset tag list counts and show all tags
  DOM.qsa("#product-tags-list .tag-row").forEach((row) => {
    const tag = row.querySelector("input")?.dataset.tag;
    const countSpan = row.querySelector(".tag-count");
    const count = tagCounts[tag] || 0;
    if (countSpan) countSpan.textContent = String(count);
    row.style.display = "flex";
  });

  // ✅ Restore sidebar “Show more” truncation (optional)
  setupShowMore(
    ".product-families .show-more",
    "#product-families-list .family-row",
    5,
  );
  setupShowMore(".product-tags .show-more", "#product-tags-list .tag-row", 5);
}

/**
 * UI updates
 */
function updateSelectedPills(families, tags) {
  const tagContainer = DOM.qs("#selected-product-tags-list");
  const familyContainer = DOM.qs("#selected-product-families-list");
  if (tagContainer) DOM.clear(tagContainer);
  if (familyContainer) DOM.clear(familyContainer);

  tags.forEach((t) =>
    tagContainer?.appendChild(
      DOM.create("span", { class: "selected-tag", text: t }),
    ),
  );
  families.forEach((f) =>
    familyContainer?.appendChild(
      DOM.create("span", { class: "selected-family", text: f }),
    ),
  );

  const clearTagsBtn = DOM.qs("#clear-tags-button");
  const clearFamiliesBtn = DOM.qs("#clear-product-families");
  if (clearTagsBtn) clearTagsBtn.style.display = tags.length ? "flex" : "none";
  if (clearFamiliesBtn)
    clearFamiliesBtn.style.display = families.length ? "flex" : "none";
}

/**
 * Pagination control
 */
function updateVisibleProjectsLimit(limit = 5) {
  // const visibleCards = DOM.qsa(".project-card").filter(
  //   (c) => c.style.display !== "none"
  // );
  // visibleCards.forEach((card, idx) => {
  //   card.style.display = idx < limit ? "flex" : "none";
  // });

  const showMoreBtn = DOM.qs("#show-more-button");
  if (showMoreBtn) {
    showMoreBtn.style.display = visibleCards.length > limit ? "flex" : "none";
    showMoreBtn.onclick = () => showRemainingProjects(limit);
  }
}

function showRemainingProjects(limit) {
  DOM.qsa(".project-card").forEach((card) => {
    if (card.style.display !== "none") card.style.display = "flex";
  });
  const btn = DOM.qs("#show-more-button");
  if (btn) btn.style.display = "none";
}

/**
 * Theme icon updater
 */
function updateIcon() {
  const theme = document.documentElement.dataset.theme || "light";
  DOM.qsa(".ansys-icon").forEach((img) => {
    img.src =
      theme === "dark"
        ? img.src.replace("ansys-icon-light.svg", "ansys-icon-dark.svg")
        : img.src.replace("ansys-icon-dark.svg", "ansys-icon-light.svg");
  });
}
const observer = new MutationObserver(updateIcon);
observer.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ["data-theme"],
});

/**
 * Initialization
 */
document.addEventListener("DOMContentLoaded", () => {
  fetch(PROJECTS_FILE)
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      return res.json();
    })
    .then((data) => {
      displayFamilies(collectFamilies(data));
      displayTags(collectTags(data));
    })
    .catch((err) => console.error("Error loading project data:", err));

  DOM.qs("#clear-tags-button")?.addEventListener("click", () => {
    DOM.qsa('#product-tags-list input[type="checkbox"]').forEach(
      (cb) => (cb.checked = false),
    );
    applyFilters();
  });

  DOM.qs("#clear-product-families")?.addEventListener("click", () => {
    DOM.qsa('#product-families-list input[type="checkbox"]').forEach(
      (cb) => (cb.checked = false),
    );
    applyFilters();
  });

  updateIcon();
});
