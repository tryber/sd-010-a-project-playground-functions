// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(sentence) {
  let splitedWord = sentence.split(' ');
  return splitedWord;
}

// Desafio 4
function concatName(name) {
  let lastItem = name[name.length - 1];
  let firstItem = name[0];
  let ponctuation = ', ';
  return lastItem + ponctuation + firstItem;
}

// Desafio 5
function footballPoints(wins, ties) {
  let score = (wins * 3) + (ties * 1);
  return score;
}

// Desafio 6
function highestCount(sequence) {
  let max = Math.max.apply(null, sequence);
  console.log(max);
  let addRep = 0;
  for (let index = 0; index < sequence.length; index += 1) {
    if (max === sequence[index]) {
      addRep += 1;
    }
  }
  return addRep;
}
console.log(highestCount([10, 10, 9, 8, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(mouse - cat1);
  let dist2 = Math.abs(mouse - cat2);
  if (dist1 < dist2) {
    return 'cat1';
  } if (dist2 < dist1) {
    return 'cat2';
  } if (dist1 === dist2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(number) {
  if (number % 3) {
  return 'fizz';
} if (number % 5) {
  return 'buzz';
} if (number % 3 && number % 5) {
  return 'fizzBuzz';
} if (number % 3 && number % 5) {
  return 'bug!';
}

// Desafio 9
function encode(encodeArray) {
  let encodeDone = 0;
  for (var index = 0; index < sentenceArray.length; index += 1) {
    if (sentenceArray[index])
    a 1
    e 2
    i 3
    o 4
    u 5
  }
}
function decode(decodeArray) {
  let encodeDone = 0;
1 a
2 e
3 i
4 o
5 u
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