// estas funciones son de ejemplo

import ghibli from "./data/ghibli/ghibli";

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

function extractTitle(list){
  return list.map((item) => item.title);
}
const filteredM =extractTitle(ghibli.films);

console.log(filteredM);
