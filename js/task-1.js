// ========================================
// ЗАДАЧА 1 — ФУНКЦИИ И АРГУМЕНТЫ
// ========================================

// Создай функцию multiply(a, b).
// Функция должна возвращать произведение двух чисел.
//
// Создай объект numbers со свойствами:
// first: 5
// second: 4
//
// Вызови multiply(), передав значения из объекта numbers.
//
// Ожидаемый результат: 20.

function multiply(a, b) {
    return a * b;
};

const number = {
    first: 5,
    second: 4
}

console.log(multiply(number.first, number.second));
 



// ========================================
// ЗАДАЧА 2 — СОЗДАНИЕ ОБЪЕКТА
// ========================================

// Создай функцию createUser(name, age).
//
// Функция должна возвращать объект со свойствами:
// name — имя пользователя
// age — возраст пользователя
// isAdult — true, если возраст 18 или больше,
// иначе false.
//
// Пример:
// createUser('Alex', 22)
//
// Ожидаемый результат:
// {
//   name: 'Alex',
//   age: 22,
//   isAdult: true
// }

function createUser(name, age) {
    const user = {
        name: name,
        age: age,
        isAdult: age >= 18
    }
    return user
}

console.log(createUser('Alex', 22));



// ========================================
// ЗАДАЧА 3 — МАССИВ ОБЪЕКТОВ
// ========================================

// Создай массив products:
//
// [
//   { name: 'Ноутбук', price: 30000 },
//   { name: 'Миша', price: 1200 },
//   { name: 'Навушники', price: 2500 }
// ]
//
// Создай функцию getProductNames(products).
//
// Функция должна возвращать массив
// с названиями всех товаров.
//
// Ожидаемый результат:
// ['Ноутбук', 'Миша', 'Навушники']

const products = [{ name: 'Ноутбук', price: 30000 }, { name: 'Миша', price: 1200 }, { name: 'Навушники', price: 2500 }];

function getProductNames(products) {
const nameProducts = [];
    for (const product of products) {
        nameProducts.push(product.name)
    }
    return nameProducts;
}

console.log(getProductNames(products));





// ========================================
// ЗАДАЧА 4 — ПОДСЧЁТ СУММЫ
// ========================================

// Создай массив items:
//
// [
//   { name: 'Миша', total: 1200 },
//   { name: 'Навушники', total: 5000 },
//   { name: 'Клавіатура', total: 2000 }
// ]
//
// Создай функцию calculateTotal(items).
//
// Функция должна возвращать сумму
// всех значений total.
//
// Ожидаемый результат: 8200

const items = [
    { name: 'Миша', total: 1200 },
    { name: 'Навушники', total: 5000 },
    { name: 'Клавіатура', total: 2000 }
];
function calculateTotal(items) {
    let total = 0;
    for (const item of items) {
        total += item.total;
    }
    return total;
}

console.log(calculateTotal(items));





// ========================================
// ЗАДАЧА 5 — ВЫЗОВ ФУНКЦИИ ВНУТРИ ФУНКЦИИ
// ========================================

// Создай функцию calculatePrice(price, quantity).
// Она должна возвращать общую стоимость товара.
//
// Создай объект product:
//
// {
//   name: 'Навушники',
//   price: 2500,
//   quantity: 3
// }
//
// Создай функцию getProductTotal(product).
//
// Внутри неё вызови calculatePrice(),
// передав данные из объекта product.
//
// Функция getProductTotal должна вернуть
// результат вычисления.
//
// Ожидаемый результат: 7500


function calculatePrice(price, quantity) {
    return price * quantity;
};

const product = {
        name: 'Навушники',
        price: 2500,
        quantity: 3
}

function getProductTotal(product) {
    return calculatePrice(product.price, product.quantity);
};

console.log(getProductTotal(product));




// ========================================
// ЗАДАЧА 6 — СОЗДАНИЕ ЗАКАЗА
// ========================================

// Создай массив requests:
//
// [
//   { name: 'Миша', quantity: 2, price: 1200 },
//   { name: 'Навушники', quantity: 1, price: 2500 }
// ]
//
// Создай функцию createSimpleOrder(requests).
//
// Функция должна:
//
// 1. Обработать все запросы из массива requests.
// 2. Для каждого запроса создать объект со свойствами:
//    name, quantity, total.
// 3. total каждой позиции должен содержать
//    стоимость заказанного количества товара.
// 4. Собрать все созданные позиции в массив items.
// 5. Посчитать общую стоимость заказа.
// 6. Вернуть объект со свойствами items и total.
//
// Ожидаемый результат:
//
// {
//   items: [
//     { name: 'Миша', quantity: 2, total: 2400 },
//     { name: 'Навушники', quantity: 1, total: 2500 }
//   ],
//   total: 4900
// }


const requests = [
    { name: 'Миша', quantity: 2, price: 1200 },
    { name: 'Навушники', quantity: 1, price: 2500 }];

function createSimpleOrder(requests) {
    const objectReady = {};
    const items = [];
    let total = 0;
    for (const request of requests) {
        const newObject = {
            name: request.name,
            quantity: request.quantity,
            total: request.price*request.quantity
        }
        items.push(newObject);
        total = total + request.price * request.quantity;
    }
    objectReady.items = items;
    objectReady.total = total;
    return objectReady;
}

console.log(createSimpleOrder(requests));

// ========================================
// ЗАДАЧА 7 — ПОИСК ТОВАРА
// ========================================

// Создай массив products:
//
// [
//   { name: 'Ноутбук', price: 30000, quantity: 3 },
//   { name: 'Миша', price: 1200, quantity: 0 },
//   { name: 'Навушники', price: 2500, quantity: 5 }
// ]
//
// Создай функцию findAvailableProduct(products, productName).
//
// Функция должна найти товар по названию.
//
// Если товар найден и его quantity больше 0,
// верни объект этого товара.
//
// Если товар не найден или его quantity равен 0,
// верни null.
//
// Примеры:
//
// findAvailableProduct(products, 'Ноутбук')
// Результат: { name: 'Ноутбук', price: 30000, quantity: 3 }
//
// findAvailableProduct(products, 'Миша')
// Результат: null
//
// findAvailableProduct(products, 'Телефон')
// Результат: null

const products7 = [
    { name: 'Ноутбук', price: 30000, quantity: 3 },
    { name: 'Миша', price: 1200, quantity: 0 },
    { name: 'Навушники', price: 2500, quantity: 5 }
];

function findAvailableProduct(products, productName) {
    for (const product of products) {
        if (productName.toLowerCase() === product.name.toLowerCase() && product.quantity > 0) {
            return product;
        } 
    }
    return null;
}
    
console.log(findAvailableProduct(products7, 'Ноутбук'));
console.log(findAvailableProduct(products7, 'Миша'));
console.log(findAvailableProduct(products7, 'Телефон'));


// ========================================
// ЗАДАЧА 8 — СКИДКА НА ТОВАР
// ========================================

// Создай функцию applyDiscount(product, discount).
//
// Функция получает объект товара и размер скидки
// в процентах.
//
// Она должна возвращать НОВЫЙ объект товара
// со всеми исходными свойствами,
// но с изменённой ценой.
//
// Исходный объект product изменяться не должен.
//
// Пример:
//
// const product = {
//   name: 'Ноутбук',
//   price: 30000,
//   quantity: 3
// };
//
// applyDiscount(product, 10)
//
// Ожидаемый результат:
//
// {
//   name: 'Ноутбук',
//   price: 27000,
//   quantity: 3
// }
//
// При этом product.price должен остаться 30000.

const product8 = {
  name: 'Ноутбук',
  price: 30000,
  quantity: 3
};

function applyDiscount(product, discount) {
    const objectWithDiscount = {
        name: product.name,
        price: product.price * (1 - discount / 100),
        quantity: product.quantity
}
return objectWithDiscount;
}

console.log(applyDiscount(product8, 10))




// ========================================
// ЗАДАЧА 9 — ОБРАБОТКА ЗАКАЗОВ
// ========================================

// Создай массив products:
//
// [
//   { name: 'Миша', price: 1200, quantity: 5 },
//   { name: 'Навушники', price: 2500, quantity: 3 },
//   { name: 'Клавіатура', price: 2000, quantity: 0 }
// ]
//
// Создай массив requests:
//
// [
//   { name: 'Миша', quantity: 2 },
//   { name: 'Навушники', quantity: 1 },
//   { name: 'Клавіатура', quantity: 1 },
//   { name: 'Телефон', quantity: 1 }
// ]
//
// Создай функцию createOrder(products, requests).
//
// Функция должна:
//
// 1. Перебрать все запросы из requests.
//
// 2. Найти соответствующий товар в products.
//
// 3. Проверить, существует ли товар.
//
// 4. Проверить, достаточно ли товара на складе.
//
// 5. Если товар существует и его достаточно,
//    добавить в заказ объект со свойствами:
//    name, quantity, total.
//
// 6. Уменьшить quantity товара на складе
//    на заказанное количество.
//
// 7. Если товар не существует или его недостаточно,
//    пропустить этот запрос.
//
// 8. Посчитать общую стоимость заказа.
//
// 9. Вернуть объект со свойствами items и total.
//
// Ожидаемый результат:
//
// {
//   items: [
//     { name: 'Миша', quantity: 2, total: 2400 },
//     { name: 'Навушники', quantity: 1, total: 2500 }
//   ],
//   total: 4900
// }
//
// После создания заказа остатки на складе:
//
// Миша: 3
// Навушники: 2
// Клавіатура: 0

const products9 = [
    { name: 'Миша', price: 1200, quantity: 5 },
    { name: 'Навушники', price: 2500, quantity: 3 },
    { name: 'Клавіатура', price: 2000, quantity: 0 }
];

const requests9 = [
    { name: 'Миша', quantity: 2 },
    { name: 'Навушники', quantity: 1 },
    { name: 'Клавіатура', quantity: 1 },
    { name: 'Телефон', quantity: 1 }
];

function createOrder(products, requests) {
    const orderArray = [];
    const finalObject = {};
    let total = 0;
    for (const request of requests) {
        for (const product of products) {
            if (product.name === request.name && request.quantity <= product.quantity) {
                const newOrder = {
                    name: request.name,
                    quantity: request.quantity,
                    total: request.quantity * product.price
                }
                total += newOrder.total;
                orderArray.push(newOrder);
                product.quantity -= request.quantity;
            }
        }
        finalObject.items = orderArray;
        finalObject.total = total;
    }
    return finalObject;
};

console.log(createOrder(products9, requests9));