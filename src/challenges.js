/* eslint-disable sonarjs/cognitive-complexity */
// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, heigth) {
  // seu código aqui
  return (base * heigth) / 2;
}
let value = calcArea(10, 50);
console.log(value);

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let first = array[0];
  let last = array[array.length - 1];
  let comma = ', ';
  return last + comma + first;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let winsPoints = wins * 3;
  let tiesPoints = ties * 1;
  return winsPoints + tiesPoints;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let maiornumero = Math.max.apply(null, array);
  let soma = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === maiornumero) {
      soma += 1;
    }
  }
  return soma;
}

// Desafio 7
function catAndMouse(Mouse, cat1, cat2) {
  // seu código aqui
  let distanciaCat1 = Math.abs(Mouse - cat1);
  let distanciaCat2 = Math.abs(Mouse - cat2);
  let resultado;
  if (distanciaCat1 === distanciaCat2) {
    resultado = 'os gatos trombam e o rato foge';
  } else if (distanciaCat1 < distanciaCat2) {
    resultado = 'cat1';
  } else {
    resultado = 'cat2';
  }
  return resultado;
}

// Desafio 8
// eslint-disable-next-line complexity
// eslint-disable-next-line sonarjs/cognitive-complexity
// eslint-disable-next-line complexity
function fizzBuzz(array) {
  // seu código aqui
  let result = [];
  for (let index in array) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      result.push('fizz');
    } else if (array[index] % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  let result = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === 'a') {
      result = result + '1';
    } else if (string[index] === 'e') {
      result = result + '2';
    } else if (string[index] === 'i') {
      result = result + '3';
    } else if (string[index] === 'o') {
      result = result + '4';
    } else if (string[index] === 'u') {
      result = result + '5';
    } else {
      result = result + string[index];
    }
  }
  return result;
}

function decode(string) {
  // seu código aqui
  let result = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === '1') {
      result = result + 'a';
    } else if (string[index] === '2') {
      result = result + 'e';
    } else if (string[index] === '3') {
      result = result + 'i';
    } else if (string[index] === '4') {
      result = result + 'o';
    } else if (string[index] === '5') {
      result = result + 'u';
    } else {
      result = result + string[index];
    }
  }
  return result;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
