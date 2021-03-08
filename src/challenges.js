// Desafio 1
function compareTrue(option1, option2) {
  if (option1 === true && option2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(arrayString) {
  let string = `${arrayString[arrayString.length - 1]}, ${arrayString[0]}`;
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let vict = wins * 3;
  let empt = ties * 1;
  return vict + empt;
}

// Desafio 6
function highestCount(maxArray) {

  let numMax = Math.max.apply(Math, maxArray);
  let repetição = 0;

  for (let index = 0; index < maxArray.length; index += 1) {
    let numMax = Math.max.apply(Math, maxArray);
  }
  for (let i = 0; i < maxArray.length; i += 1) {
    if (maxArray[i] === numMax) {
      repetição += 1
    }
  }
  return repetição
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat2) < Math.abs(mouse - cat1)) {
    return 'cat2';
  } else if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge'
  }
}

// Desafio 8
function fizzBuzz(arraynum) {
  let strnum = [];
  for (let index = 0; index < arraynum.length; index += 1) {
    if (arraynum[index] % 3 === 0 && arraynum[index] % 5 === 0) {
      strnum.push('fizzBuzz');
    } else if (arraynum[index] % 3 === 0) {
      strnum.push('fizz');
    } else if (arraynum[index] % 5 === 0) {
      strnum.push('buzz');
    } else {
      strnum.push('bug!');
    }
  }
  return strnum;
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
