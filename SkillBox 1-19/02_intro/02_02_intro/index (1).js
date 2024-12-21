// Инициализация переменных для хранения суммы
let totalSum = 0;

// Ввод данных для товара 1
let product1 = prompt("Введите название товара 1:");
let price1 = parseFloat(prompt("Введите стоимость товара 1:")); // Преобразуем введённое значение в число
let count1 = parseInt(prompt("Введите количество товара 1:")); // Преобразуем введённое значение в целое число

// Расчёт стоимости товара 1 и вывод в консоль
let cost1 = price1 * count1;
console.log(product1, cost1);
totalSum += cost1; // Добавляем стоимость товара 1 к общей сумме

// Ввод данных для товара 2
let product2 = prompt("Введите название товара 2:");
let price2 = parseFloat(prompt("Введите стоимость товара 2:"));
let count2 = parseInt(prompt("Введите количество товара 2:"));

let cost2 = price2 * count2;
console.log(product2, cost2);
totalSum += cost2; // Добавляем стоимость товара 2 к общей сумме

// Ввод данных для товара 3
let product3 = prompt("Введите название товара 3:");
let price3 = parseFloat(prompt("Введите стоимость товара 3:"));
let count3 = parseInt(prompt("Введите количество товара 3:"));

let cost3 = price3 * count3;
console.log(product3, cost3);
totalSum += cost3; // Добавляем стоимость товара 3 к общей сумме

// Вывод общей суммы покупки в консоль
console.log("Сумма всей покупки:", totalSum);