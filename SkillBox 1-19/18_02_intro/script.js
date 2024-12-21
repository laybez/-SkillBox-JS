let timerInterval;

function progress(time) {
    // Проверка на минимальное время
    if (time < 2) {
        console.error("Минимальное время для анимации - 2 секунды.");
        return;
    }

    const progressBar = document.getElementById('progress-bar');
    const timerDisplay = document.getElementById('timer');
    const totalFrames = time; // Общее количество секунд
    let currentFrame = 0; // Текущий кадр

    // Устанавливаем начальные значения
    progressBar.style.width = '0%';
    timerDisplay.textContent = currentFrame;

    // Запуск анимации
    progressBar.style.transitionDuration = time + 's';
    progressBar.style.transform = 'scaleX(1)';

    // Таймер
    timerInterval = setInterval(() => {
        currentFrame++;
        timerDisplay.textContent = currentFrame;

        if (currentFrame >= totalFrames) {
            clearInterval(timerInterval); // Остановка таймера
        }
    }, 1000);
}

// Функция для запуска анимации при нажатии кнопки
function startProgress(seconds) {
    progress(seconds);
}