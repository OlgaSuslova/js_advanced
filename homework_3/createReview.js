// 1. Страница добавления отзыва о продукте.
// Должна содержать форму с полем для ввода названия продукта и текстовое поле
// для текста отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в localstorage.
// Необходимо реализовать проверку, оба поля должны быть заполнены, если это не
// так, необходимо выводить ошибку пользователю.


const productNameEl = document.querySelector(".product__name");
const productReviewEl = document.querySelector(".product__review");
const buttonReviewEl = document.querySelector(".product__submit_review");

buttonReviewEl.addEventListener("click", () => {
  const name = productNameEl.value;
  const rewiew = productReviewEl.value;

  if (name !== "" && rewiew !== "") {
    let store = JSON.parse(localStorage.getItem(name));
    if (store === null) {
      store = [];
    }
    store.push(rewiew);
    localStorage.setItem(name, JSON.stringify(store));
  } else {
    alert("Все поля должны быть заполнены");
  }
});
