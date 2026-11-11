// ========================================
// ЗАДАЧА 1 — УВЕДОМЛЕНИЯ
// Метод forEach()
// ========================================

// Создай функцию printNotifications(messages).
//
// Для каждого сообщения выведи в консоль:
//
// "Уведомление: ТЕКСТ"
//
// Пример:
// ['Привет', 'Новый заказ', 'Оплата получена']
//
// Ожидаемый вывод:
// Уведомление: Привет
// Уведомление: Новый заказ
// Уведомление: Оплата получена
//
// Если массив пустой, ничего не выводи.

const messages = [
  'Привет',
  'Новый заказ',
  'Оплата получена'
];

const printNotifications = messages => {
    messages.forEach(message => console.log(`Уведомление: ${message}`))};

console.log('Задача 1:');
printNotifications(messages);


// ========================================
// ЗАДАЧА 2 — ПРЕОБРАЗОВАНИЕ ТЕМПЕРАТУР
// Метод map()
// ========================================

// Создай функцию convertToFahrenheit(temperatures).
//
// Функция получает массив температур
// в градусах Цельсия.
//
// Верни новый массив температур
// в градусах Фаренгейта.
//
// Формула:
// F = C * 1.8 + 32
//
// Пример:
// [0, 10, 20, 30]
//
// Ожидаемый результат:
// [32, 50, 68, 86]
//
// Исходный массив не изменяй.

const temperatures = [0, 10, 20, 30];

const convertToFahrenheit = temperatures => temperatures.map(temperature => temperature * 1.8 + 32);

console.log('Задача 2:', convertToFahrenheit(temperatures));


// ========================================
// ЗАДАЧА 3 — ДОРОГИЕ ТОВАРЫ
// Метод filter()
// ========================================

// Создай функцию getExpensiveProducts(products, minPrice).
//
// Функция должна вернуть новый массив
// товаров, цена которых строго больше minPrice.
//
// Пример:
// minPrice = 1000
//
// Ожидаемый результат:
// [
//   { name: 'Monitor', price: 8000 },
//   { name: 'Keyboard', price: 1500 }
// ]
//
// Если подходящих товаров нет, верни [].

const shopProducts = [
  { name: 'Mouse', price: 700 },
  { name: 'Monitor', price: 8000 },
  { name: 'Keyboard', price: 1500 },
  { name: 'Cable', price: 200 }
];

const getExpensiveProducts = (products, minPrice) => products.filter(product => product.price > minPrice);

console.log('Задача 3:', getExpensiveProducts(shopProducts, 1000));


// ========================================
// ЗАДАЧА 4 — ПОИСК СТУДЕНТА
// Метод find()
// ========================================

// Создай функцию findStudent(students, id).
//
// Функция должна найти студента по id.
//
// Если студент найден, верни его объект.
// Если не найден, верни null.
//
// Пример:
// id = 2
//
// Ожидаемый результат:
// { id: 2, name: 'Anna', grade: 95 }
//
// id = 10
// Результат: null

const students = [
  { id: 1, name: 'Alex', grade: 80 },
  { id: 2, name: 'Anna', grade: 95 },
  { id: 3, name: 'Max', grade: 70 }
];

const findStudent = (students, id) => students.find(student => student.id === id) ?? null;

console.log('Задача 4:', findStudent(students, 2));
console.log('Задача 4:', findStudent(students, 10));


// ========================================
// ЗАДАЧА 5 — ПРОВЕРКА СОТРУДНИКОВ
// Методы every() и some()
// ========================================

// Создай функцию checkEmployees(employees).
//
// Функция должна вернуть объект:
//
// {
//   allActive: true или false,
//   hasManager: true или false
// }
//
// allActive:
// true, если ВСЕ сотрудники активны.
//
// hasManager:
// true, если ХОТЯ БЫ ОДИН сотрудник
// имеет role: 'manager'.
//
// Ожидаемый результат:
//
// {
//   allActive: false,
//   hasManager: true
// }

const employees = [
  { name: 'Alex', role: 'developer', active: true },
  { name: 'Maria', role: 'manager', active: true },
  { name: 'John', role: 'designer', active: false }
];

const checkEmployees = employees => {
    const newObject = {
        allActive: '',
        hasManager: ''
    };
    newObject.allActive = employees.every(employee => employee.active === true);
    newObject.hasManager = employees.some(employee => employee.role === 'manager');
    return newObject;

};

console.log('Задача 5:', checkEmployees(employees));


// ========================================
// ЗАДАЧА 6 — ОБЩЕЕ ВРЕМЯ ТРЕНИРОВОК
// Метод reduce()
// ========================================

// Создай функцию calculateWorkoutTime(workouts).
//
// Функция должна вернуть общую
// продолжительность всех тренировок.
//
// Пример:
// 30 + 45 + 20 + 60
//
// Ожидаемый результат: 155
//
// Если массив пустой, верни 0.

const workouts = [
  { type: 'Running', minutes: 30 },
  { type: 'Swimming', minutes: 45 },
  { type: 'Yoga', minutes: 20 },
  { type: 'Gym', minutes: 60 }
];

const calculateWorkoutTime = workouts => {
   const howLong = workouts.reduce((acc, workout) => {
        return acc + workout.minutes
    },
        0);
    return howLong;
};

console.log('Задача 6:', calculateWorkoutTime(workouts));
console.log('Задача 6:', calculateWorkoutTime([]));


// ========================================
// ЗАДАЧА 7 — СОРТИРОВКА ИГРОКОВ
// Метод toSorted()
// ========================================

// Создай функцию sortPlayersByScore(players).
//
// Функция должна вернуть НОВЫЙ массив,
// отсортированный по score от большего
// к меньшему.
//
// Исходный массив изменять нельзя.
//
// Ожидаемый порядок:
// Max — 250
// Anna — 180
// Alex — 120
// John — 90

const players = [
  { name: 'Alex', score: 120 },
  { name: 'Max', score: 250 },
  { name: 'John', score: 90 },
  { name: 'Anna', score: 180 }
];

const sortPlayersByScore = players => players.toSorted((a, b) => b.score - a.score); 

console.log('Задача 7:', sortPlayersByScore(players));


// ========================================
// ЗАДАЧА 8 — EMAIL ПОДПИСЧИКОВ
// Методы filter() и map()
// ========================================

// Создай функцию getSubscriberEmails(users).
//
// Функция должна:
//
// 1. Оставить только пользователей,
//    у которых subscribed === true.
//
// 2. Вернуть новый массив их email.
//
// Пример результата:
// ['alex@mail.com', 'anna@mail.com']
//
// Исходный массив изменять нельзя.

const subscribers = [
  { name: 'Alex', email: 'alex@mail.com', subscribed: true },
  { name: 'Max', email: 'max@mail.com', subscribed: false },
  { name: 'Anna', email: 'anna@mail.com', subscribed: true },
  { name: 'John', email: 'john@mail.com', subscribed: false }
];

const getSubscriberEmails = users => users.filter(user => user.subscribed === true).map(user => user.email);

console.log('Задача 8:', getSubscriberEmails(subscribers));


// ========================================
// ЗАДАЧА 9 — СУММА ПОКУПОК КЛИЕНТА
// Методы filter() и reduce()
// ========================================

// Создай функцию getCustomerTotal(orders, customerName).
//
// Функция должна:
//
// 1. Найти все заказы указанного клиента.
//
// 2. Посчитать сумму значений total
//    только у заказов этого клиента.
//
// 3. Вернуть полученную сумму.
//
// Пример:
//
// getCustomerTotal(orders, 'Alex')
// Результат: 3500
//
// getCustomerTotal(orders, 'Maria')
// Результат: 1500
//
// getCustomerTotal(orders, 'Peter')
// Результат: 0

const customerOrders = [
  { customer: 'Alex', total: 2000 },
  { customer: 'Maria', total: 1500 },
  { customer: 'Alex', total: 1000 },
  { customer: 'John', total: 3000 },
  { customer: 'Alex', total: 500 }
];

const getCustomerTotal = (orders, customerName) => orders
    .filter(order => order.customer === customerName)
    .reduce((acc, customer) => acc + customer.total, 0); 

console.log('Задача 9:', getCustomerTotal(customerOrders, 'Alex'));
console.log('Задача 9:', getCustomerTotal(customerOrders, 'Maria'));
console.log('Задача 9:', getCustomerTotal(customerOrders, 'Peter'));


// ========================================
// ЗАДАЧА 10 — РЕЙТИНГ ФИЛЬМОВ
// Цепочка filter(), toSorted(), map()
// ========================================

// Создай функцию getTopMovies(movies).
//
// Функция должна одним цепочным выражением:
//
// 1. Оставить фильмы с rating >= 8.
//
// 2. Отсортировать их по рейтингу
//    от большего к меньшему.
//
// 3. Преобразовать каждый фильм
//    в строку формата:
//
//    "Название — рейтинг"
//
// Исходный массив изменять нельзя.
//
// Ожидаемый результат:
//
// [
//   'Inception — 8.8',
//   'Interstellar — 8.7',
//   'Gladiator — 8.5'
// ]

const movies = [
  { title: 'Avatar', rating: 7.9 },
  { title: 'Inception', rating: 8.8 },
  { title: 'Titanic', rating: 7.8 },
  { title: 'Interstellar', rating: 8.7 },
  { title: 'Gladiator', rating: 8.5 }
];

const getTopMovies = movies => movies
    .filter(movie => movie.rating >= 8)
    .toSorted((a, b) => b.rating - a.rating)
    .map(movie => `${movie.title} - ${movie.rating}`);

console.log('Задача 10:', getTopMovies(movies));