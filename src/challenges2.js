// Desafio 10
function techList(tech, name1) {
  // seu código aqui
  // links estudados para a realização do código: https://www.w3schools.com/jsref/jsref_sort.asp
  let techSort = tech.sort();
  let technologies = [];
  let technologiesResult;
  if (tech.length >= 1) {
    for (let index = 0; index < tech.length; index += 1) {
      technologies[index] = {
        tech: techSort[index],
        name: name1,
      };
    }
    technologiesResult = technologies;
  } else {
    technologiesResult = 'Vazio!';
  }
  return technologiesResult;
}

let arrayTech = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
let myName = 'Jodiel';

console.log(techList(arrayTech, myName));

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
