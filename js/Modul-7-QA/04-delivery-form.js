const formEl = document.querySelector(".js-delivery-form");
const summaryEl = document.querySelector(".js-summary");

/**
 * На submit скасуй перезавантаження
 * отримай дані з полів `name` і `city`
 * створи об'єкт із властивостями `name` і `city`
 * в `.js-summary` використовуючи дані з обʼєкту, покажи "Одержувач: <name>, місто: <city>".
 * Перевірка: "Оля" + "Київ" → відповідний текст; інше місто працює; сторінка не перезавантажується.
 */

formEl.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const obj = {
        name: formData.get('name'),
        city: formData.get('city')
    }

    summaryEl.textContent = `Одержувач: ${obj.name}, місто: ${obj.city}`;

    formEl.reset();

})






