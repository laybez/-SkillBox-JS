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

// Функция для вывода названий автомобилей
const printCarNames = () => {
    for (const car in cars) {
        if (cars.hasOwnProperty(car)) {
            console.log(car); // Выводим имя автомобиля
        }
    }
};

// Запускаем функцию для вывода названий автомобилей
printCarNames();