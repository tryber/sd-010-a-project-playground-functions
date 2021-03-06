//  Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}
// console.log(compareTrue(true,true));

//  Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
// console.log(calcArea(10, 50));

//  Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}
// console.log(splitSentence('go trybe'));

//  Desafio 4
function concatName(arrayNames) {
  // let lastPosition = arrayNames.length - 1;
  // let arrayReturn = [arrayNames[lastPosition], arrayNames[0]];
  return `${arrayNames[arrayNames.length - 1]}, ${arrayNames[0]}`;
}

//  Desafio 5
function footballPoints(wins, ties) {
  return 3 * wins + ties;
}
// console.log(footballPoints(0, 0));

//  Desafio 6
function countRepeat(maior, arrayNumbers) {
  let repeat = 0;
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (maior === arrayNumbers[i]) {
      repeat += 1;
    }
  }
  return repeat;
}
function highestCount(arrayNumbers) {
  let maior = 0;
  // descobrindo o maior número do array.
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (maior < arrayNumbers[i]) {
      maior = arrayNumbers[i];
    }
  }
  // repeat = countRepeat(maior, arrayNumbers);
  return countRepeat(maior, arrayNumbers); // retornando qtd de vezes q o numero maior repetiu.
}
// let arrayNumeros = [0, 0, 0, 2, 2];
// console.log(highestCount(arrayNumeros));

//  Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCatOne = Math.abs(mouse - cat1);
  let distCatTwo = Math.abs(mouse - cat2);
  if (distCatOne === distCatTwo) {
    return 'os gatos trombam e o rato foge';
  }
  if (distCatOne > distCatTwo) {
    return 'cat2';
  }
  if (distCatOne < distCatTwo) {
    return 'cat1';
  }
}
// console.log(catAndMouse(10, 7, 8)); // cat2 2 uni, cat1 3 uni
// console.log(catAndMouse(20, 14, 8)); // cat1 6 uni, cat2 12 uni
// console.log(catAndMouse(10, 5, 5)); // cat1 e 2 tem a mesma distancia do rato.

//  Desafio 8
function return3and5(arrayNumbers) {
  if (arrayNumbers % 3 === 0 && arrayNumbers % 5 === 0) {
    return true;
  }
  return false;
}
function return3(arrayNumbers) {
  if (arrayNumbers % 3 === 0) {
    return true;
  }
  return false;
}
function return5(arrayNumbers) {
  if (arrayNumbers % 5 === 0) {
    return true;
  }
  return false;
}
function fizzBuzz(arrayNumbers) {
  let arrayReturn = [];
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (return3and5(arrayNumbers[i])) {
      arrayReturn.push('fizzBuzz');
    } else if (return3(arrayNumbers[i])) {
      arrayReturn.push('fizz');
    } else if (return5(arrayNumbers[i])) {
      arrayReturn.push('buzz');
    } else {
      arrayReturn.push('bug!');
    }
  }
  return arrayReturn;
}
// let array = [2, 15, 7, 9, 45];
// console.log(fizzBuzz(array));

//  Desafio 9
function encode(phrase) {
  let spacedPhrase = '';
  spacedPhrase = phrase.split(''); // aqui transformo a string em um array de caracteres, onde cada letra é um indice.
  // percorrendo o array e alterando os valores
  for (let i = 0; i < spacedPhrase.length; i += 1) {
    if (spacedPhrase[i] === 'a') {
      spacedPhrase[i] = '1';
    } else if (spacedPhrase[i] === 'e') {
      spacedPhrase[i] = '2';
    } else if (spacedPhrase[i] === 'i') {
      spacedPhrase[i] = '3';
    } else if (spacedPhrase[i] === 'o') {
      spacedPhrase[i] = '4';
    } else if (spacedPhrase[i] === 'u') {
      spacedPhrase[i] = '5';
    }
  }
  return spacedPhrase.join(''); // retornando array contatenado em string.
  // console.log(spacedPhrase.join("")); // concatenando array de string em um unico array
}
// encode('hi there!');

function decode(array) {
  let spacedArray = '';
  spacedArray = array.split('');
  for (let i = 0; i < spacedArray.length; i += 1) {
    if (spacedArray[i] === '1') {
      spacedArray[i] = 'a';
    } else if (spacedArray[i] === '2') {
      spacedArray[i] = 'e';
    } else if (spacedArray[i] === '3') {
      spacedArray[i] = 'i';
    } else if (spacedArray[i] === '4') {
      spacedArray[i] = 'o';
    } else if (spacedArray[i] === '5') {
      spacedArray[i] = 'u';
    }
  }
  return spacedArray.join('');
}
// let array = 'h3 th2r2!';
// console.log(decode(array));

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
