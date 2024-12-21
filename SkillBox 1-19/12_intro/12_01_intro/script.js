const giftArr = [
    {
        title: "Скидка 20% на первую покупку в нашем магазине!",
        icon: "/img/discount.svg"
    },
    {
        title: "Скидка 10% на всё!",
        icon: "/img/discount_2.svg"
    },
    {
        title: "Подарок при первой покупке в нашем магазине!",
        icon: "/img/gift.svg"
    },
    {
        title: "Бесплатная доставка для вас!",
        icon: "/img/delivery.svg"
    },
    {
        title: "Сегодня день больших скидок!",
        icon: "/img/discount_3.svg"
    }
];

// Функция для выбора случайного подарка
function getRandomGift() {
    const randomIndex = Math.floor(Math.random() * giftArr.length);
    return giftArr[randomIndex];
}

// Функция для отображения всплывающего окна
function showPopup() {
    const popup = document.getElementById('popup');
    const gift = getRandomGift();
    
    document.getElementById('gift-title').textContent = gift.title;
    document.getElementById('gift-icon').src = gift.icon;
    
    popup.classList.remove('hidden');
}

// Скрытие всплывающего окна
document.getElementById('close-popup').addEventListener('click', function() {
    const popup = document.getElementById('popup');
    popup.classList.add('hidden');
});

// Показываем всплывающее окно через 3 секунды
setTimeout(showPopup, 3000);