// Desafio 1
function compareTrue(firstBoolean, secondBoolean) {
  if (firstBoolean && secondBoolean) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(arrayName) {
  return (arrayName[arrayName.length - 1] + ', ' + arrayName[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(arrayNumbers) {
  let count = 0;
  let highestNumber = 0;
  for (let index in arrayNumbers) {
    if (arrayNumbers[index] > highestNumber) {
      highestNumber = arrayNumbers[index];
    }
  }
  for (let index in arrayNumbers) {
    if (arrayNumbers[index] === highestNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceOfCat1 = Math.abs(cat1 - mouse); // Pesquisado "always positive number javascript", resolução retirada de: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
  let distanceOfCat2 = Math.abs(cat2 - mouse);
  let str = '';
  if (distanceOfCat1 === distanceOfCat2) {
    str = 'os gatos trombam e o rato foge';
  } else if (distanceOfCat1 < distanceOfCat2) {
    str = 'cat1';
  } else {
    str = 'cat2';
  }
  return str;
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let strArray = [];
  for (let index in arrayNumbers) {
    if (arrayNumbers[index] % 3 === 0 && arrayNumbers[index] % 5 === 0) {
      strArray.push('fizzBuzz');
    } else if (arrayNumbers[index] % 3 === 0) {
      strArray.push('fizz');
    } else if (arrayNumbers[index] % 5 === 0) {
      strArray.push('buzz');
    } else {
      strArray.push('bug!');
    }
  }
  return strArray;
}

// Desafio 9
function encode(phrase) {
  let letters = phrase.split('');
  for (let index in letters) {
    switch (letters[index]) {
    case 'a':
      letters[index] = 1;
      break;
    case 'e':
      letters[index] = 2;
      break;
    case 'i':
      letters[index] = 3;
      break;
    case 'o':
      letters[index] = 4;
      break;
    case 'u':
      letters[index] = 5;
      break;
    default:
      break;
    }
  }
  return letters.join('');
}

function decode(phrase) {
  let letters = phrase.split('');
  for (let index in letters) {
    switch (letters[index]) {
    case '1':
      letters[index] = 'a';
      break;
    case '2':
      letters[index] = 'e';
      break;
    case '3':
      letters[index] = 'i';
      break;
    case '4':
      letters[index] = 'o';
      break;
    case '5':
      letters[index] = 'u';
      break;
    default:
      break;
    }
  }
  return letters.join('');
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
