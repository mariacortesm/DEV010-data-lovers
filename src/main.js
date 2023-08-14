//import { example } from './data.js';
// import data from './data/lol/lol.js';
import { extraerTitulo } from './data.js';
import ghibli from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

const dataMovies = document.getElementById("gridmovies")
for (let gh = 0; gh < ghibli.films.length; gh ++){
  const sectionMovies = document.createElement('section');
  sectionMovies.className = 'grid-item';
  const poster = document.createElement('img');
  poster.src = ghibli.films[gh].poster;
  poster.classList.add('posterM');
  const title = document.createElement('h2');
  title.innerHTML = ghibli.films[gh].title
  const info = document.createElement('p');
  info.innerHTML = `<p> Director: ${ghibli.films[gh].director}<br> Producer: ${ghibli.films[gh].producer}<br> Release date: ${ghibli.films[gh].release_date}<br> Score: ${ghibli.films[gh].rt_score}</p>`;
  sectionMovies.appendChild(poster);
  sectionMovies.appendChild(title);
  sectionMovies.appendChild(info);
  dataMovies.appendChild(sectionMovies);

}


console.log("FILTRO",  extraerTitulo(ghibli.films));