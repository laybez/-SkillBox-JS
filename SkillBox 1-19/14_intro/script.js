const filmForm = document.getElementById('film-form');
const filmTitleInput = document.getElementById('film-title');
const filmGenreInput = document.getElementById('film-genre');
const filmYearInput = document.getElementById('film-year');
const filmList = document.getElementById('film-list');
const errorMessage = document.getElementById('error-message');
const sortSelect = document.getElementById('sort-select');

let films = JSON.parse(localStorage.getItem('films')) || [];

// Функция для отображения фильмов
function displayFilms() {
    filmList.innerHTML = '';
    films.forEach((film, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${film.title}</td>
            <td>${film.genre}</td>
            <td>${film.year}</td>
            <td>
                <button onclick="editFilm(${index})">Редактировать</button>
                <button onclick="deleteFilm(${index})">Удалить</button>
            </td>
        `;
        filmList.appendChild(row);
    });
}

// Функция для добавления фильма
filmForm.addEventListener('submit', function(event) {
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

    const newFilm = { title, genre, year };
    films.push(newFilm);
    localStorage.setItem('films', JSON.stringify(films));
    displayFilms();

    filmForm.reset();
});

// Функция для удаления фильма
function deleteFilm(index) {
    films.splice(index, 1);
    localStorage.setItem('films', JSON.stringify(films));
    displayFilms();
}

// Функция для редактирования фильма
function editFilm(index) {
    const film = films[index];
    filmTitleInput.value = film.title;
    filmGenreInput.value = film.genre;
    filmYearInput.value = film.year;

    deleteFilm(index);
}

// Функция для сортировки фильмов
sortSelect.addEventListener('change', function() {
    const sortBy = sortSelect.value;
    films.sort((a, b) => {
        if (sortBy === 'title') {
            return a.title.localeCompare(b.title);
        } else if (sortBy === 'genre') {
            return a.genre.localeCompare(b.genre);
        } else if (sortBy === 'year') {
            return a.year - b.year;
        }
    });
    localStorage.setItem('films', JSON.stringify(films));
    displayFilms();
});

// Отображение фильмов при загрузке страницы
window.onload = displayFilms;