// Desafio 10
function techList(technology, nameList) {
  technology.sort();
  let listTech = [];
  for (let index = 0; index < technology.length; index += 1) {
    let list = {
      tech: technology[index],
      name: nameList };
    listTech.push(list);
  }
  if (listTech.length === 0) {
    return 'Vazio!';
  }
  return listTech;
}

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

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
