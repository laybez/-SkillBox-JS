document.addEventListener("DOMContentLoaded", () => {
    const itemList = document.getElementById('itemList');
    const addButton = document.getElementById('addButton');
    const removeButton = document.getElementById('removeButton');

    // Функция для добавления элемента списка
    addButton.addEventListener('click', () => {
        const newItem = document.createElement('li');
        newItem.textContent = 'Новый элемент списка';
        itemList.appendChild(newItem);
    });

    // Функция для удаления последнего элемента списка
    removeButton.addEventListener('click', () => {
        const lastItem = itemList.lastElementChild;
        if (lastItem) {
            itemList.removeChild(lastItem);
        } else {
            alert('Список уже пуст!');
        }
    });
});