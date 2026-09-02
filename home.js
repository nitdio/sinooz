document.addEventListener("DOMContentLoaded", function () {
    const grid = document.getElementById("featured-grid");
    if (!grid || typeof PRODUCTS === "undefined") return;

    const productsToShow = PRODUCTS.slice(0, 4);

    grid.innerHTML = productsToShow.map(p => `
        <a href="/product?id=${encodeURIComponent(p.id)}" class="result-card">
            <div class="result-image"></div>
            <p class="result-name">${p.name}</p>
            <p class="result-price">$${p.price}</p>
        </a>
    `).join("");
});
