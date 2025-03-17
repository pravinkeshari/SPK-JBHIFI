// Simulated Cart Functionality
let cartCount = 0;

// Select all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll(".product button");

// Add event listeners to each button
addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        cartCount++;
        document.querySelector(".cart a").textContent = `🛒 Cart (${cartCount})`;
        alert("Product added to cart!");
    });
});