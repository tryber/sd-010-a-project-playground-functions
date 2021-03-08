// Desafio 1
function compareTrue(value1, value2) {
  if (value1 == true && value2 == true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(blackHole) {
  return blackHole.split(' ');
}

// Desafio 4
function concatName(info) {
  return `${info[info.length - 1]}, ${info[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numbers) {
  let highNumber = 0;
  let count = 0;

  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > highNumber) {
      highNumber = numbers[index];
    }
  }

  for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] === highNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let positionOne = Math.abs(cat1 - mouse);
  let positionTwo = Math.abs(cat2 - mouse);

  if (positionOne < positionTwo) {
    return 'cat1';
  } else if (positionOne > positionTwo) {
    return 'cat2';
  } else if (positionTwo === positionOne) {
    return ('os gatos trombam e o rato foge');
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  let words = [];
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      words.push('fizzBuzz');
    } else if (numbers[index] % 3 === 0) {
      words.push('fizz');
    } else if (numbers[index] % 5 === 0) {
      words.push('buzz');
    } else {
      words.push('bug!');
    }
  }
  return words;
}

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
