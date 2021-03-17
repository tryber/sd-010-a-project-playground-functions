// Desafio 1
function compareTrue(a, b) {
  if (a && b) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName(stringsArray) {
  return `${stringsArray[stringsArray.length - 1]}, ${stringsArray[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numbersArray) {
  let highNumber = Math.max.apply(null, numbersArray);
  let highNumberCount = 0;

  for (let index = 0; index < numbersArray.length; index += 1) {
    if (highNumber === numbersArray[index]) {
      highNumberCount += 1;
    }
  }
  return highNumberCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceFirstCat = Math.abs(mouse - cat1);
  let distanceSecondCat = Math.abs(mouse - cat2);

  if (distanceFirstCat > distanceSecondCat) {
    return 'cat2';
  }

  if (distanceFirstCat < distanceSecondCat) {
    return 'cat1';
  }

  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numbersArray) {
  return numbersArray.map((item) => {
    if ((item % 15) === 0) {
      return 'fizzBuzz';
    }
    if ((item % 3) === 0) {
      return 'fizz';
    }
    if ((item % 5) === 0) {
      return 'buzz';
    }
    return 'bug!';
  });
}

// Desafio 9
const letterToChange = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
}; // Colega Lucas Pedroso me deu uma luz na criação deste objeto

function encode(decodedString) {
  let output = decodedString;
  for (const letter in letterToChange) {
    if (letter) { //  verifica existência da chave
      const regex = `${letter}`;
      output = output.replace(RegExp(regex, 'gi'), letterToChange[letter]);
    }
  }
  return output;
}

function decode(encodedString) {
  let output = encodedString;
  for (const letter in letterToChange) {
    if (letter) { //  verifica existência da chave
      const regex = `${letter}`;
      output = output.replace(RegExp(letterToChange[letter], 'gi'), regex);
    }
  }
  return output;
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
