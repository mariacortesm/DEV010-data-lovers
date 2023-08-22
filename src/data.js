import ghibli from "./data/ghibli/ghibli.js";

export function extraerTitulo(list){
  return list.sort(function (a, b) {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    
    return 0;
  });
}


export function filterDirector(director) {
  return ghibli.films.filter((film)=> film.director === director);
}


export function filterProducer(producer) {
  return ghibli.films.filter((film)=> film.producer === producer);
}

export function calcularVehiculo (list) {
  return list.flatMap((item) => item.vehicles.map((vehicle) => vehicle.name));
   
} 

export function calcularLocaciones (list) {
  return list.flatMap((item) => item.locations.map((location) => location.name));
   
} 



//   const order = list.map((elemento) => elemento.title);
//   if (sortOrder === "asc") {
//     order.sort();
//     return order
//   } else if (sortOrder === "desc"); {
//     order.sort((a, b) => b.localeCompare(a));
//   }
   
// return order;
  
// export function hola