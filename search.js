let currentSort = "default";
let selectedCategories = [];
let selectedPriceRange = "all";

function getUniqueCategories() {
    return [...new Set(PRODUCTS.map(p => p.category))];
}

function buildCategoryFilterOptions() {
    const container = document.getElementById("filter-categories");
    if (!container) return;
    const categories = getUniqueCategories();
    container.innerHTML = categories.map(cat => `
        <label class="filter-option">
            <input type="checkbox" class="category-checkbox" value="${cat}"> ${cat}
        </label>
    `).join("");
}

function applyFilters(results) {
    let filtered = results;

    if (selectedCategories.length > 0) {
        filtered = filtered.filter(p => selectedCategories.includes(p.category));
    }

    if (selectedPriceRange !== "all") {
        const [min, max] = selectedPriceRange.split("-").map(Number);
        filtered = filtered.filter(p => p.price >= min && p.price <= max);
    }

    return filtered;
}

function sortResults(results) {
    const sorted = [...results];
    switch (currentSort) {
        case "best-selling":
            return sorted.sort((a, b) => (b.sales || 0) - (a.sales || 0));
        case "newest":
            return sorted.reverse();
        case "price-low":
            return sorted.sort((a, b) => a.price - b.price);
        case "price-high":
            return sorted.sort((a, b) => b.price - a.price);
        default:
            return sorted;
    }
}

function renderResults() {
    const params = new URLSearchParams(window.location.search);
    const query = (params.get("q") || "").trim().toLowerCase();
    const category = params.get("category");

    let results = PRODUCTS;
    let heading = "All Products";

    if (category) {
        results = results.filter(p => p.category === category);
        heading = category;
    }

    if (query) {
        results = results.filter(p =>
            p.name.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query)
        );
        heading = `Results for "${query}"`;
    }

    results = applyFilters(results);
    results = sortResults(results);

    document.getElementById("search-heading").textContent = heading;
    document.getElementById("product-count").textContent =
        `${results.length} product${results.length === 1 ? "" : "s"}`;

    const container = document.getElementById("search-results");
    const emptyMsg = document.getElementById("search-empty");

    if (results.length === 0) {
        container.innerHTML = "";
        emptyMsg.style.display = "block";
        return;
    }

    emptyMsg.style.display = "none";
    container.innerHTML = results.map(p => `
        <a href="product.html?id=${encodeURIComponent(p.id)}" class="result-card">
            <div class="result-image"></div>
            <p class="result-name">${p.name}</p>
            <p class="result-price">$${p.price}</p>
        </a>
    `).join("");
}

document.addEventListener("DOMContentLoaded", function () {
    buildCategoryFilterOptions();
    renderResults();

    // Sort dropdown
    const sortBtn = document.getElementById("sort-btn");
    const sortDropdown = document.getElementById("sort-dropdown");
    const sortLabel = document.getElementById("sort-label");

    sortBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        sortDropdown.classList.toggle("dropdown-open");
        document.getElementById("filter-panel").classList.remove("dropdown-open");
    });

    sortDropdown.querySelectorAll(".sort-option").forEach(option => {
        option.addEventListener("click", function () {
            currentSort = option.dataset.sort;
            sortLabel.textContent = option.textContent;
            sortDropdown.classList.remove("dropdown-open");
            renderResults();
        });
    });

    // Filter panel
    const filterBtn = document.getElementById("filter-btn");
    const filterPanel = document.getElementById("filter-panel");
    const filterClear = document.getElementById("filter-clear");

    filterBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        filterPanel.classList.toggle("dropdown-open");
        sortDropdown.classList.remove("dropdown-open");
    });

    filterPanel.addEventListener("click", function (e) {
        e.stopPropagation();
    });

    filterPanel.addEventListener("change", function (e) {
        if (e.target.classList.contains("category-checkbox")) {
            selectedCategories = [...filterPanel.querySelectorAll(".category-checkbox:checked")]
                .map(cb => cb.value);
        }
        if (e.target.name === "price-range") {
            selectedPriceRange = e.target.value;
        }
        renderResults();
    });

    filterClear.addEventListener("click", function () {
        selectedCategories = [];
        selectedPriceRange = "all";
        filterPanel.querySelectorAll(".category-checkbox").forEach(cb => cb.checked = false);
        filterPanel.querySelector('input[value="all"]').checked = true;
        renderResults();
    });

    // Close dropdowns when clicking elsewhere
    document.addEventListener("click", function () {
        sortDropdown.classList.remove("dropdown-open");
        filterPanel.classList.remove("dropdown-open");
    });
});
