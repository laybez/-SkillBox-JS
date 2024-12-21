const promocodeArr = [
    {
        promocode: 'PROM10',
        gift: "Скидка 10%"
    },
    {
        promocode: 'PROM50',
        gift: "Скидка 50%"
    },
    {
        promocode: 'GIFT',
        gift: "Подарок в корзине"
    }
];

// Проверка промокода
document.getElementById('promo-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем перезагрузку страницы
    const promoCodeInput = document.getElementById('promo-code');
    const promoMessage = document.getElementById('promo-message');
    const enteredCode = promoCodeInput.value.trim().toUpperCase();
    
    // Ищем введённый промокод в массиве
    const foundPromo = promocodeArr.find(promo => promo.promocode === enteredCode);

    if (foundPromo) {
        promoMessage.textContent = `Промокод успешно применён! Вы получили: ${foundPromo.gift}`;
    } else {
        promoMessage.textContent = "Неверный промокод. Попробуйте снова.";
    }
    
    promoMessage.classList.remove('hidden'); // Показываем сообщение
    promoCodeInput.value = ""; // Очищаем поле ввода
});