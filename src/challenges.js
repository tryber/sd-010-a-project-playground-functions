/* eslint-disable complexity */
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }

  return false;
}
console.log(compareTrue(true, false));

// exercicio2
function calcArea(base, height) {
  let area = 0;
  area = base * (height / 2);
  return area;
}
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
console.log(splitSentence('foguete'));

// Desafio 4

function concatName(names) {
  let first = `${names[names.length - 1]}, ${names[0]}`;
  return first;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let pontosWins = wins * 3;
  let pontosTies = ties * 1;
  return pontosWins + pontosTies;
}
console.log(footballPoints(14, 8));

// Desafio 6
function highestNumber(arrayNum) {
  let highest = 0;
  for (let index of arrayNum) if (index >= highest) highest = index;
  return highest;
}
function highestCount(array) {
  let highNum = highestNumber(array);
  let count = 0;
  for (let index2 of array) if (index2 === highNum) count += 1;
  return count;
}

let arrayNum = [9, 1, 2, 8, 9, 5, 7];
console.log(highestCount(arrayNum));
// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
  let cat1Tom = Math.abs(mouse - cat1);
  let cat2Jerry = Math.abs(mouse - cat2);
  let result = '';
  if (cat1Tom > cat2Jerry) {
    result = 'cat2';
  } else if (cat1Tom < cat2Jerry) {
    result = 'cat1';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}
console.log(catAndMouse(4, 9, 10));
// Desafio 8
function Numbers(arrayNumber) {
  let result;
  if (arrayNumber % 3 === 0 && arrayNumber % 5 === 0) {
    result = 'fizzBuzz';
  } else if (arrayNumber % 3 === 0) {
    result = 'fizz';
  } else if (arrayNumber % 5 === 0) {
    result = 'buzz';
  } else {
    result = 'bug!';
  }
  return result;
}
function fizzBuzz(Number) {
  let result = [];
  let verify;
  for (let index = 0; index < Number.length; index += 1) {
    verify = Numbers(Number[index]);
    result.push(verify);
  }
  return result;
}
let arrayNumber = [7, 9];
console.log(fizzBuzz(arrayNumber));

// Desafio 9
function encode(phraseconvert) {
  let convert = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let textonovo;
  textonovo = phraseconvert.replace(/a|e|i|o|u/g, function (index) {
    return convert[index];
  });
  return textonovo;
}

function decode(phraseconvert) {
  let convertNumber = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let textnumber;
  textnumber = phraseconvert.replace(/1|2|3|4|5/g, function (index) {
    return convertNumber[index];
  });
  return textnumber;
}
console.log(encode('hi there'));
console.log(decode('h3 th2r2!'));
// neste exercicio peguei exemplo de alguns alunos pois n entendia muito bem o comando replace

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
