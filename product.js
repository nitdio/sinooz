// Load product data based on ?id= in the URL
function loadProduct() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];

    document.title = "Sinooz - " + product.name;

    document.getElementById("breadcrumb").innerHTML =
        `<a href="home.html">Home</a> <span>&gt;</span> ` +
        `<a href="search.html?category=${encodeURIComponent(product.category)}">${product.category}</a> ` +
        `<span>&gt;</span> <span>${product.name}</span>`;

    document.getElementById("product-title").textContent = product.name;
    document.getElementById("product-stars").textContent = product.rating;
    document.getElementById("product-reviews").textContent = product.reviews;

    document.getElementById("product-highlights").innerHTML =
        product.highlights.map(h => `<li>${h}</li>`).join("");

    document.getElementById("size-options").innerHTML =
        product.sizes.map((s, i) => `<button class="option-btn${i === 0 ? " option-active" : ""}">${s}</button>`).join("");

    document.getElementById("edition-options").innerHTML =
        product.editions.map((e, i) => `<button class="option-btn${i === 0 ? " option-active" : ""}">${e}</button>`).join("");

    document.getElementById("price-current").textContent = "$" + product.price;
    document.getElementById("price-was").textContent = "$" + product.priceWas;

    document.getElementById("acc-features").innerHTML =
        product.features.map(f => `<li>${f}</li>`).join("");
    document.getElementById("acc-materials").textContent = product.materials;
    document.getElementById("acc-measurements").textContent = product.measurements;
    document.getElementById("acc-care").textContent = product.care;
    document.getElementById("acc-shipping").textContent = product.shipping;
}

document.addEventListener("DOMContentLoaded", loadProduct);


// Image gallery carousel (placeholder shades stand in for real images)
const galleryMain = document.querySelector(".gallery-main");
const thumbs = document.querySelectorAll(".thumb");
const placeholderShades = ["#e0e0e0", "#d5d5d5", "#cacaca", "#dcdcdc", "#d0d0d0"];
let currentImageIndex = 0;

function updateGallery(index) {
    currentImageIndex = (index + placeholderShades.length) % placeholderShades.length;
    if (galleryMain) galleryMain.style.background = placeholderShades[currentImageIndex];
    thumbs.forEach((t, i) => t.classList.toggle("thumb-active", i === currentImageIndex));
}

const prevBtn = document.querySelector(".gallery-prev");
const nextBtn = document.querySelector(".gallery-next");
if (prevBtn) prevBtn.addEventListener("click", () => updateGallery(currentImageIndex - 1));
if (nextBtn) nextBtn.addEventListener("click", () => updateGallery(currentImageIndex + 1));

thumbs.forEach((thumb, i) => {
    thumb.addEventListener("click", () => updateGallery(i));
});


// Size / Edition option selection
document.querySelectorAll(".option-group").forEach(group => {
    group.addEventListener("click", function (e) {
        if (!e.target.classList.contains("option-btn")) return;
        group.querySelectorAll(".option-btn").forEach(btn => btn.classList.remove("option-active"));
        e.target.classList.add("option-active");
    });
});

// Accordion sections
document.querySelectorAll(".accordion-header").forEach(header => {
    header.addEventListener("click", function () {
        const item = header.parentElement;
        const isOpen = item.classList.contains("accordion-open");

        document.querySelectorAll(".accordion-item").forEach(i => {
            i.classList.remove("accordion-open");
            i.querySelector(".accordion-icon").textContent = "+";
        });

        if (!isOpen) {
            item.classList.add("accordion-open");
            header.querySelector(".accordion-icon").textContent = "\u2212";
        }
    });
});

