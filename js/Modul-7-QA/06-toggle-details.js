/**
 * Задача 6. Деталі доставки
 *
 * Після натискання кнопки `.js-toggle` перемикай відображення елемента
 * `.js-details` і текст кнопки між «Показати деталі» та «Сховати деталі».
 *
 * Перевірка: спочатку елемент `.js-details` прихований (`display: none`).
 * Після першого натискання він відображається, а після повторного — знову приховується.
 */

const toggleEl = document.querySelector(".js-toggle");
const detailsEl = document.querySelector(".js-details");
// Додай обробник.

toggleEl.addEventListener('click', () => {
    if (detailsEl.style.display === 'none') {
        detailsEl.style.display = 'block'
        toggleEl.textContent = 'Сховати деталі';
    } else if (detailsEl.style.display === 'block') {
        detailsEl.style.display = 'none' 
        toggleEl.textContent = 'Показати деталі'
    }
})