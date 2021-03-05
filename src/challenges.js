// Desafio 1
function compareTrue(valueA, valueB) {
  return !!((valueA === true) && (valueB === true));
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(words) {
  const str = `${words.pop()}, ${words.shift()}`;
  return str;
}

// Desafio 5
function footballPoints(wins, ties) {
  let teamWins = wins * 3;
  let teamTies = ties * 1;
  return teamWins + teamTies;
}

// Desafio 6
function highestCount(numbers) {
  let count = 0;
  let higherNumber = Math.max.apply(Math, numbers);
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === higherNumber) {
      count += 1;
    }
  }
  return count;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);
  if (distCat1 < distCat2) {
    return 'cat1';
  } if (distCat2 < distCat1) {
    return 'cat2';
  } if (distCat1 === distCat2) {
    return 'os gatos trombam e o rato foge';
  }
}
// Desafio 8
function fizzBuzz(numbers) {
  let newArray = [];
  for (let index = 0; index < numbers.length; index += 1) {
    if ((numbers[index] % 3 === 0) && (numbers[index] % 5 === 0)) {
      newArray.push('fizzBuzz');
    } else if (numbers[index] % 5 === 0) {
      newArray.push('buzz');
    } else if (numbers[index] % 3 === 0) {
      newArray.push('fizz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}
// Desafio 9
function encode(phrase) {
  let letterA = phrase.replace(/a/g, '1');
  let letterE = letterA.replace(/e/g, '2');
  let letterI = letterE.replace(/i/g, '3');
  let letterO = letterI.replace(/o/g, '4');
  let letterU = letterO.replace(/u/g, '5');
  return letterU;
}
function decode(phrase) {
  let letterA = phrase.replace(/1/g, 'a');
  let letterE = letterA.replace(/2/g, 'e');
  let letterI = letterE.replace(/3/g, 'i');
  let letterO = letterI.replace(/4/g, 'o');
  let letterU = letterO.replace(/5/g, 'u');
  return letterU;
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
