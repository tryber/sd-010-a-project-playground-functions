// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
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
function concatName(arr) {
  let str = '';
  str += `${arr[arr.length - 1]}, ${arr[0]}`;
  return str;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 + ties * 1);
}

// Desafio 6
function highestCount(arr) {
  let higherNum = Math.max(...arr);
  let count = 0;
  for (let index = 0; index < arr.length; index += 1) {
    if (higherNum === arr[index]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  }
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function buzzFizz(num) {
  switch (true) {
  case (num % 3 === 0 && num % 5 === 0):
    return 'fizzBuzz';
  case (num % 3 === 0):
    return 'fizz';
  case (num % 5 === 0):
    return 'buzz';
  default:
    return 'bug!';
  }
}

function fizzBuzz(arr) {
  let str = [];
  for (let index = 0; index < arr.length; index += 1) {
    str.push(buzzFizz(arr[index]));
  }
  return str;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(encodestr) {
  let codestr = '';
  let code = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  for (let index = 0; index < encodestr.length; index += 1) {
    if (code[encodestr[index]] === undefined) {
      codestr += encodestr[index];
    } else {
      codestr += code[encodestr[index]];
    }
  }
  return codestr;
}

function decode(decodestr) {
  let decodedstr = '';
  let code1 = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  for (let index = 0; index < decodestr.length; index += 1) {
    if (code1[decodestr[index]] === undefined) {
      decodedstr += decodestr[index];
    } else {
      decodedstr += code1[decodestr[index]];
    }
  }
  return decodedstr;
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
