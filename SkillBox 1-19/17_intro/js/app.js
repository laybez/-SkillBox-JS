import { inventory } from './inventory.js';
import { addItem } from './addItem.js';

const app = document.getElementById('app');

function renderPage() {
    const hash = window.location.hash;

    if (hash === '#/add') {
        app.innerHTML = ''; // Очищаем предыдущий контент
        app.appendChild(addItem.render());
    } else {
        app.innerHTML = ''; // Очищаем предыдущий контент
        app.appendChild(inventory.render());
        const addButton = document.createElement('button');
        addButton.textContent = 'Добавить запись';
        addButton.addEventListener('click', () => {
            window.location.hash = '#/add';
        });
        app.appendChild(addButton);
    }
}

window.addEventListener('hashchange', renderPage);
window.addEventListener('load', renderPage);