// Desafio 10
function techList(techArray, nameStudent) {
  let result = [];
  for (let tech = 0; tech < techArray.sort().length; tech += 1) {
    let techObject = { tech: techArray[tech], name: nameStudent };
    result.push(techObject);
  }
  if (techArray.length === 0) {
    result = 'Vazio!';
  }
  return result;
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
