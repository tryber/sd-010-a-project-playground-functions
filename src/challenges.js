// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2 === true) {
    return true;
  }
    return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  let result = phrase.split(' ');

  return result;
}

// Desafio 4
function concatName(names) {
  let firstLastNames = names[names.length - 1].concat(', ',  names[0]);
  return firstLastNames;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointsWins = wins * 3;
  let sumPoints = pointsWins + ties;
  return sumPoints;
}

// Desafio 6
function highestCount(array) {
  let numberLarger = 0;
  let counter = 0;
  let amountNumberLarger = 0;
  for (let index = 1; index < array.length; index += 1) {
    if (array[counter] > array[index]) {
      numberLarger = array[counter];
    } else {
      numberLarger = array[index];
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (numberLarger === array[index]){
      amountNumberLarger += 1;
    }
  }
  return amountNumberLarger;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let firstCat = Math.abs(cat1 - mouse);
  let secondCat = Math.abs(cat2 - mouse);
  let phrases = ['cat1', 'cat2', 'os gatos trombam e o rato foge'];
  if (firstCat < secondCat) {
    return phrases[0];
  } 
  
  if (firstCat > secondCat){
    return phrases[1];
  } 
  
  if (firstCat === secondCat) {
    return phrases[2];
  }
}

// Desafio 8
function fizzBuzz(arrayNumber) {
  let arrayResult = [];
  for (let index = 0; index < arrayNumber.length; index += 1) {
    if (arrayNumber[index] % 3 === 0 && arrayNumber[index] % 5 != 0){
      arrayResult.push('fizz');
    } else if (arrayNumber[index] % 5 === 0 && arrayNumber[index] % 3 != 0) {
        arrayResult.push('buzz');
      } else if (arrayNumber[index] % 3 === 0 && arrayNumber[index] % 5 === 0) {
          arrayResult.push('fizzBuzz');
        } else {
            arrayResult.push('bug!')
          }
  }
  return arrayResult
}

// Desafio 9
function encode(stringEncode) {
  for (let index = 0; index < stringEncode.length; index += 1) {
    if (stringEncode[index] === 'a') {
      stringEncode = stringEncode.replace(stringEncode[index], '1');
    } else if (stringEncode[index] === 'e') {
        stringEncode = stringEncode.replace(stringEncode[index], '2');
      } else if (stringEncode[index] === 'i') {
          stringEncode = stringEncode.replace(stringEncode[index], '3');
        } else if (stringEncode[index] === 'o') {
            stringEncode = stringEncode.replace(stringEncode[index], '4');
          } else if (stringEncode[index] === 'u') {
              stringEncode = stringEncode.replace(stringEncode[index], '5');
            }       
  }  
  return stringEncode;
}

function decode(stringDecode) {
  for (let index = 0; index < stringDecode.length; index += 1) {
    if (stringDecode[index] === '1') {
      stringDecode = stringDecode.replace(stringDecode[index], 'a');
    } else if (stringDecode[index] === '2') {
        stringDecode = stringDecode.replace(stringDecode[index], 'e');
      } else if (stringDecode[index] === '3') {
          stringDecode = stringDecode.replace(stringDecode[index], 'i');
        } else if (stringDecode[index] === '4') {
            stringDecode = stringDecode.replace(stringDecode[index], 'o');
          } else if (stringDecode[index] === '5') {
              stringDecode = stringDecode.replace(stringDecode[index], 'u');
            }       
  }  
  return stringDecode;
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
