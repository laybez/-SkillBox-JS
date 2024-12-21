import { storage } from './storage.js';

export const inventory = {
    render() {
        const items = storage.getItems();
        const table = document.createElement('table');
        const headerRow = document.createElement('tr');
        
        ['Название', 'Полка', 'Вес', 'Время хранения', 'Действия'].forEach(text => {
            const th = document.createElement('th');
            th.textContent = text;
            th.addEventListener('click', () => this.sortByColumn(text));
            headerRow.appendChild(th);
        });
        
        table.appendChild(headerRow);
        
        items.forEach((item, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.shelf}</td>
                <td>${item.weight}</td>
                <td>${item.storageTime}</td>
                <td><button data-index="${index}">Удалить</button></td>
            `;
            row.querySelector('button').addEventListener('click', (e) => {
                const index = e.target.dataset.index;
                storage.deleteItem(index);
                this.render(); // Обновляем таблицу
            });
            table.appendChild(row);
        });
        
        return table;
    },
    sortByColumn(column) {
        const items = storage.getItems();
        const keyMap = {
            'Название': 'name',
            'Полка': 'shelf',
            'Вес': 'weight',
            'Время хранения': 'storageTime'
        };
        
        items.sort((a, b) => a[keyMap[column]] > b[keyMap[column]] ? 1 : -1);
        storage.saveItems(items);
        this.render(); // Обновляем таблицу
    }
};