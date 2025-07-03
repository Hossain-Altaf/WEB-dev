const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 49.99,
    image: "images/headphones.jpg"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 89.99,
    image: "images/smartwatch.png"
  },
  {
    id: 3,
    name: "Sneakers",
    price: 59.99,
    image: "images/sneakers.jpg"
  },
  {
    id: 4,
    name: "Powerbank",
    price: 20.99,
    image: "images/pb.jpg"
  },
  {
    id: 5,
    name: "Type-C Cable",
    price: 4.99,
    image: "images/typec.jpg"
  },
  {
    id: 6,
    name: "BT Speakers",
    price: 19.99,
    image: "images/speaker.jpeg"
  },
  {
    id: 7,
    name: "Phone Case",
    price: 9.99,
    image: "images/phone_cover.jpg"
  },
  {
    id: 8,
    name: "Laptop Stand",
    price: 5.99,
    image: "images/lstand.jpg"
  }
];



let cartCount = 0;

function renderProducts() {
  const productList = document.getElementById("product-list");

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button onclick="addToCart()">Add to Cart</button>
    `;

    productList.appendChild(card);
  });
}

function addToCart() {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
}

document.addEventListener("DOMContentLoaded", renderProducts);
