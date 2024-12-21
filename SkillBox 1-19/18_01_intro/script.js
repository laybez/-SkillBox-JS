// Функция для имитации запроса с случайной задержкой
function fetchImages(category) {
    return new Promise((resolve) => {
        const delay = Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000; // Задержка от 2 до 5 секунд
        setTimeout(() => {
            const images = category === 'cats' 
                ? [
                    'https://placekitten.com/200/300',
                    'https://placekitten.com/250/350',
                    'https://placekitten.com/300/400'
                ]
                : [
                    'https://placedog.net/200/300',
                    'https://placedog.net/250/350',
                    'https://placedog.net/300/400'
                ];
            resolve(images);
        }, delay);
    });
}

// Функция для обновления прогресс-бара
function updateProgressBar(percentage) {
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = percentage + '%';
}

// Функция для отображения изображений на странице
function displayImages(images) {
    const container = document.getElementById('images-container');
    images.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        container.appendChild(img);
    });
}

// Основная логика загрузки изображений
async function loadImages() {
    const progressBar = document.getElementById('progress-bar');
    
    // Запускаем оба запроса параллельно
    const promises = [
        fetchImages('cats').then(images => {
            displayImages(images);
            updateProgressBar(100); // Обновляем прогресс бар
        }),
        fetchImages('dogs').then(images => {
            displayImages(images);
            updateProgressBar(100); // Обновляем прогресс бар
        })
    ];

    // Обновление прогресс-бара в процессе загрузки
    let completed = 0;
    const interval = setInterval(() => {
        completed += 10;
        if (completed <= 100) {
            updateProgressBar(completed);
        }
    }, 500);

    await Promise.all(promises);
    clearInterval(interval); // Останавливаем обновление прогресс-бара
}

// Запуск загрузки изображений при загрузке страницы
window.onload = loadImages;