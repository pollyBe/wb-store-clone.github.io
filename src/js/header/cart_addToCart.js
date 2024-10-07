import { cartAdded, updateCartCount, updateTotalSum } from "./cart";
import { createItem } from "./cart_createItem";
import { setItemsInStorage } from "./cart_storageGetSet";

export function addToCart(card) {
  const productItem = {
    id: card.id,
    name: card.name,
    price: card.discount ? card.discount : card.price,
    discount: card.discount,
    image: card.images,
    quantity: 1,
  };

  let existingProduct = cartAdded.find((item) => item.id === card.id);

  if (existingProduct) {
    existingProduct.quantity += productItem.quantity;
    existingProduct.price += productItem.discount;
  } else {
    cartAdded.push(productItem);
  }
  setItemsInStorage(cartAdded);
  renderCart(cartAdded);
}

export function renderCart(cartAdded) {
  const cartElement = document.getElementById("cart-stuff");
  cartElement.innerHTML = "";

  cartAdded.forEach((item) => {
    createItem(item);
  });
  updateCartCount();
  updateTotalSum();
}
