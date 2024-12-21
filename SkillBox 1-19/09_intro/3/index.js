// Создаем функцию для создания автомобиля
const createCar = (additionalProperties) => {
    // Основной объект автомобиля
    const car = {
        wheels: 4,
        doors: 4,
        isStarted: false,
    };

    // Объединяем основной объект с дополнительными свойствами
    const newCar = Object.assign({}, car, additionalProperties);
    
    // Возвращаем новый объект
    return newCar;
};

// Пример использования функции
console.log(createCar({ name: 'Haval', hp: 198 }));