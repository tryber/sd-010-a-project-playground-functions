// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  if (value1 === false || value2 === false) {
    return false;
  }
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
function concatName(stringList) {
  let concat = `${stringList[stringList.length - 1]}, ${stringList[0]}`;
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = ((wins * 3) + (ties));
  return points;
}

// Desafio 6
function highestCount(list) {
  let larger = Math.max(...list);
  let count = 0;
  for (let indexRepeat = 0; indexRepeat < list.length; indexRepeat += 1) {
    if (larger === list[indexRepeat]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = cat1 - mouse;
  let distCat2 = cat2 - mouse;
  distCat1 = Math.abs(distCat1);
  distCat2 = Math.abs(distCat2);
  if (distCat1 < distCat2) {
    return 'cat1';
  }
  if (distCat2 < distCat1) {
    return 'cat2';
  }
  if (distCat1 === distCat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(listNumber) {
  let listResult = [];
  for (let indexFizz = 0; indexFizz < listNumber.length; indexFizz += 1) {
    if ((listNumber[indexFizz] % 3) === 0 && (listNumber[indexFizz] % 5) !== 0) {
      listResult.push('fizz');
    } else if ((listNumber[indexFizz] % 5) === 0 && (listNumber[indexFizz] % 3) !== 0) {
      listResult.push('buzz');
    } else if ((listNumber[indexFizz] % 3) === 0 && (listNumber[indexFizz] % 5) === 0) {
      listResult.push('fizzbuzz');
    } else {
      listResult.push('bug!');
    }
  }
  return listResult;
}

// Desafio 9
function encode(phrase) {
  let arrayEncode = phrase
  .split('');
  for (let indexEncode = 0; indexEncode < arrayEncode.length; indexEncode += 1) {
    if (arrayEncode[indexEncode] === 'a') {
      arrayEncode[indexEncode] = 1;
    } else if (arrayEncode[indexEncode] === 'e') {
      arrayEncode[indexEncode] = 2;
    } else if (arrayEncode[indexEncode] === 'i') {
      arrayEncode[indexEncode] = 3;
    } else if (arrayEncode[indexEncode] === 'o') {
      arrayEncode[indexEncode] = 4;
    } else if (arrayEncode[indexEncode] === 'u') {
      arrayEncode[indexEncode] = 5;
    }
  }
  let phraseEncode = arrayEncode.join('');
  return phraseEncode;
}

function decode(phraseToDecode) {
  let arrayDecode = phraseToDecode.split('');
  for (let indexDecode = 0; indexDecode < arrayDecode.length; indexDecode += 1) {
    if (arrayDecode[indexDecode] == 1) {
      arrayDecode[indexDecode] = 'a';
    } else if (arrayDecode[indexDecode] == 2) {
      arrayDecode[indexDecode] = 'e';
    } else if (arrayDecode[indexDecode] == 3) {
      arrayDecode[indexDecode] = 'i';
    } else if (arrayDecode[indexDecode] == 4) {
      arrayDecode[indexDecode] = 'o';
    } else if (arrayDecode[indexDecode] == 5) {
      arrayDecode[indexDecode] = 'u';
    }
  }
  let decodePhrase = arrayDecode.join('');
  return decodePhrase;
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
