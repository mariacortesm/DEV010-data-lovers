import ghibli from "./data/ghibli/ghibli.js";

export function extractTitle(list) {
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
  return ghibli.films.filter((film) => film.director === director);
}

export function filterProducer(producer) {
  return ghibli.films.filter((film) => film.producer === producer);
}

export function computeVehicle(list) {
  return list.flatMap((item) => item.vehicles.map((vehicle) => vehicle.name));
}

export function computeFemaleCharacterPercentage(films) {
  let totalFemaleCharacters = 0;
  let totalCharacters = 0;
  for (const film of films) {
    for (const character of film.people) {
      if (character.gender === "Female") {
        totalFemaleCharacters++;
      }
      totalCharacters++;
    }
  }
  const percentage = (totalFemaleCharacters / totalCharacters) * 100;
  return percentage;
}

export function computeMaleCharacterPercentage(films) {
  let totalMaleCharacters = 0;
  let maleCharacter = 0;
  for (const film of films) {
    for (const characters of film.people) {
      if (characters.gender === "Male") {
        totalMaleCharacters++;
      }
      maleCharacter++;
    }
  }
  const percentage = (totalMaleCharacters / maleCharacter) * 100;
  return percentage;
}

//   const order = list.map((elemento) => elemento.title);
//   if (sortOrder === "asc") {
//     order.sort();
//     return order
//   } else if (sortOrder === "desc"); {
//     order.sort((a, b) => b.localeCompare(a));
//   }
// return order;
