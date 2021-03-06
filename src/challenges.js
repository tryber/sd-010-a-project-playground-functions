// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  let resultcalcArea = (base * height) / 2;
  return resultcalcArea;
}
console.log(calcArea(10, 50));

// Desafio 3
function splitSentence(string) {
  let separateSentece = [];
  separateSentece = string.split(' ');
  return separateSentece;
}
console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(strings) {
  const concatStrings1 = strings[0];
  const concatStrings2 = strings[(strings.length) - 1];
  return concatStrings2.concat(', ').concat(concatStrings1);
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}
console.log(footballPoints(1, 2));

// Desafio 6
function highestCount(numbers) {
  let maxNumber = 0;
  let contador = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maxNumber) {
      maxNumber = numbers[index];
    }
  }
  for (let index1 = 0; index1 < numbers.length; index1 += 1) {
    if (numbers[index1] === maxNumber) {
      contador += 1;
    }
  }
  return contador;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7 (fazer)
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  }
  if ((cat1 - mouse) > (cat2 - mouse)) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}
console.log(catAndMouse(1, 12, 6));

// Desafio 8
function fizzBuzz(numbers) {
  let modulo = [];
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      modulo.push('fizzBuzz');
    } else if (numbers[index] % 3 === 0) {
      modulo.push('fizz');
    } else if (numbers[index] % 5 === 0) {
      modulo.push('buzz');
    } else {
      modulo.push('bug!');
    }
  }
  return modulo;
}
console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode(string) {
  let aux = '';
  for (let index = 0; index < string.length; index += 1) {
    switch (string[index]) {
    case 'a':
      aux += 1;
      break;
    case 'e':
      aux += 2;
      break;
    case 'i':
      aux += 3;
      break;
    case 'o':
      aux += 4;
      break;
    case 'u':
      aux += 5;
      break;
    default:
      aux += string[index];
    }
  }
  return aux;
}
console.log(encode('Maria Baeta'));
function decode(string) {
  let letter = '';
  for (let index = 0; index < string.length; index += 1) {
    switch (string[index]) {
    case '1':
      letter += 'a';
      break;
    case '2':
      letter += 'e';
      break;
    case '3':
      letter += 'i';
      break;
    case '4':
      letter += 'o';
      break;
    case '5':
      letter += 'u';
      break;
    default:
      letter += string[index];
    }
  }
  return letter;
}
console.log(decode('M1r31 B12t1'));

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
