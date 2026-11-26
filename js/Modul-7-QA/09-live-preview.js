/** Задача 9. Живий перегляд.
 *
 * Під час введення тексту в поле `.js-preview-input` оновлюй вміст
 * параграфа `.js-preview`.
 * Якщо поле порожнє або містить лише пробіли, показуй
 * «Тут зʼявиться текст».
 *
 * Перевірка:
 * «Привіт» → «Привіт»;
 * очищене поле або лише пробіли → «Тут зʼявиться текст».
 */

const previewInputEl = document.querySelector(".js-preview-input");
const previewEl = document.querySelector(".js-preview");
// Додай input-обробник.

previewInputEl.addEventListener('input', (event) => {
    if (event.target.value.trim() !== '') {
        previewEl.textContent = event.target.value;
    } else {
        previewEl.textContent = 'Тут зʼявиться текст'
    }
})