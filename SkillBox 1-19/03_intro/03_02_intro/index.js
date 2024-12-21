// Функция для расчета транспортного налога
function calculateTransportTax(power) {
    let taxRate;

    // Определение ставки налога в зависимости от мощности
    if (power < 100) {
        taxRate = 12;
    } else if (power >= 100 && power < 125) {
        taxRate = 25;
    } else if (power >= 125 && power < 150) {
        taxRate = 35;
    } else if (power >= 150 && power < 175) {
        taxRate = 45;
    } else if (power >= 175 && power < 200) {
        taxRate = 50;
    } else if (power >= 200 && power < 225) {
        taxRate = 65;
    } else if (power >= 225 && power < 250) {
        taxRate = 75;
    } else {
        taxRate = 150;
    }

    // Расчет налога
    const taxAmount = power * taxRate;

    // Вывод результата
    console.log(`Сумма налога: ${taxAmount}`);
}

// Пример ввода мощности автомобиля
const inputPower = 110; // Замените это значение для тестирования
calculateTransportTax(inputPower);