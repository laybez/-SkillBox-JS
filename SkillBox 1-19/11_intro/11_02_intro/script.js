document.getElementById('deliveryForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    // Сброс сообщений об ошибках
    document.getElementById('productNameError').textContent = '';
    document.getElementById('productWeightError').textContent = '';
    document.getElementById('deliveryDistanceError').textContent = '';

    // Получаем значения из формы
    const productName = document.getElementById('productName').value.trim();
    const productWeight = parseFloat(document.getElementById('productWeight').value);
    const deliveryDistance = parseFloat(document.getElementById('deliveryDistance').value);

    // Валидация
    let valid = true;

    if (productName === '' || !/^[a-zA-Z0-9\s]+$/.test(productName)) {
        document.getElementById('productNameError').textContent = 'Введите корректное название товара.';
        valid = false;
    }

    if (productWeight <= 0) {
        document.getElementById('productWeightError').textContent = 'Вес товара должен быть положительным числом.';
        valid = false;
    }

    if (deliveryDistance <= 0) {
        document.getElementById('deliveryDistanceError').textContent = 'Расстояние доставки должно быть положительным числом.';
        valid = false;
    }

    if (valid) {
        // Рассчитываем стоимость доставки
        const deliveryCost = (productWeight * deliveryDistance) / 10;

        // Создаем новую строку для таблицы
        const productList = document.getElementById('productList');
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${productName}</td>
            <td>${productWeight.toFixed(1)}</td>
            <td>${deliveryDistance.toFixed(1)}</td>
            <td>${deliveryCost.toFixed(2)} ₽</td>
        `;
        productList.appendChild(newRow);

        // Очищаем форму
        document.getElementById('deliveryForm').reset();
    }
});