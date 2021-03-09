// Desafio 1
function compareTrue(value1, value2) {
  let result = Boolean;
  if (value1 && value2 === true) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// // Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName(phraseList) {
  return phraseList[phraseList.length - 1] + ', ' + phraseList[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = ((wins * 3) + (ties * 1));
  return points;
}

// Desafio 6
function highestCount(numberList) {
  let maxNumber = Math.max(...numberList);
  let countNumber = 0;
  for (let index = 0; index < numberList.length; index += 1) {
    if (numberList[index] === maxNumber) {
      countNumber += 1;
    }
  }
  return countNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = Math.abs(mouse - cat1);
  let cat2Distance = Math.abs(mouse - cat2);
  let resultCats = '';
  if (cat1Distance > cat2Distance) {
    resultCats = 'cat2';
  } else if (cat2Distance > cat1Distance) {
    resultCats = 'cat1';
  } else {
    resultCats = 'os gatos trombam e o rato foge';
  }
  return resultCats;
}

// Desafio 8
function fizzBuzz(arrayNumberList) {
  let fizzCode = [];
  for (let indice = 0; indice < arrayNumberList.length; indice += 1) {
    if ((arrayNumberList[indice] % 3 === 0) && (arrayNumberList[indice] % 5 === 0)) {
      fizzCode.push('fizzBuzz');
    } else if (arrayNumberList[indice] % 3 === 0) {
      fizzCode.push('fizz');
    } else if (arrayNumberList[indice] % 5 === 0) {
      fizzCode.push('buzz');
    } else {
      fizzCode.push('bug!');
    }
  }
  return fizzCode;
}

// Desafio 9
function encode(string) {
  let stringOut = [];
  let stringIn = string.split('');
  for (let index = 0; index < stringIn.length; index += 1) {
    switch (stringIn[index]) {
    case 'a':
      stringOut += '1';
      break;
    case 'e':
      stringOut += '2';
      break;
    case 'i':
      stringOut += '3';
      break;
    case 'o':
      stringOut += '4';
      break;
    case 'u':
      stringOut += '5';
      break;
    default:
      stringOut += stringIn[index];
    }
  }
  return stringOut;
}

function decode(stringBack) {
  let stringOut = [];
  let stringIn = stringBack.split('');
  for (let index = 0; index < stringIn.length; index += 1) {
    switch (stringIn[index]) {
    case '1':
      stringOut += 'a';
        break;
    case '2':
      stringOut += 'e';
      break;
    case '3':
      stringOut += 'i';
      break;
    case '4':
      stringOut += 'o';
      break;
    case '5':
      stringOut += 'u';
      break;
    default:
      stringOut += stringIn[index];
    }
  }
  return stringOut;
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
