// Хранение состояния банкомата
let cardInATM = true; // Карта в банкомате
let availableBalance = 500; // Доступная сумма на карте

// Функция для выполнения банковской операции
function performTransaction(amount) {
    // Проверка условий
    if (cardInATM && amount <= availableBalance) {
        console.log("Операция выполняется");
    } else {
        console.log("Операция отклонена");
    }
}

// Пример ввода суммы операции
let inputAmount = 1000; // Сумма, введенная пользователем
performTransaction(inputAmount); // Вызов функции с введенной суммой