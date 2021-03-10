// Desafio 10 <-- Contribuição Felipe Muller e Henrique Lima-->
function techList(array, name) {
  if (array.length === 0) {
    return 'Vazio!'
  }
  let arrayTech = [];
  array.sort();
  for (index = 0; index < array.length; index += 1) {
    let learningTech = {
      tech: array[index],
      name: name
    };
    arrayTech.push(learningTech);
  }
  return arrayTech.sort();
}
console.log(techList([], 'Lucas'))

// Desafio 11 <-- Contribuição Felipe Muller e Henrique Lima / Discussões no Zoom-->
function generatePhoneNumber(arrayNumber) {

  if (arrayNumber.length !== 11){
    return 'Array com tamanho incorreto.'
  }

  for (let index = 0; index < arrayNumber.length; index += 1) {
    let count = 0;
    for (let indexNumber = 0; indexNumber < arrayNumber.length; indexNumber += 1) {
      if (arrayNumber[index] === arrayNumber[indexNumber]) {
        count += 1;
      } if (arrayNumber[index] < 0 || arrayNumber[index] > 9 || count >=3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }

  }
    return `(${arrayNumber[0]}${arrayNumber[1]}) ${arrayNumber[2]}${arrayNumber[3]}${arrayNumber[4]}${arrayNumber[5]}${arrayNumber[6]}-${arrayNumber[7]}${arrayNumber[8]}${arrayNumber[9]}${arrayNumber[10]}`
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 3]));

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

//Fim do Projeto