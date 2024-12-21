// Объект с автомобилями
const cars = {
    "Toyota Camry": {
        name: "Toyota Camry",
        wheels: 4,
        doors: 4,
        isStarted: false,
        hp: 268
    },
    "Ford Mustang": {
        name: "Ford Mustang",
        wheels: 4,
        doors: 2,
        isStarted: false,
        hp: 450
    },
    "Honda Civic": {
        name: "Honda Civic",
        wheels: 4,
        doors: 4,
        isStarted: false,
        hp: 158
    },
    "Chevrolet Corvette": {
        name: "Chevrolet Corvette",
        wheels: 4,
        doors: 2,
        isStarted: false,
        hp: 490
    },
    "Nissan Altima": {
        name: "Nissan Altima",
        wheels: 4,
        doors: 4,
        isStarted: false,
        hp: 248
    }
};

// Функция для поиска автомобиля по марке
const getCar = (carName) => {
    // Проверяем, есть ли такая марка автомобиля в объекте cars
    if (cars[carName]) {
        return cars[carName]; // Возвращаем объект автомобиля
    } else {
        console.log("Автомобиль не найден."); // Сообщение об ошибке
        return null; // Возвращаем null, если автомобиль не найден
    }
};

// Примеры работы функции
console.log(getCar("Toyota Camry")); // Найденный автомобиль
console.log(getCar("Mercedes-Benz")); // Автомобиль не найден