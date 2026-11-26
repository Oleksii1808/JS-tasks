// Список у розмітці має відповідати даним у колекції orders.
// Після зміни колекції функція renderOrders повторно створює список.

let orders = [
  { id: 1, product: 'Навушники' },
  { id: 2, product: 'Клавіатура' },
  { id: 3, product: 'Миша' },
];

const ordersEl = document.querySelector('.js-orders');

/**
 * Створіть розмітку одного замовлення з назвою товару та кнопкою
 * «Видалити». Збережіть id замовлення в data-атрибуті кнопки.
 */
function createOrderMarkup(order) {
  const newElement = document.createElement('li');
  ordersEl.append(newElement);
  newElement.insertAdjacentHTML("afterbegin", 
  `<p>${order.product}</p>
  <button data-id="${order.id}">Видалити</button>`)
}
/**
 * Реалізуйте renderOrders. Функція отримує колекцію замовлень,
 * відтворює її у списку .js-orders і додає обробники до кнопок.
 */
function renderOrders(items) {
  ordersEl.innerHTML = '';
  for (const item of items) {
    createOrderMarkup(item)
  }
  const btn = document.querySelectorAll('button[data-id]');
    btn.forEach(button => {
      button.addEventListener('click', handleRemoveOrder)
    });
}

/**
 * Реалізуйте removeOrder. Функція отримує колекцію та id замовлення,
 * не змінює початковий масив і повертає нову колекцію без цього замовлення.
 */
function removeOrder(items, orderId) {
  const changedOrders = items.filter((item) => {
   return item.id !== orderId;
  })
  return changedOrders;
}


/**
 * Реалізуйте handleRemoveOrder. Отримайте id з кнопки, оновіть orders
 * результатом removeOrder та повторно відобразіть список.
 */
function handleRemoveOrder(event) {
  const btnId = Number(event.target.dataset.id);
  orders = removeOrder(orders, btnId);
  renderOrders(orders);
}



renderOrders(orders);
