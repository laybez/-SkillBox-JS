// Массив массивов пользователей
const users = [
    ["Alice", 25, true],
    ["Bob", 30, false],
    ["Charlie", 22, true],
    ["David", 27, true],
    ["Eve", 20, false]
];

// Функция для фильтрации и сортировки пользователей
const filterAndSortUsers = (users) => {
    return users
        // Фильтруем пользователей: возраст больше 25 и занимаются спортом
        .filter(user => user[1] > 25 && user[2])
        // Сортируем по возрастанию возраста (user[1])
        .sort((a, b) => a[1] - b[1])
        // Возвращаем только имена пользователей (user[0])
        .map(user => user[0]);
};

// Пример использования функции
const sportUsersOver25 = filterAndSortUsers(users);
console.log(sportUsersOver25); // Выведет ["David"]