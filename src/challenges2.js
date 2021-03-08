// Desafio 10
// lógica para ordenar a lista através do sort() encontrada em https://pt.stackoverflow.com/questions/46600/como-ordenar-uma-array-de-objetos-com-array-sort
function techList(array, name) {
  let newArrayTech = [];
  for (let index = 0; index < array.length; index += 1) {
    let itemListTech = {
      tech: array[index],
      name,
    };
    newArrayTech.push(itemListTech);
  }
  if (array.length === 0) {
    return 'Vazio!';
  } return newArrayTech.sort(function (tech1, tech2) {
    if (tech1.tech < tech2.tech) {
      return -1;
    } return 1;
  });
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));
console.log(techList([], 'Anderson'));

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
