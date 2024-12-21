// Функция для перевода градусов Цельсия в градусы Фаренгейта
function celsiusToFahrenheit(celsius) {
    return celsius * 1.8 + 32;
}

// Функция для перевода градусов Фаренгейта в градусы Цельсия
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) / 1.8;
}

// Вызов функций с различными значениями и вывод результатов в консоль
// Пример 1
const celsiusValue1 = 25;
const fahrenheitValue1 = celsiusToFahrenheit(celsiusValue1);
console.log(`${celsiusValue1}°C = ${fahrenheitValue1}°F`);  // Вывод: 25°C = 77°F

// Пример 2
const fahrenheitValue2 = 77;
const celsiusValue2 = fahrenheitToCelsius(fahrenheitValue2);
console.log(`${fahrenheitValue2}°F = ${celsiusValue2}°C`);  // Вывод: 77°F = 25°C

// Дополнительные вызовы функций
console.log(`0°C = ${celsiusToFahrenheit(0)}°F`);       // Вывод: 0°C = 32°F
console.log(`100°C = ${celsiusToFahrenheit(100)}°F`);   // Вывод: 100°C = 212°F
console.log(`32°F = ${fahrenheitToCelsius(32)}°C`);     // Вывод: 32°F = 0°C
console.log(`212°F = ${fahrenheitToCelsius(212)}°C`);   // Вывод: 212°F = 100°C