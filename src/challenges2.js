// Desafio 10
function techList(currentTech, name) {
  let techName = {};
  let arrayTechName = [];
  currentTech.sort();
  if (currentTech.length === 0) {
    return ('Vazio!');
  }
  for (let index = 0; index < currentTech.length; index += 1) {
    techName = {
      name,
      tech: currentTech[index],
    };
    arrayTechName.push(techName);
  }
  return arrayTechName;
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
a = [];
console.log(techList(a, 'Lucas'));
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
