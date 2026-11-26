/**
 * Знайди `.js-status`, зміни текст на "Замовлення доставлено" та додай клас
 * `is-complete`.
 * Перевірка: початковий текст змінюється; клас додається; інші елементи не змінюються.
 */

// Напиши код нижче.

const futureText = document.querySelector('.js-status');
futureText.textContent = 'Замовлення доставлено';
futureText.classList.add('is-complete')
console.log(futureText);
