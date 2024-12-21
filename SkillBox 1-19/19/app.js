import { EditDelivery } from './EditDelivery.js';

const deliveryArr = [
    new EditDelivery("Ольга", "ул. Вымыслов, д. 12", 8, "delivery"),
    new EditDelivery("Дмитрий", "ул. Задачная, д. 7", 3, "delivered"),
    new EditDelivery("Оля", "ул. Ткачей, д. 43", 11, "canceled")
];

const deliveryList = document.getElementById('deliveryList');

// Функция для отображения всех доставок
function displayDeliveries() {
    deliveryArr.forEach(delivery => {
        const card = delivery.createCard();
        deliveryList.appendChild(card);
    });
}

// Первоначальное отображение доставок
displayDeliveries();
