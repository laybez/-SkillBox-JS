// Глобальная переменная
let count = 3;

// Функция для увеличения count на 1 и вывода результата в консоль
const countPlusOne = () => {
    count += 1; // Увеличиваем count на 1
    console.log(count); // Выводим результат в консоль
};

// Вызовы функции
countPlusOne(); // Вывод: 4
countPlusOne(); // Вывод: 5