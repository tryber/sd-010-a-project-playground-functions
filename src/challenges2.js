// Desafio 10
function techList(techArray, name) {
  let result;
  if (techArray.length > 0) {
    techArray = techArray.sort();
    let objectArray = [];
    for (let index = 0; index < techArray.length; index += 1) {
      let object = { tech: techArray[index], name };
      objectArray.push(object);
    }
    result = objectArray;
  } else {
    result = 'Vazio!';
  }
  return result;
}

// Desafio 11
// Definindo funções a serem utilizadas na generatePhoneNumber()
function arrayLengthValidation(array) {
  return array.length === 11;
}

function arrayNumericalValidation(array) {
  for (let value of array) {
    if (value < 0 || value > 9) {
      return false;
    }
  }
  return true;
}

function countRepetitions(array, numberToCount) {
  // Counts how many times the number is repeated in the array
  let count = 0;
  for (let number of array) {
    if (number === numberToCount) {
      count += 1;
    }
  }
  return count;
}

function arrayRepeatValidation(array, maxRepetitions) {
  // Retorna false se o array tem numeros se repetindo x vezes ou mais
  let result = true;
  for (let number of array) {
    if (countRepetitions(array, number) >= maxRepetitions) {
      result = false;
    }
  }
  return result;
}

function generatePhoneNumber(numberArray) {
// Perform validations
  let result;

  if (!arrayLengthValidation(numberArray)) {
    result = 'Array com tamanho incorreto.';
  } else if (!arrayNumericalValidation(numberArray) || !arrayRepeatValidation(numberArray, 3)) {
    result = 'não é possível gerar um número de telefone com esses valores';
  } else {
    let ddd = numberArray.slice(0, 2).join('');
    result = `(${ddd}) ${numberArray.slice(2, 7).join('')}-${numberArray.slice(7, 11).join('')}`;
  }
  return result;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 4]));
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // é necessário que a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois
  // e maior que o valor absoluto da diferença entre essas medidas.
  let isTriangle;
  if (lineA >= lineB + lineC || lineB >= lineA + lineC || lineC >= lineB + lineA) {
    isTriangle = false;
  } else if (lineA <= Math.abs(lineB - lineC) || lineB <= Math.abs(lineA - lineC) || lineC <= Math.abs(lineB - lineA)) {
    isTriangle = false;
  } else {
    isTriangle = true;
  }
  return isTriangle;
}

// Desafio 13
function hydrate(string) {
  let waterCups = 0;
  let plural = '';
  for (let index = 0; index < string.length; index += 1) {
    let currentChar = parseInt(string.charAt(index));
    if (!Number.isNaN(currentChar)) {
      waterCups += currentChar;
    }
    if (waterCups > 1) {
      plural = 's';
    }
  }
  return `${waterCups} copo${plural} de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
