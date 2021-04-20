/* eslint no-use-before-define: 2 */

// Desafio 1
function compareTrue(val1, val2) {
  if (val1 && val2) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(frase) {
  let str = '';
  str = frase;
  str += ' ';
  let letra = [];
  let armazenaPalavra = [];

  for (let index = 0; index < str.length; index += 1) {
    if (str[index] !== ' ') {
      letra += str[index];
    } else {
      armazenaPalavra.push(letra);
      letra = '';
    }
  }
  return armazenaPalavra;
}

// Desafio 4
function concatName(paramNomes) {

  let fullname = '';

  let primeiroAExibir = paramNomes[paramNomes.length - 1];
  let ultimoAExibir = paramNomes[0];
  let virg = ', ';
  fullname = primeiroAExibir + virg + ultimoAExibir;
  return fullname;
}
concatName(['Luiz', 'Felipe', 'Rodrigues', 'Araujo']);

// Desafio 5
function footballPoints(wins, ties) {
  let vit = wins * 3;
  let emp = ties;
  let sum = vit + emp;
  return sum;
}

// Desafio 6
function highestCount(numeros) {
  let arrayDeNum = [];
  arrayDeNum = numeros;
  let maiorNum = 0;
  let cont = 0;

  for (let index in arrayDeNum) {
    if (arrayDeNum[index] > maiorNum) {
      maiorNum = arrayDeNum[index];
    }
  }
  for (let index in arrayDeNum) {
    if (arrayDeNum[index] === maiorNum) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(cat1 - mouse);
  let dist2 = Math.abs(cat2 - mouse);

  if (dist1 > dist2) {
    return 'cat2';
  } if (dist1 < dist2) {
    return 'cat1';
  } return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(fizzBuzzParam) {
  let status = fizzBuzzParam;
  for (let index in fizzBuzzParam - 1) {
    status.push = fizzBuzzParam[index];
  }
  let symbols = [];
  for (let index in status) {
    if ((status[index] % 3 === 0) && (status[index] % 5 === 0)) {
      symbols.push('fizzBuzz');
    } else if (status[index] % 3 === 0) {
      symbols.push('fizz');
    } else if (status[index] % 5 === 0) {
      symbols.push('buzz');
    } else {
      symbols.push('bug!');
    }
  }
  return symbols;
}

// Desafio 9
function encode(frase) {
  let encodingPhrase = frase;
  let newPhrase = '';
  for (let index in encodingPhrase) {
    if (encodingPhrase[index] === 'a') {
      newPhrase += '1';
    } else if (encodingPhrase[index] === 'e') {
      newPhrase += '2';
    } else if (encodingPhrase[index] === 'i') {
      newPhrase += '3';
    } else if (encodingPhrase[index] === 'o') {
      newPhrase += '4';
    } else if (encodingPhrase[index] === 'u') {
      newPhrase += '5';
    } else {
      newPhrase += encodingPhrase[index];
    }
  } return newPhrase;
}

console.log(encode('eita'));

function decode(frase) {
  let encodingPhrase = frase;
  let newPhrase = '';
  for (let index in encodingPhrase) {
    if (encodingPhrase[index] === '1') {
      newPhrase += 'a';
    } else if (encodingPhrase[index] === '2') {
      newPhrase += 'e';
    } else if (encodingPhrase[index] === '3') {
      newPhrase += 'i';
    } else if (encodingPhrase[index] === '4') {
      newPhrase += 'o';
    } else if (encodingPhrase[index] === '5') {
      newPhrase += 'u';
    } else {
      newPhrase += encodingPhrase[index];
    }
  } return newPhrase;
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