const promocodeObj = {
    promocode: "PROM50",
    gift: "Скидка 50%"
};

// Вспомогательная функция для получения данных из куки
function getCookie() {
    return document.cookie.split('; ').reduce((acc, item) => {
        const [name, value] = item.split('=');
        acc[name] = value;
        return acc;
    }, {});
}

// Проверка промокода
document.getElementById('promo-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем перезагрузку страницы
    const promoCodeInput = document.getElementById('promo-code');
    const promoMessage = document.getElementById('promo-message');
    const enteredCode = promoCodeInput.value.trim().toUpperCase();

    if (enteredCode === promocodeObj.promocode) {
        promoMessage.textContent = `Промокод успешно применён! Вы получили: ${promocodeObj.gift}`;
        promoMessage.classList.remove('hidden');

        // Сохраняем промокод в cookie на 30 дней
        document.cookie = `promoCode=${enteredCode}; max-age=${30 * 24 * 60 * 60}; path=/`;
    } else {
        promoMessage.textContent = "Неверный промокод. Попробуйте снова.";
        promoMessage.classList.remove('hidden');
    }

    promoCodeInput.value = ""; // Очищаем поле ввода
});

// Автоматическая активация промокода при загрузке страницы
window.onload = function() {
    const cookie = getCookie();
    if (cookie.promoCode === promocodeObj.promocode) {
        const promoMessage = document.getElementById('promo-message');
        promoMessage.textContent = `Промокод успешно применён! Вы получили: ${promocodeObj.gift}`;
        promoMessage.classList.remove('hidden');
    }
};