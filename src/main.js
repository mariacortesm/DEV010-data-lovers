//import { example } from './data.js';
// import data from './data/lol/lol.js';
import ghibli from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

const dataMovies = document.getElementById("gridmovies")
for (let gh = 0; gh < ghibli.films.length; gh ++){
  const sectionMovies = document.createElement('section');
  sectionMovies.className = 'grid-item';
  const poster = document.createElement('img');
  poster.src = ghibli.films[gh].poster;
  const title = document.createElement('h2');
  title.innerHTML = ghibli.films[gh].title
  const info = document.createElement('p');
  info.innerHTML = `<p> Director: ${ghibli.films[gh].director}<br> Producer: ${ghibli.films[gh].producer}<br> Release date: ${ghibli.films[gh].release_date}<br> Score: ${ghibli.films[gh].rt_score}</p>`;
  sectionMovies.appendChild(poster);
  sectionMovies.appendChild(title);
  sectionMovies.appendChild(info);
  dataMovies.appendChild(sectionMovies);
}

/*import ghibli from './data/ghibli/ghibli.js';

const dataMovies = document.getElementById("gridmovies");

// Crear una función para actualizar la visualización de películas en la página
function renderMovies(movieList) {
  dataMovies.innerHTML = ''; // Limpiar el contenido anterior
  for (const movie of movieList) {
    const sectionMovies = document.createElement('section');
    sectionMovies.className = 'grid-item';
    const poster = document.createElement('img');
    poster.src = movie.poster;
    const title = document.createElement('h2');
    title.innerHTML = movie.title;
    const info = document.createElement('p');
    info.innerHTML = `<p> Director: ${movie.director}<br> Producer: ${movie.producer}<br> Release date: ${movie.release_date}<br> Score: ${movie.rt_score}</p>`;
    sectionMovies.appendChild(poster);
    sectionMovies.appendChild(title);
    sectionMovies.appendChild(info);
    dataMovies.appendChild(sectionMovies);
  }
}

// Obtener la lista inicial de películas
const allMovies = ghibli.films.slice();

// Agregar eventos a los botones de ordenamiento
const ascendingButton = document.getElementById('ascending-button');
const descendingButton = document.getElementById('descending-button');

ascendingButton.addEventListener('click', () => {
  const sortedMovies = allMovies.slice().sort((a, b) => a.title.localeCompare(b.title));
  renderMovies(sortedMovies);
});

descendingButton.addEventListener('click', () => {
  const sortedMovies = allMovies.slice().sort((a, b) => b.title.localeCompare(a.title));
  renderMovies(sortedMovies);
});

// Mostrar todas las películas al cargar la página
renderMovies(allMovies);*/
