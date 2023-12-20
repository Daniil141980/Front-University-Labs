// Исходный массив товаров
let cartItems = [
  { name: "Item 1", quantity: 1, price: 10 },
  { name: "Item 2", quantity: 1, price: 15 },
  { name: "Item 3", quantity: 1, price: 20 },
  { name: "Item 4", quantity: 1, price: 25 },
];

// Функция для изменения одного из элементов массива
function changeItem() {
  const randomIndex = Math.floor(Math.random() * cartItems.length);
  cartItems[randomIndex] = { name: "New Item", quantity: 1, price: 10 };
  updateCart();
}

// Функция для очистки корзины
function clearCart() {
  if (cartItems.length > 0) {
    const randomIndex = Math.floor(Math.random() * cartItems.length);
    cartItems.splice(randomIndex, 1);
    updateCart();
  }
}

// Функция для увеличения количества и пересчета стоимости
function increaseQuantity(index) {
  cartItems[index].quantity++;
  cartItems[index].price = cartItems[index].quantity * 10; // Пример: стоимость за единицу товара - 10
  updateCart();
}

function addItem(){
  if (cartItems.length < 5){
    cartItems.push({name: "Added Item", quantity: 1, price: 10})
  }
  updateCart();
}
// Функция для уменьшения количества и пересчета стоимости
function decreaseQuantity(index) {
  if (cartItems[index].quantity > 1) {
    cartItems[index].quantity--;
    cartItems[index].price = cartItems[index].quantity * 10; // Пример: стоимость за единицу товара - 10
    updateCart();
  }
}

// Функция для фильтрации товаров в заданном диапазоне цен
function filterItems() {
  const filteredItems = cartItems.filter(
    (item) => item.price >= 10 && item.price <= 20
  );

  // Отображение результата в модальном окне
  const modal = document.getElementById("modal");
  modal.innerHTML = "<h2>Filtered Items</h2>";

  if (filteredItems.length === 0) {
    modal.innerHTML += "<p>No items found in the specified range.</p>";
  } else {
    filteredItems.forEach((item) => {
      modal.innerHTML += `<p>${item.name} - Quantity: ${item.quantity}, Price: $${item.price}</p>`;
    });
  }

  // Показать модальное окно и оверлей
  const overlay = document.getElementById("overlay");
  modal.style.display = "block";
  overlay.style.display = "block";

  // Закрытие модального окна при клике на оверлей
  overlay.onclick = function () {
    modal.style.display = "none";
    overlay.style.display = "none";
  };
}

// Функция для сортировки товаров в порядке возрастания цены
function sortAscending() {
  cartItems.sort((a, b) => a.price - b.price);
  updateCart();
}

// Функция для сортировки товаров в порядке убывания цены
function sortDescending() {
  cartItems.sort((a, b) => b.price - a.price);
  updateCart();
}

// Функция для обновления отображения корзины
function updateCart() {
  const cartContainer = document.getElementById("cart");
  cartContainer.innerHTML = "";

  if (cartItems.length === 0) {
    cartContainer.innerHTML = "<p>Cart is empty</p>";
  } else {
    cartItems.forEach((item, index) => {
      const itemElement = document.createElement("div");
      itemElement.className = "cart-item";

      const itemDetails = document.createElement("div");
      itemDetails.className = "item-details";

      const itemName = document.createElement("span");
      itemName.textContent = `${item.name} - Quantity: ${item.quantity}, Price: $${item.price}`;

      const increaseButton = document.createElement("button");
      increaseButton.textContent = "+";
      increaseButton.onclick = () => increaseQuantity(index);

      const decreaseButton = document.createElement("button");
      decreaseButton.textContent = "-";
      decreaseButton.onclick = () => decreaseQuantity(index);

      itemDetails.appendChild(itemName);
      itemElement.appendChild(itemDetails);
      itemElement.appendChild(increaseButton);
      itemElement.appendChild(decreaseButton);

      cartContainer.appendChild(itemElement);
    });
  }
}

// Инициализация отображения при загрузке страницы
updateCart();
