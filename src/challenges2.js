// Desafio 10
function techList(techNames, name) {
  // seu código aqui
  let technologies = [];
  if (techNames.length <= 0) {
    return 'Vazio!';
  }
  for (let techName in techNames.sort()) {
    technologies.push({
      tech: techNames[techName],
      name: name,
    });
  } return technologies;
}
techList([], 'Alexandre');
// Desafio 11
// seu código aqui
let firstPart = '';
let secondPart = '';
let thirdPart = '';
let numberAdjusted = '';
let allNumber = '';
function verifyArrayIndex(arrayNumbers) {
  for (let number in arrayNumbers) {
    if (arrayNumbers[number] < 0 || arrayNumbers[number] > 9) {
      return false;
    }
  } return true;
}
function verifyArrayLength(arrayNumbers) {
  if (arrayNumbers.length !== 11) {
    return false;
  }
  return true;
}
function verifyRepeatedNumber(arrayNumbers) {
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    let numberRepeat = 0;
    for (let secondIndex = 0; secondIndex < arrayNumbers.length; secondIndex += 1) {
      if (arrayNumbers[index] === arrayNumbers[secondIndex]) {
        numberRepeat += 1;
      } if ((numberRepeat >= 3)) {
        return false;
      }
    }
  } return true;
}
function generatePhoneNumber(phoneNumber) {
  if (verifyRepeatedNumber(phoneNumber) === false) {
    return 'não é possível gerar um número de telefone com esses valores';
  } if (verifyArrayLength(phoneNumber) === false) {
    return 'Array com tamanho incorreto.';
  } if (verifyArrayIndex(phoneNumber) === false) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  allNumber = phoneNumber.join('');
  firstPart = allNumber.slice(0, 2);
  secondPart = allNumber.slice(2, 7);
  thirdPart = allNumber.slice(7, 11);
  numberAdjusted = `(${firstPart}) ${secondPart}-${thirdPart}`;
  return numberAdjusted;
} generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]);
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  lineA = Math.abs(lineA);
  lineB = Math.abs(lineB);
  lineC = Math.abs(lineC);
  let paramA = false;
  let paramB = false;
  let paramC = false;
  if (lineA < (lineB + lineC)) {
    paramA = true;
  } if (lineB < (lineA + lineC)) {
    paramB = true;
  } if (lineC < (lineA + lineB)) {
    paramC = true;
  } if (paramA && paramB && paramC) {
    return true;
  } else {
    return false;
  }
} triangleCheck(10, 8, 14);
// Desafio 13
let glassesWater = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
};
function hydrate(string) {
  // seu código aqui
  let wordInParts = string.split('');
  let glassesAmount = 0;
  for (let word in wordInParts) {
    if (glassesWater[wordInParts[word]]) {
      glassesAmount += glassesWater[wordInParts[word]];
    }
  } if (glassesAmount === 1) {
    return `${glassesAmount} copo de água`;
  } else {
    return `${glassesAmount} copos de água`;
  }
}
// Os seguintes sites abaixo fora utilizados para consultas e auxilio no entendimento de alguns exercícios.
// https://www.w3schools.com/js/js_array_methods.asp
// https://brainly.com.br/tarefa/5567585
// https://www.alura.com.br/artigos/criando-uma-mascara-de-telefone-com-javascript
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
