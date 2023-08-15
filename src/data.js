// estas funciones son de ejemplo
export function extraerTitulo(list){
  //   const order = list.map((elemento) => elemento.title);
  //   if (sortOrder === "asc") {
  //     order.sort();
  //     return order
  //   } else if (sortOrder === "desc"); {
  //     order.sort((a, b) => b.localeCompare(a));
  //   }
   
  // return order;
  return list.sort(function (a, b) {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
}
