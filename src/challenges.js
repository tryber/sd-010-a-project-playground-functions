// Desafio 1

function compareTrue(n1, n2) {
  if (n1 === true && n2 === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
// usado material base para entendimento da solução https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName(arrayselect) {
  return arrayselect[arrayselect.length - 1] + ', ' + arrayselect[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
// 1. Achar o maior numero do array
// 2. contar a quantidade de vezes que ele aparece no array
function highestCount(arraynumber) {
  let maior = 0; 
  let cont = 0;

  for (let index = 0; index < arraynumber.length; index += 1){
    if (arraynumber[index] > maior) {
      maior = arraynumber[index]
    };
  }
  for (let index = 0; index < arraynumber.length; index += 1) {
    if (arraynumber[index] === maior) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let huntingrats = 0;
  if ((Math.abs(cat1 - mouse)) === (Math.abs(cat2 - mouse))) {
  huntingrats = "os gatos trombam e o rato foge";
  }
  if ((Math.abs(cat1 - mouse)) < (Math.abs(cat2 - mouse))) {
  huntingrats = "cat1";
  }
  if ((Math.abs(cat1 - mouse)) > (Math.abs(cat2 - mouse))) {
  huntingrats = "cat2";
  }
  return huntingrats; 
}

// Desafio 8
function fizzBuzz(arrayFizzBuzz) {
  let resultaArray = [];
  for (let index = 0; index < arrayFizzBuzz.length; index += 1) {
    if ((arrayFizzBuzz[index] % 3) === 0 && (arrayFizzBuzz[index] % 5) === 0) {
      resultaArray.push('fizzBuzz');
    } else if ((arrayFizzBuzz[index] % 3) === 0) {
      resultaArray.push('fizz');
    } else if ((arrayFizzBuzz[index] % 5) === 0) {
      resultaArray.push('buzz');
    } else {
      resultaArray.push('bug!');
    }
  } return resultaArray;
}

// Desafio 9
// logica do replaceAll encontrada no https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll e conforme ajuda no slack
function encode(encodeName) {
  encodeName = encodeName.replaceAll('a', '1').replaceAll('e', '2').replaceAll('i', '3').replaceAll('o', '4').replaceAll('u', '5');
  return encodeName;
}
  

function decode(encodeName) {
    encodeName = encodeName.replaceAll('1', 'a').replaceAll('2', 'e').replaceAll('3', 'i').replaceAll('4', 'o').replaceAll('5', 'u');
    return encodeName;
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
