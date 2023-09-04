import {
  // Importar funciones desde el archivo data.js y el archivo ghibli.js
  computeMaleCharacterPercentage,
  computeFemaleCharacterPercentage,
  computeVehicle,
  extractTitle,
  filterDirector,
  filterProducer,
} from "./data.js";
import ghibli from "./data/ghibli/ghibli.js";

function show(dataghibli) {
  // Definición de la función show para mostrar las películas en la página
  const dataMovies = document.getElementById("gridmovies"); // Obtener el elemento HTML con id "gridmovies"

  for (let gh = 0; gh < dataghibli.length; gh++) {
    // Iterar a través de las películas en dataghibli
    const sectionMovies = document.createElement("section"); // Crear un elemento <section> para cada película
    sectionMovies.className = "grid-item";
    const poster = document.createElement("img"); // Crear un elemento <img> para mostrar el póster de la película
    poster.src = dataghibli[gh].poster;
    poster.classList.add("posterM");
    const title = document.createElement("h2"); // Crear un elemento <h2> para mostrar el título de la película
    title.innerHTML = dataghibli[gh].title;
    const info = document.createElement("p"); // Crear un elemento <p> para mostrar información adicional de la película
    info.innerHTML = `<p> Director: ${dataghibli[gh].director}<br> Producer: ${dataghibli[gh].producer}<br> Release date: ${dataghibli[gh].release_date}<br> Score: ${dataghibli[gh].rt_score}</p>`;
    sectionMovies.appendChild(poster); // Adjuntar los elementos creados a la sección de la película
    sectionMovies.appendChild(title);//appendChild sirve para agregar elementos desde JS a la interfaz sin necesidad de agregarlos en el HTML, lo que resulta es un código simplificado.
    sectionMovies.appendChild(info);
    dataMovies.appendChild(sectionMovies); // Adjuntar la sección de la película al contenedor "gridmovies". 
  } 
}

show(ghibli.films); //Llamar a la función show con la lista de películas de ghibli.films
const ascendingBton = document.getElementById("ascending-button"); //Obtener el botón con id "ascending-button".
ascendingBton.addEventListener("click", () => {//Agregar un evento de click.
  const rightOrder = extractTitle(ghibli.films); //Extraer los títulos de las películas y ordenar alfabéticamente.
  document.getElementById("gridmovies").innerHTML = ""; //Limpiar el contenedor "gridmovies"
  show(rightOrder); //Mostrar las películas en orden ascendente.
});

const descendingBton = document.getElementById("descending-button"); // Obtener el botón con id "descending-button"
descendingBton.addEventListener("click", () => {//Agregar un evento de click.
  const orderReverse = extractTitle(ghibli.films).reverse(); //Extraer los títulos de las películas, ordenar alfabéticamente y revertir el orden.
  document.getElementById("gridmovies").innerHTML = ""; //Limpiar el contenedor "gridmovies"
  show(orderReverse); //Mostrar las películas en orden descendente.
});

//Estas constantes están seleccionando elementos específicos en la página web mediante la asignación de clases CSS. Esas clases se utilizan para identificar elementos HTML que están relacionados con la funcionalidad del modal de Fun Facts.
const openModal = document.querySelector(".bton-facts"); //Esto busca en el documento HTML un elemento que tenga la clase CSS "bton-facts".
const modalData = document.querySelector(".modal-funFacts"); //Esta constante también se crea utilizando el método document.querySelector(".modal-funFacts").
const closeModal = document.querySelector(".modal-close"); //Esta constante se crea utilizando document.querySelector(".modal-close")

//Estas constantes se utilizan para manipular la visibilidad del modal de Fun Facts en función de las interacciones del usuario con los botones o enlaces correspondientes.
openModal.addEventListener("click", (e) => {//Se agrega un evento de clic que, cuando se activa (cuando el usuario hace clic en el botón o enlace con la clase "bton-facts"), se añade la clase "modal-show" al elemento modalData. Esto hace que el modal se muestre en la pantalla.
  e.preventDefault(); //Evitar que cree un comportamiento por defecto.
  modalData.classList.add("modal-show"); //Muestra el modal.
});

closeModal.addEventListener("click", (e) => {//Se agrega un evento de clic que, cuando se activa (cuando el usuario hace clic en el botón o enlace con la clase "modal-close"), se elimina la clase "modal-show" del elemento modalData. Esto oculta el modal.
  e.preventDefault(); //Evitar que cree un comportamiento por defecto.
  modalData.classList.remove("modal-show"); //Ocultar el modal.
});

// Este código configura una interacción que permite al usuario filtrar las películas por director. Cuando el usuario cambia el valor del campo de entrada de director, se filtran las películas y se actualiza el contenido de la página para mostrar solo las películas dirigidas por el director seleccionado. Es lo mismo para producer.
const filterinput = document.getElementById("director"); //Aquí se obtiene una referencia al elemento HTML que tiene el atributo id con el valor "director".
filterinput.addEventListener("change", (input) => {//Cuando el usuario selecciona o ingresa un nuevo director para filtrar, se activará esta función.
  const selectedDirector = input.target.value; //Dentro del manejador de evento, se obtiene el valor del campo de entrada. input se refiere al evento, e input.target.value es el valor del campo de entrada seleccionado o ingresado por el usuario. Este valor representa el director por el cual el usuario desea filtrar las películas.
  const filteredDirector = filterDirector(selectedDirector); //Aquí se utiliza la función filterDirector() para filtrar la lista de películas por el director seleccionado. selectedDirector se pasa como argumento a esta función, lo que significa que la función devolverá una lista de películas que fueron dirigidas por el director seleccionado.
  document.getElementById("gridmovies").innerHTML = ""; //Esto borra el contenido del elemento con el id "gridmovies". Esto se hace para eliminar las películas que podrían estar siendo mostradas actualmente en ese contenedor.
  show(filteredDirector); //Se llama a la función show() con la lista de películas filtradas por director. Esto actualiza el contenido de la página mostrando solo las películas dirigidas por el director seleccionado.
});

const filtersProducer = document.getElementById("producer");//Configurar interacción para filtrar por productor
filtersProducer.addEventListener("change", (input) => {
  const selectedProducer = input.target.value;
  const filteredProducer = filterProducer(selectedProducer);
  document.getElementById("gridmovies").innerHTML = "";
  show(filteredProducer);
});

// Este fragmento de código actualiza dinámicamente el contenido de un elemento HTML con la clase "modal-paragraph". El contenido muestra información sobre vehículos en las películas, el porcentaje de personajes femeninos y el porcentaje de personajes masculinos en las películas del Studio Ghibli. Los valores dinámicos se calculan utilizando las funciones proporcionadas y se insertan en la cadena de plantilla para mostrar la información actualizada en el modal.
document.querySelector(
  ".modal-paragraph"
).innerHTML = `- Did you know that there are six vehicles (whether magical or not) featured in Studio Ghibli films?" ${computeVehicle(
  ghibli.films
)} <br><br> - Did you know the percentage of female characters (includes humans and other species) featured in Studio Ghibli films is: ${computeFemaleCharacterPercentage(
  ghibli.films
).toFixed(
  2
)} % <br><br> - While the percentage of male characters (includes humans and other species) is: ${computeMaleCharacterPercentage(
  ghibli.films
).toFixed(2)} %`; //A continuación la explicación de cada línea:
//document.querySelector(".modal-paragraph"): Aquí se selecciona el primer elemento que tiene la clase CSS "modal-paragraph". Esta clase se utiliza para identificar un elemento HTML donde se mostrará contenido dinámico.

//.innerHTML = ...```: La propiedad innerHTML se utiliza para establecer el contenido HTML del elemento seleccionado en el paso anterior. El contenido se define utilizando una cadena de plantilla (template string) que contiene texto estático y valores dinámicos generados por las funciones computeVehicle(), computeFemaleCharacterPercentage(), y computeMaleCharacterPercentage().

//${computeVehicle(ghibli.films)}: Esta parte se reemplaza con el resultado de la función computeVehicle(ghibli.films), que devuelve un valor basado en las películas del Studio Ghibli. Este valor se inserta en la cadena de plantilla.

//${computeFemaleCharacterPercentage(ghibli.films).toFixed(2)} %: Se calcula el porcentaje de personajes femeninos en las películas y se formatea con dos decimales usando el método .toFixed(2). Luego, se inserta en la cadena de plantilla. Sucede lo mismo con computeMaleCharacterPercentage.

const openMovieModal = document.querySelectorAll(".grid-item ");
const modalMovieData = document.querySelector(".modal-poster");
const closeMovieModal = document.querySelector(".modal-movieClose");
for (let i = 0; i < openMovieModal.length; i++) {
  openMovieModal[i].addEventListener("click", (m) => {
    m.preventDefault(); //Evitar que cree un comportamiento por defecto
    modalMovieData.classList.add("modal-movieShow");
    const dataS = ghibli.films.find(
      (film) => film.title === openMovieModal[i].children[1].textContent
    );
    document.querySelector(".modal-movieTitle").textContent = dataS.title;
    document.querySelector(".modal-pic").src = dataS.poster;
    document.querySelector(".modal-movieDescription").textContent =
    dataS.description;
    document.querySelector(
      ".modal-movieDate"
    ).textContent = `Release date: ${dataS.release_date}`;
    document.querySelector(
      ".modal-rating"
    ).textContent = `Score: ${dataS.rt_score}`;

    const people = dataS.people;
    document.querySelector(".modal-image-people").innerHTML = "";
    const imagesDiv = document.querySelector(".modal-image-people");
    people.map(function (people) {
      const containerPeople = document.createElement("div");
      containerPeople.className = "item";
      const image = document.createElement("img");
      image.className = "image-characters";
      const textImage = document.createElement("p");
      textImage.className = "description-image";
      textImage.innerHTML = `Name: ${people.name} <br> Gender: ${people.gender} <br> Age: ${people.age} <br> Eye Color: ${people.eye_color} <br> Hair Color ${people.hair_color} <br> Specie: ${people.specie}`;
      image.src = people.img;
      containerPeople.appendChild(image);
      containerPeople.appendChild(textImage);
      imagesDiv.appendChild(containerPeople);
    });

    const locations = dataS.locations;
    document.querySelector(".modal-image-locations").innerHTML = "";
    const imagesLocation = document.querySelector(".modal-image-locations");
    locations.map(function (locations) {
      const containerLocations = document.createElement("div");
      containerLocations.className = "item";
      const locationImage = document.createElement("img");
      locationImage.className = "image-location";
      const textLocation = document.createElement("p");
      textLocation.className = "description-imagelocation";
      textLocation.innerHTML = `Name: ${locations.name} <br> Climate: ${locations.climate} <br> Terrain: ${locations.terrain} <br> Surface water: ${locations.surface_water}`;
      locationImage.src = locations.img;
      containerLocations.appendChild(locationImage);
      containerLocations.appendChild(textLocation);
      imagesLocation.appendChild(containerLocations);
    });

    const vehicles = dataS.vehicles;
    document.querySelector(".modal-image-vehicles").innerHTML = "";
    const imagesVehicles = document.querySelector(".modal-image-vehicles");
    vehicles.map(function (vehicles) {
      const containerVehicles = document.createElement("div");
      containerVehicles.className = "item";
      const vehiclesImage = document.createElement("img");
      vehiclesImage.className = "image-vehicles";
      const textVehicle = document.createElement("p");
      textVehicle.className = "description-imagevehicle";
      textVehicle.innerHTML = `Name: ${vehicles.name} <br> Description: ${vehicles.description} <br> Vehicle class: ${vehicles.vehicle_class} <br> Length: ${vehicles.length} <br> Pilot: ${vehicles.pilot.name}`;
      vehiclesImage.src = vehicles.img;
      containerVehicles.appendChild(vehiclesImage);
      containerVehicles.appendChild(textVehicle);
      imagesVehicles.appendChild(containerVehicles);
    });
  });
}

closeMovieModal.addEventListener("click", (m) => {
  m.preventDefault(); // evitar que cree un comportamiento por defecto
  modalMovieData.classList.remove("modal-movieShow");
});

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

//people.map(people => document.querySelector(".modal-people").textContent += `Name: ${people.name}, Gender: ${people.gender}, Age: ${people.age}, Eye //Color: ${people.eye_color}, Hair Color ${people.hair_color}, Specie: ${people.specie}`);

//people.map(people => document.querySelector(".modal-image-people").src += people.img);
//people.forEach(people => console.log(`nombre: ${people.name}, genero: ${people.gender}`));

//const peopleNames = pruebaS.people.map(people => people.name);
//document.querySelector(".modal-people").textContent = `Name: ${peopleNames}`;
//const peopleGender = pruebaS.people.map(people => people.gender);
//document.querySelector(".modal-people").textContent = `Name: ${peopleGender}`;
//const characters = ghibli.films.find(film => film.people.forEach(character => console.log(character.name)));

//const people = pruebaS.people;

//console.log(pruebaS.people[1].hair_color)

// const pruebaPeople = ghibli.films.find(people => people.name === openMovieModal[i].children[1].textContent);
// // document.querySelector(".modal-people").textContent = pruebaPeople.people;
// console.log("pruebapeople", ghibli.films.find(people => people.name === openMovieModal[i].target.value))

// document.getElementById("gridmovies").innerHTML = "";
// show(rightOrder);
