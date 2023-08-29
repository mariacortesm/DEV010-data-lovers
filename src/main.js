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
).innerHTML = `Did you know that there are six vehicles (whether magical or not) featured in Studio Ghibli films? ${computeVehicle(
  ghibli.films
)} <br><br> Did you know the percentage of female characters (includes humans and other species) featured in Studio Ghibli films is: ${computeFemaleCharacterPercentage(
  ghibli.films
).toFixed(
  2
)} % <br><br> While the percentage of male characters (includes humans and other species) is: ${computeMaleCharacterPercentage(
  ghibli.films
).toFixed(2)} %`;


// function movieShow(dataghibli) {
//   const dataInfoMovies = document.querySelector(".modal-infoMovies");

//   dataghibli.forEach(movie => {
//     const sectionInfoMovies = document.createElement("section");
//     sectionInfoMovies.className = "modal-item";

//     const movieTitle = document.createElement("h3");
//     movieTitle.innerHTML = movie.title;

//     const infoMovies = document.createElement("p");
//     infoMovies.innerHTML = `<p>Description: ${movie.description}<br>People: ${movie.people}<br>Locations: ${movie.locations}<br>Vehicles: ${movie.vehicles}</p>`;

//     sectionInfoMovies.appendChild(movieTitle);
//     sectionInfoMovies.appendChild(infoMovies);
//     dataInfoMovies.appendChild(sectionInfoMovies);

//   });

// }
// console.log("prueba 2", movieShow(ghibli.films));




// const dataghibli = ghibli.films
// function movieShow(dataghibli) {
//   const dataInfoMovies = document.querySelector(".modal-infoMovies");

//   for (let dataPoster = 0; dataPoster < dataghibli.length; dataPoster++) {
//     const sectionInfoMovies = document.createElement("section");
//     sectionInfoMovies.className = "modal-item";
//     // const picModal = document.createElement("img");
//     // picModal.src = dataghibli[dataPoster].poster;
//     // poster.classList.add("posterM");
//     const movieTitle = document.createElement("h3");
//     movieTitle.innerHTML = dataghibli[dataPoster].title;
//     const infoMovies = document.createElement("p");
//     infoMovies.innerHTML = `<p> Description: ${dataghibli[dataPoster].description}<br> People: ${dataghibli[dataPoster].people}<br> Locations: ${dataghibli[dataPoster].locations}<br> Vehicles: ${dataghibli[dataPoster].vehicles}</p>`;
//     // sectionInfoMovies.appendChild(poster);
//     sectionInfoMovies.appendChild(movieTitle);
//     sectionInfoMovies.appendChild(infoMovies);
//     dataInfoMovies.appendChild(sectionInfoMovies);
//   }
  
// }

// console.log("prueba", movieShow(ghibli.films));



const openMovieModal = document.querySelectorAll(".grid-item ");
const modalMovieData = document.querySelector(".modal-poster");
const closeMovieModal = document.querySelector(".modal-movieClose");

for(let i =0; i < openMovieModal.length; i++) {
  openMovieModal[i].addEventListener("click", (m) => {
    m.preventDefault(); // evitar que cree un comportamiento por defecto
    modalMovieData.classList.add("modal-movieShow");
    const pruebaS = ghibli.films.find(film => film.title === openMovieModal[i].children[1].textContent);
    document.querySelector(".modal-movieTitle").textContent = pruebaS.title;
    document.querySelector(".modal-pic").src = pruebaS.poster;
    document.querySelector(".modal-movieDescription").textContent = pruebaS.description;
    document.querySelector(".modal-movieDate").textContent = `Release date: ${pruebaS.release_date}`;
    document.querySelector(".modal-rating").textContent = `Score: ${pruebaS.rt_score}`;
    // console.log(ghibli.films.find(film => film.people("name")))
    
    console.log(children[1])


    // const pruebaPeople = ghibli.films.find(people => people.name === openMovieModal[i].children[1].textContent);
    // // document.querySelector(".modal-people").textContent = pruebaPeople.people;


    // console.log("pruebapeople", ghibli.films.find(people => people.name === openMovieModal[i].target.value))
    
    
   
  });
}


 
// document.getElementById("gridmovies").innerHTML = "";
// show(rightOrder);


closeMovieModal.addEventListener("click", (m) => {
  m.preventDefault(); // evitar que cree un comportamiento por defecto
  modalMovieData.classList.remove("modal-movieShow");
});