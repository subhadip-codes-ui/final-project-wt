// ===============================
// Food Order Cart System
// ===============================

// Cart array and total variable
let cart = [];
let total = 0;

// Get the cart box element
const cartBox = document.getElementById("cart-box");
const cartList = document.getElementById("cart-list");
const totalElement = document.getElementById("total");

// Add item to cart
function addToCart(itemName, price) {
  cart.push({ name: itemName, price: price });
  total += price;
  updateCart();
  alert(`${itemName} added to cart!`);
}

// Update the cart display
function updateCart() {
  cartList.innerHTML = ""; // clear existing items
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartList.appendChild(li);
  });
  totalElement.textContent = total;
  cartBox.style.display = "block";
}

// Handle "Place Order" button click
document.getElementById("place-order").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert(`🎉 Order placed successfully! Total amount: ₹${total}`);
    // Reset cart
    cart = [];
    total = 0;
    updateCart();
    cartBox.style.display = "none";
  }
});
