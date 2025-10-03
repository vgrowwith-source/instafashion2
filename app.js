// ⏱️ Countdown Timer
function updateDropTimer() {
  const dropTime = new Date("Oct 3, 2025 18:00:00").getTime();
  const now = new Date().getTime();
  const distance = dropTime - now;

  let output = "Drop Live Now!";
  if (distance > 0) {
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    output = `${hours}h ${minutes}m ${seconds}s Drop Live Now!`;
  }

  document.getElementById("top-timer").innerText = output;
}
setInterval(updateDropTimer, 1000);

// 🔄 Carousel Arrows (Placeholder)
document.querySelector(".arrow.left").addEventListener("click", () => {
  alert("Previous slide");
});
document.querySelector(".arrow.right").addEventListener("click", () => {
  alert("Next slide");
});

// 🛒 Cart Logic
let cart = JSON.parse(localStorage.getItem("instaCart")) || [];
function updateCartDisplay() {
  const cartIcon = document.querySelector(".cart");
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  cartIcon.innerText = `🛒 ₹${total}`;
}
updateCartDisplay();

// 🔍 Search Bar
document.querySelector(".search-bar").addEventListener("keypress", e => {
  if (e.key === "Enter") {
    const query = e.target.value.trim();
    if (query) alert(`Searching for: ${query}`);
  }
});

// 🧑‍💼 Sign-Up Button
document.querySelectorAll(".signup-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Redirecting to Sign-Up Page...");
    // window.location.href = "/signup.html";
  });
});

// 📦 Load More Products
document.querySelector(".load-more").addEventListener("click", () => {
  const newProduct = document.createElement("div");
  newProduct.className = "product-card";
  newProduct.innerHTML = `
    <img src="assets/newdrop.jpg" alt="Limited Edition Tee" />
    <h3>Limited Edition Tee</h3>
    <p>₹2,499</p>
  `;
  document.querySelector(".products").appendChild(newProduct);
});

// 🔠 Branding Animation
function animateBranding(element, text = "INSTAFASHION", speed = 80) {
  let i = 0;
  element.innerHTML = "";
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}
document.querySelectorAll(".branding-strip").forEach(el => animateBranding(el));