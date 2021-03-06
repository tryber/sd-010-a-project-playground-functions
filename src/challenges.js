// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}
console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}
console.log(calcArea(10, 50));

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
console.log(splitSentence('foguete'));

// Desafio 4
function concatName(stringArrays) {
  let Array = `${stringArrays[stringArrays.length - 1]}, ${stringArrays[0]}`;
  return Array;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let tiesPoints = ties * 1;
  return winsPoints + tiesPoints;
}
console.log(footballPoints(14, 8));

// Desafio 6
function highestNumber(arrayNum) {
  let highest = 0;
  for (let num of arrayNum) if (num >= highest) highest = num;
  return highest;
}
function highestCount(array) {
  let highNum = highestNumber(array);
  let highNumCount = 0;
  for (let num of array) if (num === highNum) highNumCount += 1;
  return highNumCount;
}

let arrayNum = [9, 1, 2, 8, 9, 5, 7];
console.log(highestCount(arrayNum));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Case = Math.abs(mouse - cat1); // consegui realizar essa etapa do desafio graças a documentação https://cutt.ly/jl8nnAr
  let cat2Case = Math.abs(mouse - cat2);
  let result = '';
  if (cat1Case > cat2Case) {
    result = 'cat2';
  } else if (cat1Case < cat2Case) {
    result = 'cat1';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}
console.log(catAndMouse(4, 6, 8));

// Desafio 8
function arrayVerify(numToVerify) {
  let result;
  if (numToVerify % 3 === 0 && numToVerify % 5 === 0) {
    result = 'fizzBuzz';
  } else if (numToVerify % 3 === 0) {
    result = 'fizz';
  } else if (numToVerify % 5 === 0) {
    result = 'buzz';
  } else {
    result = 'bug!';
  }
  return result;
}
function fizzBuzz(array) {
  let result = [];
  let verification;
  for (let index = 0; index < array.length; index += 1) {
    verification = arrayVerify(array[index]);
    result.push(verification);
  }
  return result;
}
let numToVerify = [2, 15, 7, 9, 45];
console.log(fizzBuzz(numToVerify));

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
