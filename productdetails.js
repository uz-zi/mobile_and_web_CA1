document.addEventListener("DOMContentLoaded", function() {
  // Get product ID from local storage
  const productId = localStorage.getItem("productId");

  // Find the product with the matching ID
  const product = products.find(p => p.id === parseInt(productId));

  // Display product details
  if (product) {
    document.querySelector(".product-image img").src = product.image;
    document.querySelector(".product-title").textContent = product.name;
    document.querySelector(".product-description").textContent = product.description;
    document.querySelector(".product-price").textContent = product.price;
    document.querySelectorAll(".product-info")[0].textContent = `Weight: ${product.weight}`;
    document.querySelectorAll(".product-info")[1].textContent = `Size: ${product.size}`;
    document.querySelectorAll(".product-info")[2].textContent = `Color: ${product.color}`;
    document.querySelector(".product-category").textContent = `Category: ${product.category}`;


    // Add event listener to the "Add to Cart" button
    const addToCartButton = document.querySelector(".btn-warning");
    addToCartButton.addEventListener("click", function() {
      // Get existing cart items from local storage
      let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

      // Add the current product ID to the cart items
      cartItems.push(product.id);

      // Save the updated cart items to local storage
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    });
    
  } else {
    console.error("Product not found");
  }
});