// Desafio 1
function compareTrue(valueOne, valueTwo) {
  if (valueOne === true && valueTwo === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;

  return area;
}

// Desafio 3
function splitSentence(string) {
  let stringTranformed = string.split(' ');

  return stringTranformed;
}

// Desafio 4
function concatName(listName) {
  let indexLastName = listName.length;
  let lastName = listName[indexLastName - 1];
  let firstName = listName[0];
  let concatNames = `${lastName}, ${firstName}`;

  return concatNames;
}

// Desafio 5
function footballPoints(wins, ties) {
  let victory = 3;
  let draw = 1;
  let points = 0;

  if (wins > 0) {
    points += wins * victory;
  }

  if (ties > 0) {
    points += ties * draw;
  }

  return points;
}

// Desafio 6
function bigValue(listNumbers) {
  let valueHighest = listNumbers[0];

  for (let indexOne = 0; indexOne < listNumbers.length; indexOne += 1) {
    if (listNumbers[indexOne] > valueHighest) {
      valueHighest = listNumbers[indexOne];
    }
  }
  return valueHighest;
}
function highestCount(listNumbers) {
  let contRepete = 0;

  for (let indexTwo = 0; indexTwo < listNumbers.length; indexTwo += 1) {
    if (listNumbers[indexTwo] === bigValue(listNumbers)) {
      contRepete += 1;
    }
  }
  return contRepete;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);
  let inputCat = '';

  if (distCat1 > distCat2) {
    inputCat = 'cat2';
  } else if (distCat2 > distCat1) {
    inputCat = 'cat1';
  } else if (distCat2 === distCat1) {
    inputCat = 'os gatos trombam e o rato foge';
  }

  return inputCat;
}

// Desafio 8
function fizzBuzz(listNumbers) { // Porque isso nao passa no lint
  let listArrayString = [];
  for (let index in listNumbers) {
    if (listNumbers[index] % 3 === 0 && listNumbers[index] % 5 === 0) {
      listArrayString.push('fizzBuzz');
    } else if (listNumbers[index] % 3 === 0) {
      listArrayString.push('fizz');
    } else if (listNumbers[index] % 5 === 0) {
      listArrayString.push('buzz');
    } else {
      listArrayString.push('bug!');
    }
  }
  return listArrayString;
}

// Desafio 9
const codString = {
  1: 'a',
  2: 'e',
  3: 'i',
  4: 'o',
  5: 'u',
};
function encode(codStringCodif) { // Porque isso nao passa no lint
  let arrayCodif = codStringCodif.split('');
  for (let index = 0; index < arrayCodif.length; index += 1) {
    for (let indexObj in codString) {
      if (arrayCodif[index] === codString[indexObj]) {
        arrayCodif[index] = indexObj;
      }
    }
  }
  return arrayCodif.join('');
}
function decode(codStringDecodif) { // Porque isso nao passa no lint
  let arrayDecodif = codStringDecodif.split('');
  for (let indexArray = 0; indexArray < arrayDecodif.length; indexArray += 1) {
    for (let indexObj in codString) {
      if (arrayDecodif[indexArray] === indexObj) {
        arrayDecodif[indexArray] = codString[indexObj];
      }
    }
  }
  return arrayDecodif.join('');
}
console.log(encode('hello'));

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
