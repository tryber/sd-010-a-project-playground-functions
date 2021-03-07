// Desafio 10
function techList(tech, name) {
  let listaDeTech = {};
  for (let index = 0; index < tech.length; index += 1) {
    listaDeTech.tech = tech[index];
    listaDeTech.name = name;
    
  }
  return listaDeTech;
}
console.log(techList(sell,edu));

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
