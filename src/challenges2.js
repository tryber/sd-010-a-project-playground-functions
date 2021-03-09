// Desafio 10
function techList(arrayTech, name) {
  let sortTech = arrayTech.sort();
  let newArray = [];
  for (let index = 0; index < sortTech.length; index += 1) {
    newArray.push({'tech': sortTech[index], 'name': name});
  }
if (arrayTech.length === 0) {
  return 'Vazio!';
}return newArray; 
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

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
