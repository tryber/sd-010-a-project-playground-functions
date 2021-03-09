// Desafio 1
function compareTrue(values1, values2) {
  // seu código aqui
  if (values1 === true && values2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let result;
  result = (base * height) / 2;
  return result;
}

// Desafio 3
// pesquisei sobre o método no site https://www.w3schools.com/jsref/jsref_split.asp
function splitSentence(phrase) {
  // seu código aqui
  let phraseArray = [];
  phraseArray = phrase.split(' ');
  return phraseArray;
}

// Desafio 4
// Pesquisei sobre como pegar o último valor de um vetor aqui: https://pt.stackoverflow.com/questions/87416/como-retornar-o-%C3%BAltimo-registro-de-um-array-com-javascript-ou-jquery
// E sobre o método que concatena strings, pesquisei aqui: https://www.w3schools.com/jsref/jsref_concat_string.asp
function concatName(names) {
  // seu código aqui
  let arrayNames = [];
  arrayNames = names;
  let lastName = arrayNames[arrayNames.length - 1];
  let firstName = arrayNames[0];
  return `${lastName}, ${firstName}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let winsPoints = (wins * 3);
  let tiesPoints = (ties * 1);
  let score = (winsPoints + tiesPoints);
  return score;
}

// Desafio 6
// Pesquisei como função retornaria a quantidade de vezes que ele aparece no vetor no canal AlgoritmosAZ
// Link: https://youtu.be/pkJXwPvselI
function higherNumber(array) {
  let maior = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maior) {
      maior = array[index];
    }
  }
  return maior;
}

function contNumber(array, higher) {
  let cont = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === higher) {
      cont += 1;
    }
  }
  return cont;
}

function highestCount(array) {
  // seu código aqui
  let higher = higherNumber(array);
  let cont = contNumber(array, higher);
  return cont;
}

// Desafio 7
// A Função Math.abs pesquisei aqui: https://developer.mozilla.org/en-us/docs/web/javascript/reference/global_objects/math/abs
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanciaCat1 = Math.abs(mouse - cat1);
  let distanciaCat2 = Math.abs(mouse - cat2);
  let win;

  if (distanciaCat1 > distanciaCat2) {
    win = 'cat2';
    return win;
  } if (distanciaCat2 > distanciaCat1) {
    win = 'cat1';
    return win;
  }
  win = 'os gatos trombam e o rato foge';
  return win;
}

// Desafio 8
// Exercicio corrigido com a ajuda do código do Jodiel Briesemeister e com as dicas de Lucas Pedroso, Anderson Nascimento e Guilherme Dornelles
// Link: https://trybecourse.slack.com/archives/C01L16B9XC7/p1614728098441600
function compareDivison(numberBuzz) {
  let newBuzz;

  if (numberBuzz % 3 === 0 && numberBuzz % 5 === 0) {
    newBuzz = 'fizzBuzz';
  } else if (numberBuzz % 3 === 0) {
    newBuzz = 'fizz';
  } else if (numberBuzz % 5 === 0) {
    newBuzz = 'buzz';
  } else {
    newBuzz = 'bug!';
  }
  return newBuzz;
}

function fizzBuzz(arrayBuzz) {
  // seu código aqui
  let newBuzz = [];

  for (let index = 0; index < arrayBuzz.length; index += 1) {
    newBuzz.push(compareDivison(arrayBuzz[index]));
  }
  return newBuzz;
}

// Desafio 9
// Exercício corrigido com a ajuda do código do Felipe Flores
// Link: https://github.com/tryber/sd-010-a-project-playground-functions/pull/51/commits/f8cab22680dfa6837317bd33becd72b6efadb3f2
function encode(string) {
  let newphrases = string;
  let cont = '';
  let vogais = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  for (let index = 0; index < newphrases.length; index += 1) {
    if (vogais[newphrases[index].toLowerCase()]) {
      cont += vogais[newphrases[index]];
    } else {
      cont += newphrases[index];
    }
  }
  return cont;
}

function decode(string2) {
  // seu código aqui
  let newphrases2 = string2;
  let cont = '';
  let vogais = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  for (let index = 0; index < newphrases2.length; index += 1) {
    if (vogais[newphrases2[index].toLowerCase()]) {
      cont += vogais[newphrases2[index]];
    } else {
      cont += newphrases2[index];
    }
  }
  return cont;
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
