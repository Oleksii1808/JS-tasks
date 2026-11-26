/**
 * Після кожного кліку на `.js-cart` збільшуй число всередині `span` на один.
 * Перевірка: 1 клік → 1; 2 кліки → 2; без кліків → 0.
 */

// Додай слухач і обробник події.

const btn = document.querySelector('.js-cart');
const visibleNumber = document.querySelector('span');
let count = 0; 
btn.addEventListener('click', () => {
    count = count + 1;
    visibleNumber.textContent = count;
})