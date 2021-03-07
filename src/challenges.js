// Desafio 1
function compareTrue(param01, param02) {
  if (param01 && param02 === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
// fiz com a aujda do plantão
function splitSentence(value) {
  return value.split(' ');
}

// Desafio 4
function concatName(lastFirst) {
  return lastFirst[lastFirst.length - 1] + ', ' + lastFirst[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let total = 0;

  if (wins > 0 && ties > 0) {
    total = (wins * 3) + (ties * 1);
  } else {
    total = 0;
  }
  return total;
}

// Desafio 6
function highestCount(num) {
  let bigNum = 0;
  let repeatNum = 0;

  for (let index in num) {
    if (num[index] >= bigNum) {
      bigNum = num[index];
    }
  }

  for (let i in num) {
    if (num[i] === bigNum) {
      repeatNum += 1;
    }
  }
  return repeatNum;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distan1 = Math.abs(cat1 - mouse);
  let distan2 = Math.abs(cat2 - mouse);

  if (distan1 > distan2) {
    return 'cat2';
  } if (distan1 < distan2) {
    return 'cat1';
  } if (distan1 === distan2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arrayNum) {
  let result = [];
  for (let index = 0; index < arrayNum.length; index += 1) {
    if (arrayNum[index] % 3 === 0 && arrayNum[index] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (arrayNum[index] % 3 === 0) {
      result.push('fizz');
    } else if (arrayNum[index] % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(encripta) {
  let cript = encripta.replace(/a/gi, '1')
    .replace(/e/gi, '2')
    .replace(/i/gi, '3')
    .replace(/o/gi, '4')
    .replace(/u/gi, '5');
  return cript;
}

function decode(decripta) {
  let decript = decripta.replace(/1/gi, 'a')
    .replace(/2/gi, 'e')
    .replace(/3/gi, 'i')
    .replace(/4/gi, 'o')
    .replace(/5/gi, 'u');
  return decript;
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
