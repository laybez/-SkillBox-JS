import { Delivery } from './Delivery.js';

export class EditDelivery extends Delivery {
    constructor(customerName, address, distance, status) {
        super(customerName, address, distance);
        this.status = status; // статус доставки
    }

    createCard() {
        const card = super.createCard();

        // Добавление статуса
        const statusElement = document.createElement('p');
        statusElement.textContent = 'Статус:';
        
        const statusValue = document.createElement('p');
        statusValue.textContent = `"${this.status}"`;
        statusValue.classList.add('value');

        card.appendChild(statusElement);
        card.appendChild(statusValue);

        // Изменение внешнего вида карточки в зависимости от статуса
        this.updateCardStyle(card);

        // Кнопка редактирования
        const editButton = document.createElement('button');
        editButton.textContent = 'Изменить';
        editButton.addEventListener('click', () => this.editDelivery());
        card.appendChild(editButton);

        return card;
    }

    updateCardStyle(card) {
        switch (this.status) {
            case 'delivery':
                card.style.borderColor = 'orange';
                break;
            case 'delivered':
                card.style.borderColor = 'green';
                break;
            case 'canceled':
                card.style.borderColor = 'red';
                break;
            default:
                card.style.borderColor = 'gray';
        }
    }

    editDelivery() {
        const name = prompt("Имя:", this.customerName);
        const address = prompt("Адрес:", this.address);
        const distance = prompt("Расстояние (км):", this.distance);
        const status = prompt("Статус (delivery, delivered, canceled):", this.status);
        
        if (name) this.customerName = name;
        if (address) this.address = address;
        if (distance) this.distance = distance;
        if (status) this.status = status;

        // Обновляем карточку
        this.updateCard();
    }

    updateCard() {
        const card = document.querySelector(`.delivery-card:contains("${this.customerName}")`);
        if (card) {
            card.innerHTML = ''; // Очищаем текущие элементы
            const newCard = this.createCard();
            card.replaceWith(newCard); // Заменяем старую карточку на новую
        }
    }
}