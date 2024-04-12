"use strict";

function uid() {
  return Math.random().toString(36).slice(2);
}

const initialData = [
  {
    id: uid(),
    img: "./img/iphone.jpg",
    product: "Apple iPhone 13",
    reviews: [
      {
        id: uid(),
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: uid(),
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    id: uid(),
    img: "./img/samsung.jpeg",
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: uid(),
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    id: uid(),
    img: "./img/sony.jpeg",
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: uid(),
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

const products = document.querySelector(".products");
products.classList.add("products");

initialData.forEach((elem) => {
  const productEl = document.createElement("h3");
  productEl.classList.add("product");
  productEl.textContent += elem.product;
  products.appendChild(productEl);

  const imgEl = document.createElement("img");
  imgEl.classList.add("img-product");
  imgEl.src = elem.img;
  imgEl.alt = elem.product;
  productEl.appendChild(imgEl);

  const reviews = document.createElement("ol");
  reviews.classList.add("reviews");
  elem.reviews.forEach((elem) => {
    reviews.innerHTML += `<li>${elem.text}</li>`;
  });

  products.appendChild(reviews);
 
  const inputUserEl = document.createElement("input");

  const buttonEl = document.createElement("button");
  buttonEl.textContent = "Отправить";

  buttonEl.addEventListener("click", () => {
    const userInput = inputUserEl.value;
    if (userInput.length < 50 || userInput.length > 500) {
      messageEl.textContent =
        "Ошибка! Длина комментария должна быть от 50 до 500 символов!";
    } else {
      const liEl = document.createElement("li");
      liEl.textContent = userInput;
      reviews.innerHTML += `<li>${liEl.textContent}</li>`;
      initialData.push(reviews.lastChild);
      reviews.appendChild(reviews.lastChild);
      inputUserEl.value = "";
    }
  });
  products.appendChild(inputUserEl);
  products.appendChild(buttonEl);
});

const messageEl = document.createElement("div");
messageEl.style.color = "red";
products.appendChild(messageEl);