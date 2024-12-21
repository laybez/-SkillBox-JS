document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    // Сброс сообщений об ошибках
    document.getElementById('usernameError').textContent = '';
    document.getElementById('emailError').textContent = '';

    // Получаем значения из формы
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const rating = document.getElementById('rating').value;
    const interests = Array.from(document.querySelectorAll('input[name="interests"]:checked')).map(el => el.value);
    const comments = document.getElementById('comments').value.trim();

    // Валидация
    let valid = true;

    if (username === '') {
        document.getElementById('usernameError').textContent = 'Имя пользователя обязательно для заполнения.';
        valid = false;
    }

    if (email === '' || !validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Введите корректный email.';
        valid = false;
    }

    if (!gender) {
        alert('Выберите пол.');
        valid = false;
    }

    if (valid) {
        // Формируем выводимую информацию
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `
            <h2>Ваши данные:</h2>
            <p><strong>Имя:</strong> ${username}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Пол:</strong> ${gender.value}</p>
            <p><strong>Оценка сервиса:</strong> ${rating}</p>
            <p><strong>Интересы:</strong> ${interests.length > 0 ? interests.join(', ') : 'Нет'}</p>
            <p><strong>Комментарии:</strong> ${comments || 'Нет'}</p>
        `;
    }
});

// Валидация email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Обновление значения ползунка
document.getElementById('rating').addEventListener('input', function() {
    document.getElementById('ratingValue').textContent = this.value;
});