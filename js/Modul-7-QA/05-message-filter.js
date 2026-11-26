const messages = [
  "Ваше замовлення готове",
  "Нове повідомлення",
  "Замовлення доставлено",
];
const searchEl = document.querySelector(".js-search");
const messagesEl = document.querySelector(".js-messages");

/**
 * Фільтрація повідомлень
 *
 * Спочатку додай усі повідомлення з масиву `messages` до списку `.js-messages`.
 * Додай обробник події `input` для елемента `.js-search`.
 *
 * В обробнику залишай лише ті повідомлення, що містять пошуковий запит,
 * ігноруючи регістр літер. Якщо запит порожній, знову показуй усі повідомлення.
 *
 * Перевірка: пункти списку мають фільтруватися за запитом без урахування регістру.
 */

console.log(messagesEl);

const creation = (items) => {
 messagesEl.innerHTML = '';

  for (const message of items) {
    const newElement = document.createElement('li');
    newElement.textContent = message;
    messagesEl.append(newElement);
  }
}

creation(messages);


searchEl.addEventListener('input', event => {
  const searchedEL = event.target.value.toLowerCase();

  const filteredMessages = messages.filter((message) => {
    return message.toLowerCase().includes(searchedEL);
  })
  creation(filteredMessages);
})







