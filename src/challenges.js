// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let newArray = array[array.length - 1] + ', ' + array[0];
  return newArray;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let tiesPoints = ties * 1;
  return winsPoints + tiesPoints;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let count = 0;
  let higherNumber = 0;

  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] > higherNumber) {
      higherNumber = arrayNumbers[index];
    }
  }
  for (let index2 = 0; index2 < arrayNumbers.length; index2 += 1) {
    if (arrayNumbers[index2] === higherNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
// Referência para o Math.abs: (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs).
function catAndMouse(mouse, cat1, cat2) {
  let positionCat1 = Math.abs(mouse - cat1);
  let positionCat2 = Math.abs(mouse - cat2);
  if (positionCat2 > positionCat1) return 'cat1';
  else if (positionCat1 > positionCat2) return 'cat2';
  else return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numbersArray) {
  let fizzBuzzArray = [];
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] % 3 === 0 && numbersArray[index] % 5 === 0) {
      fizzBuzzArray.push('fizzBuzz');
    } else if (numbersArray[index] % 3 === 0) {
      fizzBuzzArray.push('fizz');
    } else if (numbersArray[index] % 5 === 0) {
      fizzBuzzArray.push('buzz');
    } else {
      fizzBuzzArray.push('bug!');
    }
  }
  return fizzBuzzArray;
}

// Desafio 9
// Obtive ajuda para fazer este desafio no repositório de João Vitor Nascimento (Usuário no Github: nascjoao). Link: 
// https://github.com/tryber/sd-010-a-project-playground-functions/pull/132/files

function encode(string) {
  const vowels = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  let encoded = '';
  for (let letter in string) {
    if (vowels[string[letter]]) { //se encontrar (pelo for) a key (vogal) na string passada, adiciona o value (número) à variável encode.
      encoded += vowels[string[letter]];
    } else {
      encoded += string[letter];
    }
  }
  return encoded;
}

function decode(code) {
  const numbers = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' }; // mesmo código acima, apenas troca a key pelo value.
  let decoded = '';
  for (let symbol in code) {
    if (numbers[code[symbol]]) {
      decoded += numbers[code[symbol]];
    } else {
      decoded += code[symbol];
    }
  }
  return decoded;
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
