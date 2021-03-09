// Desafio 10
function techList(techArray, name) {
  let techNameList = {}
  for(let index = 0; index < techArray.lenght; index += 1) {
    let techObject = {
      tech: techArray[index];
      nome: name
    }
    let finalList = Object.assign(techNameList, techObject);
  }
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
