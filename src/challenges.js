// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let splitArray = [];
  splitArray = (string.split(' '));
  return splitArray;
}

// Desafio 4
function concatName(array) {
  return (`${array[array.length - 1]}, ${array[0]}`);
  // Corrigido pelo --fix do eslint
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 + ties);
}

// Desafio 6
function highestCount(array) {
  let highestNumb = array[0];
  let repeatedNumb = 0;
  for (let index in array) {
    if (array[index] > highestNumb) {
      highestNumb = array[index];
    }
  }
  for (let index in array) {
    if (array[index] === highestNumb) {
      repeatedNumb += 1;
    }
  }
  return repeatedNumb;
}

// Desafio 7
// Math.abs - obtido no material fornecido pelo readME.
function catAndMouse(mouse, cat1, cat2) {
  let cat1Dist = Math.abs(cat1 - mouse);
  let cat2Dist = Math.abs(cat2 - mouse);
  if (cat1Dist < cat2Dist) {
    return 'cat1';
  }
  if (cat1Dist > cat2Dist) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let arrayResult = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      arrayResult.push('fizzBuzz');
    }
    if (array[index] % 3 === 0 && array[index] % 5 !== 0) {
      arrayResult.push('fizz');
    }
    if (array[index] % 5 === 0 && array[index] % 3 !== 0) {
      arrayResult.push('buzz');
    }
    if (array[index] % 3 !== 0 && array[index] % 5 !== 0) {
      arrayResult.push('bug!');
    }
  }
  return arrayResult;
}

// Desafio 9 - tentativa com replace
// source https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll
// Pesquisa sobre o método replaceAll para substituir elementos.
function encode(string) {
  return string.replaceAll('a', 1).replaceAll('e', 2).replaceAll('i', 3).replaceAll('o', 4).replaceAll('u', 5);
}

function decode(string) {
  return string.replaceAll(1, 'a').replaceAll(2, 'e').replaceAll(3, 'i').replaceAll(4, 'o').replaceAll(5, 'u');
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
