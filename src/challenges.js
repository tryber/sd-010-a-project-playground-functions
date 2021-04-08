// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2) {
    return true;
  } return false;
}
console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, height) {
  let triangulo = (base * height) / 2;
  return triangulo;
}
// console.log(calcArea(10, 50));
// Desafio 3
function splitSentence(array) {
  let separaçaoString = array.split(' ');
  return separaçaoString;
}
console.log(splitSentence('go Trybe'));
// Desafio 4 ;

function concatName(array) {
  let string = `${array[array.length - 1]}, ${array[[0]]}`;
  return string;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
// Desafio 5
function footballPoints(wins, ties) {
  let wins1 = wins * 3;
  let ties1 = ties * 1;
  return wins1 + ties1;
}

console.log(footballPoints(0, 0));
// Desafio 6
function highestCount(array) {
  let maior = 0;
  let conta = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maior) {
      maior = array[index];
    }
  }
  for (let index1 = 0; index1 < array.length; index1 += 1) {
    if (array[index1] === maior) {
      conta += 1;
    }
  }
  return conta;
}
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));

// Desafio 7
// Ajuda sobre o math.abs da Maria Luiza Victorio Castelar Rodrigues ;
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  }
  if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';

}
// seu código aqui
console.log(catAndMouse(4, 4, 4));

// Desafio 8
function fizzBuzz(array) {
  let output = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      output.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      output.push('fizz');
    } else if (array[index] % 5 === 0) {
      output.push('buzz');
    } else {
      output.push('bug!');
    }
  }
  return output;
}
console.log(fizzBuzz([9, 25]));
// Desafio 9
function encode(str) {
  let string = str.split('');
  let numPorConsoantes = ['a', 'e', 'i', 'o', 'u'];
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === numPorConsoantes[0]) {
      string[index] = '1';
    } else if (string[index] === numPorConsoantes[1]) {
      string[index] = '2';
    } else if (string[index] === numPorConsoantes[2]) {
      string[index] = '3';
    } else if (string[index] === numPorConsoantes[3]) {
      string[index] = '4';
    } else if (string[index] === numPorConsoantes[4]) {
      string[index] = '5';
    }
  }
  let concatenacao = string.join('');
  return concatenacao;
}
console.log(encode('hi there!'));

function decode(str) {
  let string1 = str.split('');
  let consoantesPorNumeros = ['1', '2', '3', '4', '5'];
  for (let index = 0; index < string1.length; index += 1) {
    if (string1[index] === consoantesPorNumeros[0]) {
      string1[index] = 'a';
    } else if (string1[index] === consoantesPorNumeros[1]) {
      string1[index] = 'e';
    } else if (string1[index] === consoantesPorNumeros[2]) {
      string1[index] = 'i';
    } else if (string1[index] === consoantesPorNumeros[3]) {
      string1[index] = 'o';
    } else if (string1[index] === consoantesPorNumeros[4]) {
      string1[index] = 'u';
    }
  }
  let concat = string1.join('');
  // seu código aqui
  return concat;
}
console.log(decode('h3 th2r2!'));
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
