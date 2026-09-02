fetch("header.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;

        const searchInput = document.querySelector(".nav-search");
        const suggestionsBox = document.getElementById("search-suggestions");

        if (searchInput) {
            searchInput.addEventListener("keydown", function (e) {
                if (e.key === "Enter" && searchInput.value.trim() !== "") {
                    window.location.href = "search.html?q=" + encodeURIComponent(searchInput.value.trim());
                }
            });
        }

        if (searchInput && suggestionsBox && typeof PRODUCTS !== "undefined") {
            searchInput.addEventListener("input", function () {
                const query = searchInput.value.trim().toLowerCase();

                if (query === "") {
                    suggestionsBox.innerHTML = "";
                    suggestionsBox.style.display = "none";
                    return;
                }

                const matches = PRODUCTS.filter(p =>
                    p.name.toLowerCase().includes(query) ||
                    p.category.toLowerCase().includes(query)
                ).slice(0, 6);

                if (matches.length === 0) {
                    suggestionsBox.innerHTML = `<div class="suggestion-empty">No products found</div>`;
                    suggestionsBox.style.display = "block";
                    return;
                }

                suggestionsBox.innerHTML = matches.map(p => `
                    <a href="product.html?id=${encodeURIComponent(p.id)}" class="suggestion-item">
                        <div class="suggestion-image"></div>
                        <div class="suggestion-text">
                            <p class="suggestion-name">${p.name}</p>
                            <p class="suggestion-price">$${p.price}</p>
                        </div>
                    </a>
                `).join("");
                suggestionsBox.style.display = "block";
            });

            document.addEventListener("click", function (e) {
                if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
                    suggestionsBox.style.display = "none";
                }
            });
        }
    })
    .catch(error => {
        console.error("Error loading header:", error);
    });