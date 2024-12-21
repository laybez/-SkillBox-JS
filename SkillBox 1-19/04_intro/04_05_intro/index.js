// Функция для расчета итоговой стоимости со скидкой
const totalSum = (price, quantity, discount) => {
    const totalPrice = price * quantity; // Общая стоимость без скидки
    const discountAmount = (totalPrice * discount) / 100; // Сумма скидки
    return totalPrice - discountAmount; // Итоговая стоимость с учетом скидки
};

// Пример использования функции
const priceItem = 25000; // Цена товара
const amountItem = 3;    // Количество товара
const discountItem = 20; // Процент скидки

const finalPrice = totalSum(priceItem, amountItem, discountItem);
console.log(finalPrice); // Вывод: 60000