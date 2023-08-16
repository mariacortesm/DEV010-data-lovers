import { extraerTitulo } from './data.js';
import ghibli from './data/ghibli/ghibli.js';

function pintar(dataghibli) {
  const dataMovies = document.getElementById("gridmovies")
  
  for (let gh = 0; gh < dataghibli.length; gh ++){
    const sectionMovies = document.createElement('section');
    sectionMovies.className = 'grid-item';
    const poster = document.createElement('img');
    poster.src = dataghibli[gh].poster;
    poster.classList.add('posterM');
    const title = document.createElement('h2');
    title.innerHTML = dataghibli[gh].title
    const info = document.createElement('p');
    info.innerHTML = `<p> Director: ${dataghibli[gh].director}<br> Producer: ${dataghibli[gh].producer}<br> Release date: ${dataghibli[gh].release_date}<br> Score: ${dataghibli[gh].rt_score}</p>`;
    sectionMovies.appendChild(poster);
    sectionMovies.appendChild(title);
    sectionMovies.appendChild(info);
    dataMovies.appendChild(sectionMovies);

  }
}

pintar(ghibli.films)
const ascendingBton = document.getElementById("ascending-button")
ascendingBton.addEventListener("click", () => {
  const prueba = extraerTitulo(ghibli.films)
  console.log("orden", prueba)
  document.getElementById("gridmovies").innerHTML = ""
  pintar(prueba)
})
pintar(ghibli.films)
const descendingBton = document.getElementById("descending-button")
descendingBton.addEventListener("click", () => {
  const pruebaReverse = extraerTitulo(ghibli.films).reverse()
  console.log("orden", pruebaReverse)
  document.getElementById("gridmovies").innerHTML = ""
  pintar(pruebaReverse)
})
  
// const orderDesc =extraerTitulo(ghibli.films, "desc");
// console.log("desc", orderDesc);

// console.log("FILTRO",  extraerTitulo(ghibli.films));












