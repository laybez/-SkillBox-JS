export class Delivery {
    constructor(customerName, address, distance) {
        this.customerName = customerName;
        this.address = address;
        this.distance = distance; // расстояние в км
    }

    createCard() {
        const card = document.createElement('div');
        card.classList.add('delivery-card');
        
        const nameElement = document.createElement('p');
        nameElement.textContent = 'Имя:';
        
        const nameValue = document.createElement('p');
        nameValue.textContent = `"${this.customerName}"`;
        nameValue.classList.add('value');

        const addressElement = document.createElement('p');
        addressElement.textContent = 'Адрес:';
        
        const addressValue = document.createElement('p');
        addressValue.textContent = `"${this.address}"`;
        addressValue.classList.add('value');

        const distanceElement = document.createElement('p');
        distanceElement.textContent = 'Расстояние:';
        
        const distanceValue = document.createElement('p');
        distanceValue.textContent = `"${this.distance} км"`;
        distanceValue.classList.add('value');

        card.appendChild(nameElement);
        card.appendChild(nameValue);
        card.appendChild(addressElement);
        card.appendChild(addressValue);
        card.appendChild(distanceElement);
        card.appendChild(distanceValue);

        return card;
    }
}