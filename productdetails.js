document.addEventListener("DOMContentLoaded", function() {
  // Get product ID from local storage
  const productId = localStorage.getItem("productId");

  // Find the product with the matching ID
  const product = products.find(p => p.id === parseInt(productId));

  // Display product details
  if (product) {
    document.querySelector(".main-image").src = product.image;
    const additionalImages = document.querySelectorAll(".additional-image");
      product.additionalImages.forEach((image, index) => {
        additionalImages[index].src = image;

        // Add event listener to each additional image
        additionalImages[index].addEventListener("click", function () {
          document.querySelector(".main-image").src = image;
        });
      });
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


  // Function to generate stars
function generateStars(rating) {
  const ratingContainer = document.querySelector(".product-rating");
  ratingContainer.innerHTML = ""; // Clear existing content

  const filledStars = Math.floor(rating);
  const unfilledStars = 5 - filledStars;

  // Create filled stars
  for (let i = 0; i < filledStars; i++) {
    const starIcon = document.createElement("span");
    starIcon.className = "material-icons";
    starIcon.style.color = "#ffcc00";
    starIcon.textContent = "star";
    ratingContainer.appendChild(starIcon);
  }

  // Create unfilled stars
  for (let i = 0; i < unfilledStars; i++) {
    const starIcon = document.createElement("span");
    starIcon.className = "material-icons";
    starIcon.style.color = "#ffcc00";
    starIcon.textContent = "star_border";
    ratingContainer.appendChild(starIcon);
  }
}

// Display rating
generateStars(product.rating);
});