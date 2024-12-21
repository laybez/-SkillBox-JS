// Получаем элементы из DOM
const cardTextInput = document.getElementById('cardText');
const cardColorSelect = document.getElementById('cardColor');
const cardElement = document.getElementById('card');

// Обработчик события input для обновления текста на карте
cardTextInput.addEventListener('input', function() {
    cardElement.textContent = cardTextInput.value || 'Ваш текст здесь';
});

// Обработчик события focus для изменения стиля поля ввода
cardTextInput.addEventListener('focus', function() {
    cardTextInput.style.borderColor = '#007BFF';
    cardTextInput.style.backgroundColor = '#e7f3ff';
});

// Обработчик события blur для возврата стиля поля ввода
cardTextInput.addEventListener('blur', function() {
    cardTextInput.style.borderColor = '#ccc';
    cardTextInput.style.backgroundColor = 'white';
});

// Обработчик события change для изменения цвета карты
cardColorSelect.addEventListener('change', function() {
    cardElement.style.backgroundColor = cardColorSelect.value;
});