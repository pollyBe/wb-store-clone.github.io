
function $dc5822a06e659580$export$f1c7bf03df5f9daf() {
    const elements = (0, $397a5ab884049158$export$95bcff3698cf101e).querySelectorAll(".option-item");
    const seenTexts = new Set();
    elements.forEach((element)=>{
        const text = element.textContent.trim();
        if (seenTexts.has(text)) element.remove();
        else seenTexts.add(text);
    });
}



const $70b2dda5e66e98eb$export$aa686b8e61aa55e9 = document.querySelectorAll(".card-wrapper");
function $70b2dda5e66e98eb$export$e161bc0b9865a0b7() {
    const searchValue = this.value.trim().toLowerCase();
    const productCards = document.querySelectorAll(".card-wrapper");
    console.log(searchValue, "value");
    const li = document.createElement("li");
    li.className = "option-item";
    li.textContent = "";
    (0, $397a5ab884049158$export$95bcff3698cf101e).style.display = "none";
    const options = [];
    console.log(productCards, "productcards");
    productCards.forEach((card)=>{
        console.log(card);
        const productName = card.getAttribute("data-name").toLowerCase();
        console.log(productName, "name");
        if (productName.includes(searchValue)) {
            console.log(card, "card");
            options.push(card);
        }
    });
    if (!searchValue) {
        (0, $397a5ab884049158$export$95bcff3698cf101e).style.display = "none";
        (0, $397a5ab884049158$export$95bcff3698cf101e).innerHTML = "";
        return;
    }
    console.log(options, " options");
    (0, $397a5ab884049158$export$95bcff3698cf101e).innerHTML = "";
    if (options.length === 0) {
        li.textContent = "No matches...";
        (0, $397a5ab884049158$export$95bcff3698cf101e).append(li);
        (0, $397a5ab884049158$export$95bcff3698cf101e).style.display = "block";
    } else {
        options.forEach((card)=>{
            const productName = card.getAttribute("data-name").toLowerCase();
            const li = document.createElement("li");
            li.className = "option-item";
            li.textContent = productName;
            (0, $397a5ab884049158$export$95bcff3698cf101e).append(li);
            console.log(li.textContent);
            (0, $397a5ab884049158$export$95bcff3698cf101e).style.display = "block";
        });
        (0, $dc5822a06e659580$export$f1c7bf03df5f9daf)();
    }
}


const $397a5ab884049158$export$5ea39cf49534dea5 = document.createElement("div");
$397a5ab884049158$export$5ea39cf49534dea5.className = "search-field-wrap";
const $397a5ab884049158$var$clearBtn = document.createElement("div");
$397a5ab884049158$var$clearBtn.className = "clear-btn";
const $397a5ab884049158$var$searchBtn = document.createElement("button");
$397a5ab884049158$var$searchBtn.className = "search-button";
const $397a5ab884049158$var$searchInput = document.createElement("input");
$397a5ab884049158$var$searchInput.type = "text";
$397a5ab884049158$var$searchInput.value = "Search ...";
$397a5ab884049158$var$searchInput.id = "search-input";
const $397a5ab884049158$export$95bcff3698cf101e = document.createElement("ul");
$397a5ab884049158$export$95bcff3698cf101e.className = "options";
$397a5ab884049158$export$95bcff3698cf101e.style.display = "none";
$397a5ab884049158$export$5ea39cf49534dea5.append($397a5ab884049158$var$searchInput, $397a5ab884049158$var$clearBtn, $397a5ab884049158$export$95bcff3698cf101e, $397a5ab884049158$var$searchBtn);
$397a5ab884049158$var$searchInput.setAttribute("autocomplete", "off");
// Handle Enter key press
$397a5ab884049158$var$searchInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        $397a5ab884049158$var$searchInput.value = "";
        event.preventDefault();
    }
});
$397a5ab884049158$var$searchInput.addEventListener("focus", ()=>{
    $397a5ab884049158$var$searchInput.value = "";
});
// Handle clear button click
$397a5ab884049158$var$clearBtn.addEventListener("click", function() {
    $397a5ab884049158$var$searchInput.value = "";
    $397a5ab884049158$export$95bcff3698cf101e.style.display = "none";
    $397a5ab884049158$var$searchInput.focus();
});
document.addEventListener("click", (e)=>{
    const card = e.target.closest(".option-item");
    if (card) {
        const cardName = card.textContent.trim().toLowerCase();
        const productCards = document.querySelectorAll(".card-wrapper");
        productCards.forEach((element)=>{
            const targetName = element.getAttribute("data-name").trim().toLowerCase();
            if (targetName.includes(cardName)) {
                element.click();
                $397a5ab884049158$export$95bcff3698cf101e.style.display = "none";
                $397a5ab884049158$var$searchInput.value = "Search ...";
            }
        });
    }
});
$397a5ab884049158$var$searchBtn.addEventListener("click", ()=>{
    if (!$397a5ab884049158$export$5ea39cf49534dea5.classList.contains("active")) $397a5ab884049158$export$5ea39cf49534dea5.classList.add("active");
    else $397a5ab884049158$export$5ea39cf49534dea5.classList.remove("active");
});
$397a5ab884049158$var$searchInput.addEventListener("keyup", (0, $70b2dda5e66e98eb$export$e161bc0b9865a0b7));



function $bb8515395e20c23c$export$d7e8d4d4450c819c() {
    (0, $ccf840f00d1326cd$export$32180ef41b15b513).classList.add("modal-open");
    (0, $ccf840f00d1326cd$export$96e4b36520c26a2c).style.display = "block";
    (0, $ccf840f00d1326cd$export$96e4b36520c26a2c).classList.add("show");
}
function $bb8515395e20c23c$export$3f6fecd573f3fa48() {
    (0, $ccf840f00d1326cd$export$32180ef41b15b513).classList.remove("modal-open");
    (0, $ccf840f00d1326cd$export$96e4b36520c26a2c).style.display = "none";
    (0, $ccf840f00d1326cd$export$96e4b36520c26a2c).classList.remove("show");
}


function $012750906120f28b$export$70f3ac10b99af0b(cartAdded) {
    localStorage.setItem("productItem", JSON.stringify(cartAdded));
}
function $012750906120f28b$export$523e4c2d0ee74419() {
    const items = localStorage.getItem("productItem");
    return items ? JSON.parse(items) : [];
}






document.addEventListener("DOMContentLoaded", ()=>{
    (0, $ccf840f00d1326cd$export$62b5bc5e5115a21f).forEach((el)=>{
        $af0064b9b2ba0a97$export$1f768fd5b3313118(el);
    });
    (0, $ccf840f00d1326cd$export$5cfad6792d83f8fd)();
    (0, $ccf840f00d1326cd$export$c1a5de6c8b4be313)();
});
function $af0064b9b2ba0a97$export$1f768fd5b3313118(productItem) {
    const itemWrap = document.createElement("div");
    itemWrap.className = "item-wrap";
    itemWrap.id = productItem.id;
    const itemContent = document.createElement("div");
    itemContent.className = "item-content";
    const imgWrap = document.createElement("div");
    imgWrap.className = "img-wrap";
    const itemImg = document.createElement("img");
    itemImg.src = productItem.image;
    imgWrap.append(itemImg);
    const itemInfo = document.createElement("div");
    itemInfo.className = "item-info";
    const itemTitle = document.createElement("h3");
    itemTitle.className = "item-title";
    itemTitle.textContent = productItem.name;
    const quantityWrap = document.createElement("div");
    quantityWrap.className = "quantity-wrap";
    const quantityMinus = document.createElement("button");
    quantityMinus.id = "minus";
    quantityMinus.className = "quantity-btn";
    quantityMinus.type = "button";
    const itemQuantity = document.createElement("div");
    itemQuantity.className = "item-quantity";
    const itemNumber = document.createElement("p");
    itemNumber.id = "item-number";
    itemNumber.textContent = productItem.quantity;
    itemQuantity.append(itemNumber);
    const quantityPlus = document.createElement("button");
    quantityPlus.type = "button";
    quantityPlus.className = "quantity-btn";
    quantityPlus.id = "plus";
    quantityWrap.append(quantityMinus, itemQuantity, quantityPlus);
    const itemPrice = document.createElement("p");
    itemPrice.className = "item-price";
    itemPrice.textContent = productItem.price + ` BYN`;
    itemInfo.append(itemTitle, quantityWrap, itemPrice);
    const itemDeleteBtn = document.createElement("button");
    itemDeleteBtn.type = "button";
    itemDeleteBtn.className = "item-delete-btn";
    const itemBuyBtn = document.createElement("button");
    itemBuyBtn.type = "button";
    itemBuyBtn.className = "item-buy-btn";
    // Удаление товара из корзины
    itemDeleteBtn.addEventListener("click", (el)=>{
        const index = (0, $ccf840f00d1326cd$export$62b5bc5e5115a21f).findIndex((item)=>item.id === productItem.id);
        if (index !== -1) {
            (0, $ccf840f00d1326cd$export$62b5bc5e5115a21f).splice(index, 1);
            itemWrap.remove();
            (0, $012750906120f28b$export$70f3ac10b99af0b)((0, $ccf840f00d1326cd$export$62b5bc5e5115a21f));
            (0, $ccf840f00d1326cd$export$5cfad6792d83f8fd)();
            (0, $ccf840f00d1326cd$export$c1a5de6c8b4be313)();
        }
    });
    itemContent.append(imgWrap, itemInfo, itemDeleteBtn, itemBuyBtn);
    itemWrap.append(itemContent);
    (0, $ccf840f00d1326cd$export$522a1988e35a8ab6).append(itemWrap);
    quantityWrap.addEventListener("click", (e)=>{
        let productId = productItem.id;
        let currentQuantity = productItem.quantity;
        let currentPrice = productItem.discount;
        if (e.target.id === "minus") {
            if (currentQuantity > 1) updateQuantity(productId, currentQuantity - 1, (currentQuantity - 1) * currentPrice);
            else updateQuantity(productId, currentQuantity, currentPrice);
        } else if (e.target.id === "plus") updateQuantity(productId, currentQuantity + 1, (currentQuantity + 1) * currentPrice);
    });
    function updateQuantity(productId, newQuantity, newPrice) {
        let productMatch = (0, $ccf840f00d1326cd$export$62b5bc5e5115a21f).find((item)=>item.id === productId);
        if (productMatch) {
            productMatch.quantity = newQuantity;
            productMatch.price = newPrice;
            console.log(productMatch);
        } else (0, $ccf840f00d1326cd$export$62b5bc5e5115a21f).push({
            id: productId,
            quantity: newQuantity,
            price: newPrice
        });
        (0, $012750906120f28b$export$70f3ac10b99af0b)((0, $ccf840f00d1326cd$export$62b5bc5e5115a21f));
        (0, $e6f8c6de89c2e7dc$export$8dfd8b395632f873)((0, $ccf840f00d1326cd$export$62b5bc5e5115a21f));
    }
}



function $e6f8c6de89c2e7dc$export$576b6dd9d68b37bc(card) {
    const productItem = {
        id: card.id,
        name: card.name,
        price: card.discount ? card.discount : card.price,
        discount: card.discount,
        image: card.images,
        quantity: 1
    };
    let existingProduct = (0, $ccf840f00d1326cd$export$62b5bc5e5115a21f).find((item)=>item.id === card.id);
    if (existingProduct) {
        existingProduct.quantity += productItem.quantity;
        existingProduct.price += productItem.discount;
    } else (0, $ccf840f00d1326cd$export$62b5bc5e5115a21f).push(productItem);
    (0, $012750906120f28b$export$70f3ac10b99af0b)((0, $ccf840f00d1326cd$export$62b5bc5e5115a21f));
    $e6f8c6de89c2e7dc$export$8dfd8b395632f873((0, $ccf840f00d1326cd$export$62b5bc5e5115a21f));
}
function $e6f8c6de89c2e7dc$export$8dfd8b395632f873(cartAdded) {
    const cartElement = document.getElementById("cart-stuff");
    cartElement.innerHTML = "";
    cartAdded.forEach((item)=>{
        (0, $af0064b9b2ba0a97$export$1f768fd5b3313118)(item);
    });
    (0, $ccf840f00d1326cd$export$5cfad6792d83f8fd)();
    (0, $ccf840f00d1326cd$export$c1a5de6c8b4be313)();
}


const $ccf840f00d1326cd$export$32180ef41b15b513 = document.querySelector("body");
// Кнопка для открытия корзины
const $ccf840f00d1326cd$export$7861863ea30be33c = document.createElement("button");
$ccf840f00d1326cd$export$7861863ea30be33c.id = "cart-button";
$ccf840f00d1326cd$export$7861863ea30be33c.type = "button";
$ccf840f00d1326cd$export$7861863ea30be33c.textContent = "Cart";
// Создание модального окна корзины
const $ccf840f00d1326cd$export$96e4b36520c26a2c = document.createElement("div");
$ccf840f00d1326cd$export$96e4b36520c26a2c.className = "modal";
$ccf840f00d1326cd$export$96e4b36520c26a2c.id = "cart-modal";
const $ccf840f00d1326cd$var$modalContent = document.createElement("div");
$ccf840f00d1326cd$var$modalContent.className = "modal-content";
const $ccf840f00d1326cd$var$cartHead = document.createElement("div");
$ccf840f00d1326cd$var$cartHead.className = "cart-head";
const $ccf840f00d1326cd$var$cartTitle = document.createElement("h3");
$ccf840f00d1326cd$var$cartTitle.className = "cart-title";
$ccf840f00d1326cd$var$cartTitle.textContent = "Your Cart";
const $ccf840f00d1326cd$var$cartClear = document.createElement("button");
$ccf840f00d1326cd$var$cartClear.className = "cart-clear-btn";
$ccf840f00d1326cd$var$cartClear.textContent = "Clear cart";
$ccf840f00d1326cd$var$cartClear.addEventListener("click", $ccf840f00d1326cd$var$clearCart);
const $ccf840f00d1326cd$var$close = document.createElement("div");
const $ccf840f00d1326cd$var$closeWrap = document.createElement("div");
$ccf840f00d1326cd$var$closeWrap.className = "close-wrap";
$ccf840f00d1326cd$var$close.className = "cart-close-btn";
$ccf840f00d1326cd$var$close.append($ccf840f00d1326cd$var$closeWrap);
const $ccf840f00d1326cd$export$522a1988e35a8ab6 = document.createElement("div");
$ccf840f00d1326cd$export$522a1988e35a8ab6.className = "cart-stuff";
$ccf840f00d1326cd$export$522a1988e35a8ab6.id = "cart-stuff";
const $ccf840f00d1326cd$var$totalSum = document.createElement("div");
$ccf840f00d1326cd$var$totalSum.className = "total-sum";
const $ccf840f00d1326cd$var$totalText = document.createElement("p");
$ccf840f00d1326cd$var$totalText.textContent = "Total: 0 BYN";
$ccf840f00d1326cd$var$totalSum.append($ccf840f00d1326cd$var$totalText);
$ccf840f00d1326cd$var$cartHead.append($ccf840f00d1326cd$var$cartTitle, $ccf840f00d1326cd$var$cartClear, $ccf840f00d1326cd$var$close);
$ccf840f00d1326cd$var$modalContent.append($ccf840f00d1326cd$var$cartHead, $ccf840f00d1326cd$export$522a1988e35a8ab6, $ccf840f00d1326cd$var$totalSum);
$ccf840f00d1326cd$export$96e4b36520c26a2c.append($ccf840f00d1326cd$var$modalContent);
$ccf840f00d1326cd$var$close.addEventListener("click", (0, $bb8515395e20c23c$export$3f6fecd573f3fa48));
$ccf840f00d1326cd$export$7861863ea30be33c.addEventListener("click", (0, $bb8515395e20c23c$export$d7e8d4d4450c819c));
let $ccf840f00d1326cd$export$62b5bc5e5115a21f = (0, $012750906120f28b$export$523e4c2d0ee74419)();
const $ccf840f00d1326cd$var$cartCount = document.createElement("span");
$ccf840f00d1326cd$var$cartCount.id = "cart-count";
$ccf840f00d1326cd$var$cartCount.textContent = "(0)";
$ccf840f00d1326cd$export$7861863ea30be33c.appendChild($ccf840f00d1326cd$var$cartCount);
function $ccf840f00d1326cd$var$clearCart() {
    $ccf840f00d1326cd$export$62b5bc5e5115a21f = [];
    (0, $012750906120f28b$export$70f3ac10b99af0b)($ccf840f00d1326cd$export$62b5bc5e5115a21f);
    document.querySelector(".cart-stuff").innerHTML = "";
    $ccf840f00d1326cd$export$5cfad6792d83f8fd();
    $ccf840f00d1326cd$export$c1a5de6c8b4be313();
}
function $ccf840f00d1326cd$export$5cfad6792d83f8fd() {
    const itemCount = $ccf840f00d1326cd$export$62b5bc5e5115a21f.length;
    $ccf840f00d1326cd$var$cartCount.textContent = `(${itemCount})`;
}
function $ccf840f00d1326cd$export$c1a5de6c8b4be313() {
    const total = $ccf840f00d1326cd$export$62b5bc5e5115a21f.reduce((acc, item)=>acc + item.price, 0);
    $ccf840f00d1326cd$var$totalText.textContent = `Total: ${total} BYN`;
}
const $ccf840f00d1326cd$var$itemDeleteBtn = document.createElement("button");
$ccf840f00d1326cd$var$itemDeleteBtn.type = "button";
$ccf840f00d1326cd$var$itemDeleteBtn.className = "item-delete-btn";
$ccf840f00d1326cd$var$itemDeleteBtn.addEventListener("click", (el)=>{
    const index = $ccf840f00d1326cd$export$62b5bc5e5115a21f.findIndex((item)=>item.id === productItem.id);
    if (index !== -1) {
        $ccf840f00d1326cd$export$62b5bc5e5115a21f.splice(index, 1);
        el.currentTarget.closest(".item-wrap").remove();
        (0, $012750906120f28b$export$70f3ac10b99af0b)($ccf840f00d1326cd$export$62b5bc5e5115a21f);
        $ccf840f00d1326cd$export$5cfad6792d83f8fd();
        $ccf840f00d1326cd$export$c1a5de6c8b4be313();
    }
});
 // Экспортируем функцию


// create structure(global)
const $c02fe5c817708d9c$export$38e42c68cf43b5d4 = document.createElement("header"), $c02fe5c817708d9c$var$container = document.createElement("div"), $c02fe5c817708d9c$var$headerWrap = document.createElement("div"), $c02fe5c817708d9c$var$logo = document.createElement("div");
// adding classes and attributes
$c02fe5c817708d9c$export$38e42c68cf43b5d4.className = "header";
$c02fe5c817708d9c$var$container.className = "container";
$c02fe5c817708d9c$var$headerWrap.className = "header-wrap";
// set attributes in inner header elements
// logo element
$c02fe5c817708d9c$var$logo.className = "logo-wrap";
const $c02fe5c817708d9c$var$logoLink = document.createElement("a");
$c02fe5c817708d9c$var$logoLink.href = "#";
$c02fe5c817708d9c$var$logoLink.className = "logo-link";
$c02fe5c817708d9c$var$logoLink.textContent = "\u041D\u0415-Wildberries";
$c02fe5c817708d9c$var$logo.append($c02fe5c817708d9c$var$logoLink);
// add elements in document
const $c02fe5c817708d9c$var$body = document.querySelector("body");
$c02fe5c817708d9c$var$headerWrap.append($c02fe5c817708d9c$var$logo, (0, $397a5ab884049158$export$5ea39cf49534dea5), (0, $ccf840f00d1326cd$export$7861863ea30be33c));
$c02fe5c817708d9c$var$container.append($c02fe5c817708d9c$var$headerWrap);
$c02fe5c817708d9c$export$38e42c68cf43b5d4.append($c02fe5c817708d9c$var$container);
$c02fe5c817708d9c$var$body.prepend($c02fe5c817708d9c$export$38e42c68cf43b5d4);
$c02fe5c817708d9c$var$body.append((0, $ccf840f00d1326cd$export$96e4b36520c26a2c));



// Создаем элементы слайдера через DOM
const $0ca58055bd6b53d5$export$755d7ed31a25e0fb = document.createElement("div");
$0ca58055bd6b53d5$export$755d7ed31a25e0fb.classList.add("slider-container");
const $0ca58055bd6b53d5$var$sliderTrack = document.createElement("div");
$0ca58055bd6b53d5$var$sliderTrack.classList.add("slider-track");
$0ca58055bd6b53d5$export$755d7ed31a25e0fb.appendChild($0ca58055bd6b53d5$var$sliderTrack);
// Создаем индикаторы
const $0ca58055bd6b53d5$var$indicators = document.createElement("div");
$0ca58055bd6b53d5$var$indicators.classList.add("indicators");
$0ca58055bd6b53d5$export$755d7ed31a25e0fb.appendChild($0ca58055bd6b53d5$var$indicators);
// Добавляем кнопки переключения
const $0ca58055bd6b53d5$var$leftButton = document.createElement("button");
$0ca58055bd6b53d5$var$leftButton.classList.add("slider-button", "left");
$0ca58055bd6b53d5$var$leftButton.innerHTML = "\u2039";
$0ca58055bd6b53d5$export$755d7ed31a25e0fb.appendChild($0ca58055bd6b53d5$var$leftButton);
const $0ca58055bd6b53d5$var$rightButton = document.createElement("button");
$0ca58055bd6b53d5$var$rightButton.classList.add("slider-button", "right");
$0ca58055bd6b53d5$var$rightButton.innerHTML = "\u203A";
$0ca58055bd6b53d5$export$755d7ed31a25e0fb.appendChild($0ca58055bd6b53d5$var$rightButton);
// Добавляем слайдер в body
(0, $c02fe5c817708d9c$export$38e42c68cf43b5d4).after($0ca58055bd6b53d5$export$755d7ed31a25e0fb);
// Массив с картинками
const $0ca58055bd6b53d5$var$images = [
    "https://images.pexels.com/photos/5885454/pexels-photo-5885454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/5993378/pexels-photo-5993378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6303683/pexels-photo-6303683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6249674/pexels-photo-6249674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6238122/pexels-photo-6238122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];
// Добавляем изображения и индикаторы
$0ca58055bd6b53d5$var$images.forEach((imageSrc, index)=>{
    const slide = document.createElement("div");
    slide.classList.add("slide");
    slide.style.backgroundImage = `url(${imageSrc})`;
    $0ca58055bd6b53d5$var$sliderTrack.appendChild(slide);
    const indicator = document.createElement("div");
    indicator.classList.add("indicator");
    if (index === 0) indicator.classList.add("active");
    indicator.setAttribute("data-index", index);
    $0ca58055bd6b53d5$var$indicators.appendChild(indicator);
});
// Логика перемещения слайдера
let $0ca58055bd6b53d5$var$currentIndex = 0;
function $0ca58055bd6b53d5$var$moveSlider(index) {
    $0ca58055bd6b53d5$var$sliderTrack.style.transform = `translateX(-${index * 100}%)`;
    document.querySelectorAll(".indicator").forEach((indicator, i)=>{
        indicator.classList.toggle("active", i === index);
    });
}
function $0ca58055bd6b53d5$var$nextSlide() {
    $0ca58055bd6b53d5$var$currentIndex = ($0ca58055bd6b53d5$var$currentIndex + 1) % $0ca58055bd6b53d5$var$images.length;
    $0ca58055bd6b53d5$var$moveSlider($0ca58055bd6b53d5$var$currentIndex);
}
function $0ca58055bd6b53d5$var$prevSlide() {
    $0ca58055bd6b53d5$var$currentIndex = ($0ca58055bd6b53d5$var$currentIndex - 1 + $0ca58055bd6b53d5$var$images.length) % $0ca58055bd6b53d5$var$images.length;
    $0ca58055bd6b53d5$var$moveSlider($0ca58055bd6b53d5$var$currentIndex);
}
setInterval($0ca58055bd6b53d5$var$nextSlide, 3000);
// Клик по индикаторам
$0ca58055bd6b53d5$var$indicators.addEventListener("click", (e)=>{
    if (e.target.getAttribute("data-index")) {
        $0ca58055bd6b53d5$var$currentIndex = parseInt(e.target.getAttribute("data-index"));
        $0ca58055bd6b53d5$var$moveSlider($0ca58055bd6b53d5$var$currentIndex);
    }
});
// Клик по кнопкам переключения
$0ca58055bd6b53d5$var$leftButton.addEventListener("click", $0ca58055bd6b53d5$var$prevSlide);
$0ca58055bd6b53d5$var$rightButton.addEventListener("click", $0ca58055bd6b53d5$var$nextSlide);




function $1e76a6cacf7f0f2d$export$6b5f550c5bfc7eb1() {
    (0, $ccf840f00d1326cd$export$32180ef41b15b513).classList.add("modal-open");
}
function $1e76a6cacf7f0f2d$export$160568d1f543d9c0() {
    (0, $ccf840f00d1326cd$export$32180ef41b15b513).classList.remove("modal-open");
}



function $971062a9344d4907$export$112e329d0850fc97(item, cartBtn) {
    const cardWrapper = item;
    const cartButton = cartBtn;
    if (cardWrapper && cartButton) {
        let cardItem = cardWrapper;
        let cartItem = cartButton;
        if (cardItem && cartItem) {
            let cardPosition = cardItem.getBoundingClientRect();
            let cartPosition = cartItem.getBoundingClientRect();
            function moveToCart() {
                const cardClone = cardItem.cloneNode(true);
                cardClone.className = "clone";
                cardClone.style.position = "fixed";
                cardClone.style.left = cardPosition["x"] + "px";
                cardClone.style.top = cardPosition["y"] + "px";
                cardClone.style.zIndex = 32767;
                document.body.appendChild(cardClone);
                let start_x = cardPosition["x"] + 0.5 * cardPosition["width"];
                let start_y = cardPosition["y"] + 0.5 * cardPosition["height"];
                let delta_x = cartPosition["x"] + 0.5 * cartPosition["width"] - start_x;
                let delta_y = cartPosition["y"] + 0.5 * cartPosition["height"] - start_y;
                cardClone.animate([
                    {
                        transform: `translate(0px, 0px) scale(0.55)`,
                        opacity: `1`
                    },
                    {
                        transform: `translate(${delta_x}px, ${delta_y}px) scale(0.1)`,
                        opacity: `0`
                    }
                ], {
                    duration: 900,
                    easing: "ease-in-out",
                    fill: "forwards"
                }).onfinish = ()=>{
                    document.body.removeChild(cardClone);
                };
            }
            moveToCart(cardItem, cartItem);
        } else console.error("cardItem \u0438\u043B\u0438 cartItem \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B");
    } else console.error("cardWrapper \u0438\u043B\u0438 cartButton \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B");
}



// Создание элемента HTML
const $3933026d0c40cee9$export$a0417974f5a75d0e = document.createElement("section");
$3933026d0c40cee9$export$a0417974f5a75d0e.className = "section-cards";
const $3933026d0c40cee9$var$containerCards = document.createElement("div");
$3933026d0c40cee9$var$containerCards.className = "container";
const $3933026d0c40cee9$var$cardsWrapper = document.createElement("div");
$3933026d0c40cee9$var$cardsWrapper.className = "cards-wrapper";
window.addEventListener("DOMContentLoaded", ()=>{
    $3933026d0c40cee9$var$getData();
});
const $3933026d0c40cee9$var$url = "https://66f59c9b436827ced97492c3.mockapi.io/wb-store/cards";
const $3933026d0c40cee9$var$options = {
    method: "GET",
    headers: {
        "content-type": "application/json"
    }
};
async function $3933026d0c40cee9$var$getData() {
    await fetch($3933026d0c40cee9$var$url, $3933026d0c40cee9$var$options).then((result)=>result.json()).then((arr)=>{
        arr.forEach((card)=>{
            $3933026d0c40cee9$var$createCard(card);
        });
    });
}
function $3933026d0c40cee9$var$createCard(card) {
    // Обёртка для карточки
    const cardWrapper = document.createElement("div");
    cardWrapper.className = "card-wrapper";
    cardWrapper.id = card.id;
    cardWrapper.setAttribute("data-name", `${card.name}`);
    const cardWrapperSwitch = [
        "card-wrapper",
        "card-wrapper-click"
    ];
    let countEl = 0;
    cardWrapper.addEventListener("click", (e)=>{
        e.stopPropagation();
        (0, $1e76a6cacf7f0f2d$export$6b5f550c5bfc7eb1)();
        const prev = countEl;
        countEl++;
        if (countEl >= cardWrapperSwitch.length) {
            countEl = 0;
            (0, $1e76a6cacf7f0f2d$export$160568d1f543d9c0)();
        }
        cardWrapper.classList.remove(cardWrapperSwitch[prev]);
        cardWrapper.classList.add(cardWrapperSwitch[countEl]);
        document.addEventListener("click", handleOutsideClick);
        function handleOutsideClick(e) {
            if (!cardWrapper.contains(e.target)) {
                (0, $1e76a6cacf7f0f2d$export$160568d1f543d9c0)();
                cardWrapper.classList.remove(cardWrapperSwitch[countEl]);
                cardWrapper.classList.add(cardWrapperSwitch[0]);
                countEl = 0;
                document.removeEventListener("click", handleOutsideClick);
            }
        }
    });
    // Основная карточка
    const cardMain = document.createElement("div");
    cardMain.className = "card";
    // Изображение товара
    const imgItemWrap = document.createElement("div");
    imgItemWrap.className = "img-item-wrap";
    const cardImg = document.createElement("img");
    cardImg.src = card.images;
    cardImg.alt = card.name;
    cardImg.className = card.name;
    imgItemWrap.append(cardImg);
    // Скидка
    const discountCard = document.createElement("p");
    discountCard.textContent = card.discount + " byn";
    // Кнопка добавления в корзину
    const cardBtn = document.createElement("button");
    cardBtn.type = "button";
    cardBtn.className = "card-button";
    cardBtn.textContent = "Add to cart";
    cardBtn.addEventListener("click", (e)=>{
        e.stopPropagation();
        (0, $e6f8c6de89c2e7dc$export$576b6dd9d68b37bc)(card);
        let item;
        if (e.target.closest(".card-wrapper")) item = e.target.closest(".card-wrapper");
        else if (e.target.closest(".card-wrapper-click")) item = e.target.closest(".card-wrapper-click");
        (0, $971062a9344d4907$export$112e329d0850fc97)(item, (0, $ccf840f00d1326cd$export$7861863ea30be33c));
    });
    // Цена товара
    const priceNameWrap = document.createElement("div");
    priceNameWrap.className = "price-name-wrap";
    const cardPrice = document.createElement("p");
    cardPrice.textContent = card.price + " byn";
    cardPrice.style.textDecoration = "line-through";
    // Название товара
    const cardItemName = document.createElement("p");
    cardItemName.textContent = card.name;
    cardItemName.style.textTransform = "capitalize";
    cardItemName.style.fontSize = "1.25rem";
    priceNameWrap.append(cardPrice, cardItemName);
    // Добавление элементов в HTML
    cardMain.append(imgItemWrap, discountCard, cardBtn);
    cardWrapper.append(cardMain, priceNameWrap);
    $3933026d0c40cee9$var$cardsWrapper.append(cardWrapper);
    // Убедимся, что контейнер карточек не дублируется
    if (!document.querySelector(".cards-wrapper")) {
        $3933026d0c40cee9$var$containerCards.append($3933026d0c40cee9$var$cardsWrapper);
        $3933026d0c40cee9$export$a0417974f5a75d0e.append($3933026d0c40cee9$var$containerCards);
        (0, $0ca58055bd6b53d5$export$755d7ed31a25e0fb).after($3933026d0c40cee9$export$a0417974f5a75d0e);
    }
}


// Создание footer
const $f18e8f54640f0230$export$adb608be33961c98 = document.createElement("footer");
$f18e8f54640f0230$export$adb608be33961c98.className = "footer";
// Создание контейнера
const $f18e8f54640f0230$var$container = document.createElement("div");
$f18e8f54640f0230$var$container.className = "container";
// Создание навигации
const $f18e8f54640f0230$var$navigation = document.createElement("nav");
$f18e8f54640f0230$var$navigation.className = "navigation-media-f";
// Создание списка для иконок социальных сетей
const $f18e8f54640f0230$var$list = document.createElement("ul");
$f18e8f54640f0230$var$list.className = "list-media-f";
// Создание массива с данными для социальных сетей
const $f18e8f54640f0230$var$socialLinks = [
    {
        class: "facebook",
        href: "https://www.facebook.com/",
        title: "Facebook",
        icon: "fa-brands fa-facebook"
    },
    {
        class: "x",
        href: "https://x.com/?lang=ru",
        title: "X",
        icon: "fa-brands fa-x-twitter"
    },
    {
        class: "google",
        href: "https://www.google.by/",
        title: "Google",
        icon: "fa-brands fa-google"
    },
    {
        class: "pinterest",
        href: "https://ru.pinterest.com/",
        title: "Pinterest",
        icon: "fa-brands fa-pinterest"
    },
    {
        class: "instagram",
        href: "https://www.instagram.com/",
        title: "Instagram",
        icon: "fa-brands fa-instagram"
    },
    {
        class: "stumbleupon",
        href: "https://www.stumbleupon.com/",
        title: "Stumbleupon",
        icon: "fa-brands fa-stumbleupon"
    },
    {
        class: "rss",
        href: "https://rss.com/",
        title: "RSS",
        icon: "fa-solid fa-rss"
    }
];
// Создание элементов списка для каждой социальной сети
$f18e8f54640f0230$var$socialLinks.forEach((link)=>{
    const listItem = document.createElement("li");
    listItem.className = `item-foot ${link.class}`;
    listItem.style.setProperty("", link.color);
    const anchor = document.createElement("a");
    anchor.href = link.href;
    anchor.title = link.title;
    anchor.target = "_blank";
    const icon = document.createElement("i");
    icon.className = `${link.icon} item-faf item-${link.class}`;
    anchor.appendChild(icon);
    listItem.appendChild(anchor);
    $f18e8f54640f0230$var$list.appendChild(listItem);
});
// Добавляем список в навигацию
$f18e8f54640f0230$var$navigation.appendChild($f18e8f54640f0230$var$list);
// Создание текста в footer
const $f18e8f54640f0230$var$footerTextDiv = document.createElement("div");
$f18e8f54640f0230$var$footerTextDiv.className = "footer-text";
const $f18e8f54640f0230$var$footerText = document.createElement("p");
$f18e8f54640f0230$var$footerText.className = "footer-text_color";
$f18e8f54640f0230$var$footerText.innerHTML = "2024 Collaboration: Polina, Ilya, Sergey";
$f18e8f54640f0230$var$footerTextDiv.appendChild($f18e8f54640f0230$var$footerText);
// Добавляем все элементы в контейнер
$f18e8f54640f0230$var$container.appendChild($f18e8f54640f0230$var$navigation);
$f18e8f54640f0230$var$container.appendChild($f18e8f54640f0230$var$footerTextDiv);
// Добавляем контейнер в footer
$f18e8f54640f0230$export$adb608be33961c98.appendChild($f18e8f54640f0230$var$container);
// Добавляем footer на страницу
document.body.appendChild($f18e8f54640f0230$export$adb608be33961c98);




//# sourceMappingURL=app.js.map
