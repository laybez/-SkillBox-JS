const filmForm = document.getElementById('film-form');
const filmTitleInput = document.getElementById('film-title');
const filmGenreInput = document.getElementById('film-genre');
const filmYearInput = document.getElementById('film-year');
const filmList = document.getElementById('film-list');
const errorMessage = document.getElementById('error-message');
const sortSelect = document.getElementById('sort-select');
const filterInput = document.getElementById('filter-input');
const deleteAllButton = document.getElementById('delete-all');

let films = [];

// Функция для загрузки фильмов с сервера
async function loadFilms() {
    const response = await fetch('/films');
    films = await response.json();
    displayFilms();
}

// Функция для отображения фильмов
function displayFilms() {
    filmList.innerHTML = '';
    const filterText = filterInput.value.toLowerCase();
    films.forEach((film, index) => {
        if (
            film.title.toLowerCase().includes(filterText) ||
            film.genre.toLowerCase().includes(filterText) ||
            film.year.toString().includes(filterText)
        ) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${film.title}</td>
                <td>${film.genre}</td>
                <td>${film.year}</td>
                <td>${film.isWatched ? 'Да' : 'Нет'}</td>
                <td>
                    <button onclick="deleteFilm(${film.id})">Удалить</button>
                </td>
            `;
            filmList.appendChild(row);
        }
    });
}

// Функция для добавления фильма
filmForm.addEventListener('submit', async function(event) {
    event.preventDefault();

    const title = filmTitleInput.value.trim();
    const genre = filmGenreInput.value.trim();
    const year = filmYearInput.value.trim();

    if (!title || !genre || !year) {
        errorMessage.textContent = 'Все поля должны быть заполнены!';
        errorMessage.classList.remove('hidden');
        return;
    }

    errorMessage.classList.add('hidden');

    const newFilm = { title, genre, year, isWatched: false };
    await fetch('/films', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newFilm),
    });

    loadFilms();
    filmForm.reset();
});

// Функция для удаления фильма
async function deleteFilm(id) {
    await fetch(`/films/${id}`, {
        method: 'DELETE',
    });
    loadFilms();
}

// Функция для удаления всех фильмов
deleteAllButton.addEventListener('click', async function() {
    await fetch('/films', {
        method: 'DELETE',
    });
    loadFilms();
});

// Функция для фильтрации фильмов
filterInput.addEventListener('input', displayFilms);

// Сортировка фильмов
sortSelect.addEventListener('change', function() {
    const sortBy = sortSelect.value;
    films.sort((a, b) => {
        if (sortBy === 'title') {
            return a.title.localeCompare(b.title);
        } else if (sortBy === 'genre') {
            return a.genre.localeCompare(b.genre);
        } else if (sortBy === 'year') {
            return a.year - b.year;
        } else if (sortBy === 'watched') {
            return a.isWatched - b.isWatched;
        }
    });
    displayFilms();
});

// Загрузка фильмов при загрузке страницы
window.onload = loadFilms;