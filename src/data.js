import ghibli from "./data/ghibli/ghibli.js";

export function extractTitle(list){
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

export function computeVehicle (list) {
  const marc = list.flatMap((item) => item.vehicles.map((vehicle) => vehicle.name));
  const maria = marc.length;
  return maria
     
} 

export function computeLocations (list) {
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
  
