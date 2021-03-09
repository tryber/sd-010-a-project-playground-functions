// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

console.log(compareTrue(false, true));
console.log(compareTrue(false, false));
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

console.log(splitSentence('go Trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

// Desafio 4
function concatName(newArray) {
  return newArray[newArray.length - 1] + ', ' + newArray[0];
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(array) {
  // descobrir qual o maior número
  let maior = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maior) {
      maior = array[index];
    }
  }
  // percorrer array para saber quantas vezes o maior número se repete
  let maiorRepete = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (maior === array[i]) {
      maiorRepete += 1;
    }
  }
  return maiorRepete;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } else if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

console.log(catAndMouse(4, 7, 2));
console.log(catAndMouse(6, 0, 18));
console.log(catAndMouse(15, 20, 10));

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let fizzBuzzBug = [];
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] % 3 === 0 && arrayNumbers[index] % 5 !== 0) {
      fizzBuzzBug.push('fizz');
    } else if (arrayNumbers[index] % 5 === 0 && arrayNumbers[index] % 3 !== 0) {
      fizzBuzzBug.push('buzz');
    } else if (arrayNumbers[index] % 3 === 0 && arrayNumbers[index] % 5 === 0) {
      fizzBuzzBug.push('fizzBuzz');
    } else {
      fizzBuzzBug.push('bug!');
    }
  }
  return fizzBuzzBug;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([7, 9]));
console.log(fizzBuzz([9, 25]));

// Desafio 9
// Para realizar este exercício, contei com a ajuda e consulta ao código do aluno Lucas Godói - Turma 10 - Tribo A.
function encode(str) {
  let string = str.split('');
  let consoantes = ['a', 'e', 'i', 'o', 'u'];
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === consoantes[0]) {
      string[index] = '1';
    } else if (string[index] === consoantes[1]) {
      string[index] = '2';
    } else if (string[index] === consoantes[2]) {
      string[index] = '3';
    } else if (string[index] === consoantes[3]) {
      string[index] = '4';
    } else if (string[index] === consoantes[4]) {
      string[index] = '5';
    }
  }
  let concatenacao = string.join('');
  return concatenacao;
}

console.log(encode('hi there!'));

function decode(str) {
  let string = str.split('');
  let numeros = ['1', '2', '3', '4', '5'];
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === numeros[0]) {
      string[index] = 'a';
    } else if (string[index] === numeros[1]) {
      string[index] = 'e';
    } else if (string[index] === numeros[2]) {
      string[index] = 'i';
    } else if (string[index] === numeros[3]) {
      string[index] = 'o';
    } else if (string[index] === numeros[4]) {
      string[index] = 'u';
    }
  }
  let concatenacao = string.join('');
  return concatenacao;
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
