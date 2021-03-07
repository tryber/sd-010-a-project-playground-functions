// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
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
  let words = [];
  let word = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === ' ') {
      words.push(word);
      word = '';
    } else if (index === (string.length - 1)) {
      word += string[index];
      words.push(word);
      word = '';
    } else {
      word += string[index];
    }
  }
  return words;
}

// Desafio 4
function concatName(string) {
  let first = string[string.length - 1];
  let last = string[0];
  return `${first}, ${last}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function highestNumber(array) {
  let maior = array[0];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maior) {
      maior = array[index];
    }
  }
  return maior;
}

function highestCount(array) {
  let maior = highestNumber(array);
  let count = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === maior) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = mouse - cat1;
  let dist2 = mouse - cat2;
  if (dist1 < 0) {
    dist1 *= (-1);
  }
  if (dist2 < 0) {
    dist2 *= (-1);
  }
  if (dist1 < dist2) {
    return 'cat1';
  }
  if (dist1 > dist2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fB(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'fizzBuzz';
  }
  if (number % 3 === 0) {
    return 'fizz';
  }
  if (number % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}

function fizzBuzz(array) {
  let strings = [];
  for (let index = 0; index < array.length; index += 1) {
    strings.push(fB(array[index]));
  }
  return strings;
}

// Desafio 9
function letterToNumber(letter) {
  let num = ['1', '2', '3', '4', '5'];
  let vowel = ['a', 'e', 'i', 'o', 'u'];
  for (let index = 0; index < num.length; index += 1) {
    if (letter === vowel[index]) {
      return num[index];
    }
  }
  return letter;
}

function numberToLetter(number) {
  let num = ['1', '2', '3', '4', '5'];
  let vowel = ['a', 'e', 'i', 'o', 'u'];
  for (let index = 0; index < num.length; index += 1) {
    if (number === num[index]) {
      return vowel[index];
    }
  }
  return number;
}

function encode(string) {
  let aux = '';
  for (let index = 0; index < string.length; index += 1) {
    aux += letterToNumber(string[index]);
  }
  return aux;
}

function decode(string) {
  let aux = '';
  for (let index = 0; index < string.length; index += 1) {
    aux += numberToLetter(string[index]);
  }
  return aux;
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
