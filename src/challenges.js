// Desafio 1
function compareTrue(number1, number2) {
  return (number1 === true && number2 === true);
}

// Desafio 2
function calcArea(base, height) {
  let area = 0;
  area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let array = [];
  array = sentence.split(' ');
  return array;
}

// Desafio 4
function concatName(concat) {
  let input = '';
  let number = concat.length;
  input = concat[number - 1] + ', ' + concat[0];
  return input;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  points = wins * 3 + ties;
  return points;
}

// Desafio 6
function highestCount(arrayCalc) {
  let counter = 0;
  let maior = arrayCalc[0];
  for (let index = 0; index < arrayCalc.length; index += 1) {
    if (arrayCalc[index] > maior) {
      maior = arrayCalc[index];
    }
  }
  for (let index = 0; index < arrayCalc.length; index += 1) {
    if (arrayCalc[index] === maior) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  } else if (Math.abs(cat2 - mouse) > Math.abs(cat1 - mouse)) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

function arrayFizzBuzz(array) {
  if (array % 3 === 0 && array % 5 !== 0) {
    return 'fizz';
  } if (array % 3 !== 0 && array % 5 !== 0) {
    return 'bug!';
  }
  return 'buzz';
}

// Desafio 8
function fizzBuzz(array) {
  let arrayfb = [];
  for (let key in array) {
    if (array[key] % 3 === 0 && array[key] % 5 === 0) {
      arrayfb.push('fizzBuzz');
    } else {
      arrayfb.push(arrayFizzBuzz(array[key]));
    }
  }
  return arrayfb;
}

// Desafio 9
function encode(phrase) {
  let inputPhrase = '';
  for (let key in phrase) {
    switch(phrase[key]) {
      case 'a' :
      inputPhrase += '1';
      break;
      case 'e' :
      inputPhrase += '2';
      break;
      case 'i' :
      inputPhrase += '3';
      break;
      case 'o' :
      inputPhrase += '4';
      break;
      case 'u' :
      inputPhrase += '5';
      break;
      default :
      inputPhrase += phrase[key];
    }
  }
  return inputPhrase;
}
function decode(phrase) {
  let inputPhrase = '';
  for (let key in phrase) {
    switch(phrase[key]) {
      case '1':
      inputPhrase += 'a';
      break;
      case '2' :
      inputPhrase += 'e';
      break;
      case '3' :
      inputPhrase += 'i';
      break;
      case '4' :
      inputPhrase += 'o';
      break;
      case '5' :
      inputPhrase += 'u';
      break;
      default :
      inputPhrase += phrase[key];
    }
  }
  return inputPhrase;
}

let nomes = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];

console.log(compareTrue(true, false));
console.log(calcArea(10, 50));
console.log(splitSentence('go Trybe'));
console.log(concatName(nomes));
console.log(footballPoints(14, 8));
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(catAndMouse(2, 4, 5));
console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(decode('h3 th2r2!'));
console.log(encode('hi there!'));

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
