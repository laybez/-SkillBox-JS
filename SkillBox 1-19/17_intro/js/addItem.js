import { storage } from './storage.js';

export const addItem = {
    render() {
        const form = document.createElement('form');
        form.innerHTML = `
            <h1>Добавить запись</h1>
            <label>Название: <input type="text" name="name" required></label>
            <label>Полка: <input type="text" name="shelf" required></label>
            <label>Вес: <input type="number" name="weight" required></label>
            <label>Время хранения: <input type="text" name="storageTime" required></label>
            <button type="submit">Добавить</button>
        `;
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const item = {
                name: formData.get('name'),
                shelf: formData.get('shelf'),
                weight: formData.get('weight'),
                storageTime: formData.get('storageTime')
            };
            storage.addItem(item);
            window.location.hash = '#/inventory'; // Перенаправление на страницу списка
        });
        
        return form;
    }
};