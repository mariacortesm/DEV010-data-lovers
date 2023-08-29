import {
  computeMaleCharacterPercentage,
  computeFemaleCharacterPercentage,
  computeVehicle,
  extractTitle,
  filterDirector,
  filterProducer,
} from "./data.js";
import ghibli from "./data/ghibli/ghibli.js";

function show(dataghibli) {
  const dataMovies = document.getElementById("gridmovies");

  for (let gh = 0; gh < dataghibli.length; gh++) {
    const sectionMovies = document.createElement("section");
    sectionMovies.className = "grid-item";
    const poster = document.createElement("img");
    poster.src = dataghibli[gh].poster;
    poster.classList.add("posterM");
    const title = document.createElement("h2");
    title.innerHTML = dataghibli[gh].title;
    const info = document.createElement("p");
    info.innerHTML = `<p> Director: ${dataghibli[gh].director}<br> Producer: ${dataghibli[gh].producer}<br> Release date: ${dataghibli[gh].release_date}<br> Score: ${dataghibli[gh].rt_score}</p>`;
    sectionMovies.appendChild(poster);
    sectionMovies.appendChild(title);
    sectionMovies.appendChild(info);
    dataMovies.appendChild(sectionMovies);
  }
}

show(ghibli.films);
const ascendingBton = document.getElementById("ascending-button");
ascendingBton.addEventListener("click", () => {
  const rightOrder = extractTitle(ghibli.films);
  document.getElementById("gridmovies").innerHTML = "";
  show(rightOrder);
});

const descendingBton = document.getElementById("descending-button");
descendingBton.addEventListener("click", () => {
  const orderReverse = extractTitle(ghibli.films).reverse();
  document.getElementById("gridmovies").innerHTML = "";
  show(orderReverse);
});

const openModal = document.querySelector(".bton-facts");
const modalData = document.querySelector(".modal-funFacts");
const closeModal = document.querySelector(".modal-close");

openModal.addEventListener("click", (e) => {
  e.preventDefault(); // evitar que cree un comportamiento por defecto
  modalData.classList.add("modal-show");
});

closeModal.addEventListener("click", (e) => {
  e.preventDefault(); // evitar que cree un comportamiento por defecto
  modalData.classList.remove("modal-show");
});

const filterinput = document.getElementById("director");
filterinput.addEventListener("change", (input) => {
  const selectedDirector = input.target.value;
  const filteredDirector = filterDirector(selectedDirector);
  document.getElementById("gridmovies").innerHTML = "";
  show(filteredDirector);
});

const filtersProducer = document.getElementById("producer");
filtersProducer.addEventListener("change", (input) => {
  const selectedProducer = input.target.value;
  const filteredProducer = filterProducer(selectedProducer);
  document.getElementById("gridmovies").innerHTML = "";
  show(filteredProducer);
});

document.querySelector(
  ".modal-paragraph"

).innerHTML = `Did you know that there are six vehicles (whether magical or not) featured in Studio Ghibli films?" ${computeVehicle(

  ghibli.films
)} <br><br> Did you know the percentage of female characters (includes humans and other species) featured in Studio Ghibli films is: ${computeFemaleCharacterPercentage(
  ghibli.films
).toFixed(
  2
)} % <br><br> While the percentage of male characters (includes humans and other species) is: ${computeMaleCharacterPercentage(
  ghibli.films

).toFixed(2)} %`;

