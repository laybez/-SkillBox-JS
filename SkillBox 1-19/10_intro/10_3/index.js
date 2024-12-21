document.addEventListener("DOMContentLoaded", () => {
    const priceList = document.getElementById('priceList');
    const sortAscButton = document.getElementById('sortAscButton');
    const sortDescButton = document.getElementById('sortDescButton');

    // Исходный массив с ценами
    let prices = [100, 500, 250, 750, 300];

    // Функция для отображения цен на странице
    function displayPrices() {
        priceList.innerHTML = ''; // Очищаем список перед обновлением
        prices.forEach(price => {
            const listItem = document.createElement('li');
            listItem.textContent = `$${price}`;
            priceList.appendChild(listItem);
        });
    }

    // Функция для сортировки массива цен по возрастанию
    function sortPricesAsc() {
        prices.sort((a, b) => a - b);
        displayPrices();
    }

    // Функция для сортировки массива цен по убыванию
    function sortPricesDesc() {
        prices.sort((a, b) => b - a);
        displayPrices();
    }

    // Обработчики событий для кнопок сортировки
    sortAscButton.addEventListener('click', sortPricesAsc);
    sortDescButton.addEventListener('click', sortPricesDesc);

    // Первоначальное отображение цен
    displayPrices();
});