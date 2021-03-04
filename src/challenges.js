// Desafio 1
function compareTrue(num1, num2) {
  if (num1 === true && num2 === true) {
    return true;
  }
  return false;
}

console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

console.log(calcArea(5, 2));

// Desafio 3
function splitSentence(str) {
  let holdWord = '';
  let myArray = [];

  for (let index = 0; index < str.length; index += 1) {
    if (str[index] !== ' ') {
      holdWord += str[index];
    } else {
      myArray.push(holdWord);
      holdWord = '';
    }
  }
  myArray.push(holdWord);
  return myArray;
}
console.log(splitSentence('vamo que vamo'));

// Desafio 4
function concatName(str) {
  let myArray = [];
  let myString = '';

  myArray.push(str[str.length - 1]);
  myArray.push(str[0]);

  myString = myArray[0] + ', ' + myArray[1];
  return myString;
}

console.log(concatName(['foguete', 'não', 'tem', 'ré']));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(array) {
  let larger = 0;
  let count = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > larger) {
      larger = array[index];
    }
  }

  for (let index = 0; index < array.length; index += 1) {
    if (larger === array[index]) {
      count += 1;
    }
  }
  return count;
}

console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = cat1 - mouse;
  let distance2 = cat2 - mouse;

  if (distance1 < 0) {
    distance1 = -distance1;
  }
  if (distance2 < 0) {
    distance2 = -distance2;
  }
  if (distance1 > distance2) {
    return 'cat2';
  }
  if (distance1 < distance2) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}
// Desafio 8
function fizzBuzz(myArray) {
  let myResult = [];

  for (let index = 0; index < myArray.length; index += 1) {
    if (myArray[index] % 3 === 0 && myArray[index] % 5 !== 0) {
      myResult.push('fizz');
    } else if (myArray[index] % 3 !== 0 && myArray[index] % 5 === 0) {
      myResult.push('buzz');
    } else if (myArray[index] % 3 === 0 && myArray[index] % 5 === 0) {
      myResult.push('fizzBuzz');
    } else {
      myResult.push('bug!');
    }
  }
  return myResult;
}

console.log(fizzBuzz([7, 9]));

// Desafio 9
function encode(str) {
  let code = '';
  for (let index = 0; index < str.length; index += 1) {
    switch (str[index]) {
    case 'a':
      code += '1';
      break;
    case 'e':
      code += '2';
      break;
    case 'i':
      code += '3';
      break;
    case 'o':
      code += '4';
      break;
    case 'u':
      code += '5';
      break;
    default:
      code += str[index];
    }
  }
  return code;
}

console.log(encode('hi there!'));

function decode(str) {
  let decode = '';

  for (let index = 0; index < str.length; index += 1) {
    switch (str[index]) {
    case '1':
      decode += 'a';
      break;
    case '2':
      decode += 'e';
      break;
    case '3':
      decode += 'i';
      break;
    case '4':
      decode += 'o';
      break;
    case '5':
      decode += 'u';
      break;
    default:
      decode += str[index];
    }
  }
  return decode;
}

console.log(decode('h3 th2r2!'));

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
