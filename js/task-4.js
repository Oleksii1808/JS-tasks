'use strict';

// ЗАДАЧА 1

/**
 * Викличте функцію та перегляньте значення this у консолі.
 * Порівняйте його зі значенням this у коді поза функцією.
 */
function showContext() {
  console.log('this у функції:', this);
}

console.log('this у модулі:', this);
showContext();

// ЗАДАЧА 2

const cart = {
  items: [
    { name: 'Навушники', price: 1200 },
    { name: 'Чохол', price: 350 },
    { name: 'Кабель', price: 180 },
  ],

  /**
   * Доповніть метод getTotal так, щоб він повертав суму цін усіх товарів.
   * Для доступу до масиву товарів використайте this.
   */
    getTotal() {
        let total = 0;
        for (const item of this.items) {
            total += item.price;
        }
        return total;
  },
};

console.log(cart.getTotal()); // 1730


// ЗАДАЧА 3

const user = {
  name: 'Олена',

  /**
   * Доповніть createGreeting. Метод має повертати стрілкову функцію,
   * яка повертає рядок "Привіт, Олена!". Використайте this.name.
   */
    createGreeting() {
        const addFunc = () => `Привіт, ${this.name}`;
        return addFunc;
    }
};


const greetUser = user.createGreeting();
console.log(greetUser()); // "Привіт, Олена!"

// ЗАДАЧА 4

const settings = {
  language: 'uk',
  theme: 'dark',
};

/**
 * Створіть функцію getOwnPropertyNames, яка повертає масив назв
 * лише власних властивостей переданого об'єкта.
 */
function getOwnPropertyNames(object) {
    return Object.keys(object);
}

console.log(getOwnPropertyNames(settings)); // ['language', 'theme']
console.log(getOwnPropertyNames([])); // []

// ЗАДАЧА 5


// Object.create створює об'єкт, який успадковує властивості іншого об'єкта.

const vehicle = {
  category: 'Транспорт',
  getCategory() {
    return this.category;
  },
};

/**
 * Створіть об'єкт electricScooter на основі vehicle.
 * Додайте йому власну властивість model зі значенням 'Volt X2'.
 * Не копіюйте метод getCategory — він має бути знайдений у прототипі.
 */
const electricScooter = Object.create(vehicle);
electricScooter.model = 'Volt X2';

console.log(electricScooter.model); // 'Volt X2'
console.log(electricScooter.getCategory()); // 'Транспорт'
console.log(Object.hasOwn(electricScooter, 'getCategory')); // false

// ЗАДАЧА 6

// Клас описує шаблон, за яким можна створювати однотипні об'єкти.

/**
 * Створіть клас Book. Його конструктор отримує об'єкт з title та author
 * і зберігає ці значення у властивостях екземпляра.
 */
class Book {
    constructor(params) {
        this.title = params.title;
        this.author = params.author;
    }
}

const book = new Book({ title: 'Місто', author: 'Валер’ян Підмогильний' });
console.log(book.title); // 'Місто'
console.log(book.author); // 'Валер’ян Підмогильний'

// ЗАДАЧА 7

/**
 * Створіть клас Counter.
 * Конструктор отримує початкове значення value.
 * Метод increment збільшує value на 1, decrement зменшує на 1,
 * а getValue повертає поточне значення.
 */
class Counter {
    constructor(value) { 
        this.value = value;
    }

    increment() {
    this.value = this.value + 1;  
    }

    decrement() {
    this.value = this.value - 1;
    }

    getValue() {
    return this.value;   
    }
    }
;

const counter = new Counter(5);


counter.increment();
console.log(counter.getValue()); // 6

counter.decrement();
console.log(counter.getValue()); // 5

// ЗАДАЧА 8

/**
 * Створіть клас Vault з приватною властивістю #pin.
 * Конструктор отримує pin. Метод checkPin повертає true, якщо переданий
 * код збігається зі збереженим. Метод changePin змінює код лише тоді,
 * коли поточний код правильний і новий код містить рівно 4 символи.
 */
class Vault {
    #pin 
    constructor(pin) {
        this.#pin = pin;
    }
    
    checkPin(pinToCheck) {
        return pinToCheck === this.#pin;
    }

    changePin(activePin, pinToChange) {
        if (this.checkPin(activePin) === true && pinToChange.length === 4) {
            this.#pin = pinToChange;
            return true;
        } 
    return false
    }
}

const vault = new Vault('4826');
console.log(vault.checkPin('4826')); // true
console.log(vault.changePin('4826', '1111')); // true
console.log(vault.checkPin('1111')); // true

// ЗАДАЧА 9

// extends створює клас-нащадок, а super викликає конструктор батьківського класу.

class User {
  constructor(name) {
    this.name = name;
  }

  getInfo() {
    return `Користувач: ${this.name}`;
  }
}

/**
 * Створіть клас PremiumUser, який успадковується від User.
 * Конструктор отримує name і plan, а getInfo повертає рядок
 * "Користувач: Ім'я, план: План".
 */
class PremiumUser extends User {
    constructor(name, plan) {
        super(name);
        this.plan = plan;
    }
    
    getInfo(){
            return `Користувач: ${this.name}, план: ${this.plan}`
        }
}

const userTask9 = new PremiumUser('Марія', 'Pro');
console.log(userTask9.getInfo()); // "Користувач: Марія, план: Pro"


// ЗАДАЧА 10

class Course {
  constructor(title, lessons) {
    this.title = title;
    this.lessons = lessons;
  }

  getInfo() {
    return `${this.title}: ${this.lessons} уроків`;
  }
}

/**
 * Створіть клас OnlineCourse, який успадковується від Course.
 * Конструктор отримує title, lessons і platform.
 * Додайте метод start, який повертає рядок
 * "Курс Назва запущено на Platform".
 * Перевизначте getInfo, щоб додати до базової інформації платформу.
 */
class OnlineCourse extends Course {
    constructor(title, lessons, platform) {
        super(title, lessons);
        this.platform = platform;
    }
    
    start() {
        return `Курс ${this.title} запущено на ${this.platform}`
    }
    
    getInfo() {
    return `${this.title}: ${this.lessons} уроків, платформа: ${this.platform}`;
  }
    
}

const course = new OnlineCourse('JavaScript', 12, 'Meet');
console.log(course.getInfo()); // 'JavaScript: 12 уроків, платформа: Meet'
console.log(course.start()); // 'Курс JavaScript запущено на Meet'