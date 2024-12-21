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

// Функция для анимации прогресс-бара
function progress(time, progressBarId, callback) {
    const progressBar = document.getElementById(progressBarId);
    progressBar.style.width = '0%';

    let width = 0;
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            if (callback) callback(); // Вызываем колбек после завершения
        } else {
            width++;
            progressBar.style.width = width + '%';
        }
    }, time * 10); // 1000 мс / 100% = 10 мс на 1%
}

// Функция для отображения изображений на странице
function displayImages(images, containerId) {
    const container = document.getElementById(containerId);
    images.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        container.appendChild(img);
    });
}

// Основная логика загрузки изображений с прогресс-баром
async function loadImages() {
    // Загрузка первой категории изображений (кошки)
    progress(5, 'progress-bar-1', async () => {
        const images = await fetchImages('cats');
        displayImages(images, 'images-container-1');
        
        // Загрузка второй категории изображений (собаки)
        progress(5, 'progress-bar-2', async () => {
            const images = await fetchImages('dogs');
            displayImages(images, 'images-container-2');
        });
    });
}

// Запуск загрузки изображений при загрузке страницы
window.onload = loadImages;