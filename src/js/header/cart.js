import { showModal, closeModal } from "./modalShowClose";
import { getItemFromStorage, setItemsInStorage } from "./cart_storageGetSet";
import { renderCart } from "./cart_addToCart";

const body = document.querySelector("body");

// Кнопка для открытия корзины
const cartButton = document.createElement("button");
cartButton.id = "cart-button";
cartButton.type = "button";
cartButton.textContent = "Cart";

// Создание модального окна корзины
const modal = document.createElement("div");
modal.className = "modal";
modal.id = "cart-modal";

const modalContent = document.createElement("div");
modalContent.className = "modal-content";

const cartHead = document.createElement("div");
cartHead.className = "cart-head";

const cartTitle = document.createElement("h3");
cartTitle.className = "cart-title";
cartTitle.textContent = "Your Cart";

const cartClear = document.createElement("button");
cartClear.className = "cart-clear-btn";
cartClear.textContent = "Clear cart";

cartClear.addEventListener("click", clearCart);
const close = document.createElement("div");
const closeWrap = document.createElement("div");
closeWrap.className = "close-wrap";
close.className = "cart-close-btn";
close.append(closeWrap);

const cartStuff = document.createElement("div");
cartStuff.className = "cart-stuff";
cartStuff.id = "cart-stuff";

const totalSum = document.createElement("div");
totalSum.className = "total-sum";

const totalText = document.createElement("p");
totalText.textContent = "Total: 0 BYN";
totalSum.append(totalText);

cartHead.append(cartTitle, cartClear, close);
modalContent.append(cartHead, cartStuff, totalSum);
modal.append(modalContent);

close.addEventListener("click", closeModal);
cartButton.addEventListener("click", showModal);

let cartAdded = getItemFromStorage();

const cartCount = document.createElement("span");
cartCount.id = "cart-count";
cartCount.textContent = "(0)";
cartButton.appendChild(cartCount);

function clearCart() {
  cartAdded = [];
  setItemsInStorage(cartAdded);
  document.querySelector(".cart-stuff").innerHTML = "";
  updateCartCount();
  updateTotalSum();
}

function updateCartCount() {
  const itemCount = cartAdded.length;
  cartCount.textContent = `(${itemCount})`;
}

function updateTotalSum() {
  const total = cartAdded.reduce((acc, item) => acc + item.price, 0);
  totalText.textContent = `Total: ${total} BYN`;
}

const itemDeleteBtn = document.createElement("button");
itemDeleteBtn.type = "button";
itemDeleteBtn.className = "item-delete-btn";
itemDeleteBtn.addEventListener("click", (el) => {
  const index = cartAdded.findIndex((item) => item.id === productItem.id);
  if (index !== -1) {
    cartAdded.splice(index, 1);
    el.currentTarget.closest(".item-wrap").remove();
    setItemsInStorage(cartAdded);
    updateCartCount();
    updateTotalSum();
  }
});

export {
  modal,
  cartButton,
  body,
  cartStuff,
  cartAdded,
  updateCartCount,
  updateTotalSum,
}; // Экспортируем функцию
