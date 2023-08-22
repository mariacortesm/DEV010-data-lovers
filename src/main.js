import { computeLocations, computeVehicle, extractTitle, filterDirector, filterProducer } from './data.js';
import ghibli from './data/ghibli/ghibli.js';


function show(dataghibli) {
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

show(ghibli.films)
const ascendingBton = document.getElementById("ascending-button")
ascendingBton.addEventListener("click", () => {
  const rightOrder = extractTitle(ghibli.films)
  document.getElementById("gridmovies").innerHTML = ""
  show(rightOrder)
});

const descendingBton = document.getElementById("descending-button")
descendingBton.addEventListener("click", () => {
  const orderReverse = extractTitle(ghibli.films).reverse()
  document.getElementById("gridmovies").innerHTML = ""
  show(orderReverse)
});

const openModal =document.querySelector('.bton-facts');
const modalData = document.querySelector('.modal-funFacts');
const closeModal = document.querySelector('.modal-close');

openModal.addEventListener('click', (e) => {
  e.preventDefault(); // evitar que cree un comportamiento por defecto
  modalData.classList.add('modal-show');
});

closeModal.addEventListener('click', (e) => {
  e.preventDefault(); // evitar que cree un comportamiento por defecto
  modalData.classList.remove('modal-show');
});

const filterinput = document.getElementById("director");
filterinput.addEventListener("change", (input) => {
  const selectedDirector =input.target.value;
  const filteredFilms = filterDirector(selectedDirector)
  document.getElementById("gridmovies").innerHTML = ""
  show(filteredFilms)//por que aqui no es filteredDirector?
});

const filtersProducer = document.getElementById("producer");
filtersProducer.addEventListener("change", (input) => {
  const selectedProducer =input.target.value;
  const filteredProducer = filterProducer(selectedProducer)
  document.getElementById("gridmovies").innerHTML = ""
  show(filteredProducer)
});

const prueba = document.querySelector("bton-facts");
console.log("contar", computeVehicle(ghibli.films))

 

// const filterinput = document.getElementById("director")
// filterinput.addEventListener("change", (e) => {
//   const selectedDirector =ghibli.films.find ((obj) => obj.director === e.input.director);
//   const filteredFilms = filterDirector(selectedDirector)
//   document.getElementById("gridmovies").innerHTML = ""
//   pintar(filteredFilms)
// });
  
// const orderDesc =extraerTitulo(ghibli.films, "desc");
// console.log("desc", orderDesc);

// console.log("FILTRO",  extraerTitulo(ghibli.films));












