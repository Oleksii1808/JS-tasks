/** Задача 8. Список товарів.
 *
 * Перетвори кожен товар із масиву `items` на HTML-розмітку елемента `<li>`
 * з назвою та ціною у форматі «Назва — N грн».
 * Об’єднай розмітку всіх товарів і додай її в кінець контейнера `.js-products` за
 * допомогою методу insertAdjacentHTML.
 *
 * Перевірка: у контейнері відображаються три товари, нові товари в кінці списку.
 */

// Створи й додай колекцію.

const items = [
  { name: "Кава", price: 240 },
  { name: "Чай", price: 160 },
];
const productsEl = document.querySelector(".js-products");

const productsArr = items.map((item) => {
  return `<li>${item.name} — ${item.price} грн</li>`
})

productsEl.insertAdjacentHTML('beforeend', productsArr.join(''))




