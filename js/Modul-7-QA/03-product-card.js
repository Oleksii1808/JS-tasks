
const product = { name: "Навушники", price: 2400, available: true };

/**
 * Створи `article` із класом `product-card` та додай в середину нього:
 * заголовок (h2) з назвою
 * абзац (p) із текстом "2400 грн".
 * абзац (p) і додай в нього текст "В наявності" якщо available: true, в іншому випадку "Товар відсутній"
 * Додай `article` у `.js-products`.
 *
 * Перевірка: картка має 3 дочірні елементи; ціна має "грн", наявність відповідає available;
 */

const products = document.querySelector('.js-products');
const article = document.createElement('article');
products.append(article);
article.classList.add('product-card');
article.innerHTML = `<h2>${product.name}</h2><p>${product.price} грн</p>`

const checkAvailability = () => {
    if (product.available == true) {
        return 'В наявності'
    } else {
        return "Товар відсутній"
    }
}

const availability = document.createElement('p');
availability.textContent = checkAvailability();
article.append(availability);

console.log(products);

