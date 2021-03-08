// Desafio 10
function techList(arrayTech, name) {
  let result = [];
  if (arrayTech.length === 0){
      console.log('Vazio!')
  }else {
      for (let index = 0; index < arrayTech.length; index += 1){
          let step = [];
          step.push('tech: ' + arrayTech[index]);
          step.push('name: ' + name);
          result[index] = (step);
          step.pop;
          step.pop;
      }

      console.log(result);
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
