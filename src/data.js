import ghibli from "./data/ghibli/ghibli.js"; //se importa la data del proyecto de Studio Ghibli

//Función para ordenar las películas en orden alfabético. Export significa que la función puede ser utilizada en otros lugares del código.
export function extractTitle(list) {//La función se llama "extractTitle" y toma un parámetro llamado "list" (la lista de títulos de las películas)
  return list.sort(function (a, b) {//Se usa el método "sort()" en la lista para ordenar sus elementos. Este método toma una función como argumento, que decide cómo se deben ordenar los elementos. La función dentro de "sort()"" compara dos elementos, "a" y "b", basándose en sus títulos.
    if (a.title > b.title) {//Si el título de "a" es mayor que el título de "b", devuelve 1, lo que indica que "a" debería ir después de "b" en la ordenación.
      return 1;
    }
    if (a.title < b.title) {//Si el título de "a" es menor que el título de "b", devuelve -1, lo que indica que "a" debería ir antes de "b" en la ordenación.
      return -1;
    }
    return 0; //Si los títulos son iguales, devuelve 0, lo que significa que no importa el orden entre a y b.
  }); //Al final la función retorna la lista ordenada según las reglas establecidas en la función de comparación.
}

//Función pura para filtrar por Director y Productor.
export function filterDirector(director) {//La Función "filterDirector" toma como parámetro "director". {} es el cuerpo de la función, donde se describe lo que la función hace.
  return ghibli.films.filter((film) => film.director === director);
}
//Se usa el método "filter()" en la propiedad "films" del objeto "ghibli" (que contiene info sobre las películas de SG). "filter()" crea una nueva lista de películas que cumplan con cierta condición. Dentro de "filter()", hay una arrow function que se ejecutará por cada película en la lista de películas. Esta función toma una película "(film)" como entrada y verifica si el director de esa película coincide con el valor pasado como argumento a la función "filterDirector". La comparación "(film.director === director)" verifica si el director de la película actual es igual al director proporcionado como argumento a la función "filterDirector". La función "filter()" devolverá una nueva lista que contiene solo las películas cuyos directores coincidan con el "director" proporcionado.

export function filterProducer(producer) {//Es la misma función que filterDirector
  return ghibli.films.filter((film) => film.producer === producer);
}

export function computeVehicle(list) {//La función "computeVehicle" tiene como parámetro "list".
  return list.flatMap((item) => item.vehicles.map((vehicle) => vehicle.name)); // Utilizamos la función 'flatMap' para mapear y aplanar los nombres de vehículos de cada elemento en la lista.
}
// Para cada elemento en la lista, usamos 'map' para extraer los nombres de los vehículos. La función regresará lo siguiente: al objeto "list" le aplicamos el método "flatMap", el cual recorre cada persona "(item)" en la lista y hace algo con ellas. Una vez obtenido este nuevo objeto "item", entramos a su propiedad "vehicles" y aplicamos el método "map", el cual revisa cada "item" y saca los vehiculos de cada uno de ellos, convirtiéndolo en un nuevo objeto llamado "vehicle", del cual obtendremos su propiedad "name". Es decir, todo lo que está dentro de flatMap y map genera una nueva lista que contiene los nombres de todos los nombres de los vehículos de todas las personas y esto es lo que retorna.

export function computeFemaleCharacterPercentage(films) {// Inicialización de variables para contar personajes femeninos y totales
  let totalFemaleCharacters = 0; // Contador para personajes femeninos
  let totalCharacters = 0; // Contador para todos los personajes
  for (const film of films) {// Bucle para recorrer cada película en el arreglo de películas
    for (const character of film.people) {// Bucle para recorrer cada personaje en la propiedad 'people' de la película actual
      if (character.gender === "Female") {// Verificación de género del personaje: si es 'Female', incrementar contador de personajes femeninos
        totalFemaleCharacters++;
      }
      totalCharacters++; // Incrementar el contador de todos los personajes, independientemente del género
    }
  }
  const percentage = (totalFemaleCharacters / totalCharacters) * 100; // Cálculo del porcentaje de personajes femeninos
  return percentage; // Retornar el porcentaje calculado
}
//Se crean dos variables: "totalFemaleCharacters" y "totalCharacters", ambas inicializadas en 0. Estas variables se usarán para llevar la cuenta de los personajes femeninos y el total de personajes en todas las películas. Hay dos bucles "for" anidados. El bucle exterior recorre cada película en el arreglo films. Dentro del bucle exterior, hay otro bucle for que recorre cada personaje en la propiedad people de la película actual. Para cada personaje, se verifica si su género es "Female". Si es así, se incrementa la variable "totalFemaleCharacters" en 1, lo que significa que se ha encontrado un personaje femenino.  No importa el género del personaje, se incrementa la variable "totalCharacters" en 1 para contar a todos los personajes, independientemente de su género. Después de recorrer todos los personajes en todas las películas, se calcula el porcentaje dividiendo "totalFemaleCharacters" entre "totalCharacters" y multiplicando por 100. Esto da el porcentaje de personajes femeninos en relación con el total de personajes. El porcentaje calculado se guarda en la variable percentage y se devuelve como resultado de la función.

export function computeMaleCharacterPercentage(films) {
  //Es lo mismo que female
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