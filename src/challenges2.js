const { TestScheduler } = require("jest");

// Desafio 10
function techList(techName,name) {
  let listTech = [];
  techName.sort();
    for (let index = 0; index < techName.length; index += 1) {
      listTech.push({listTech: techName[index], name: name });
    }
      return listTech;
    if(techName.length <=0) {
      return 'vazio';
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
