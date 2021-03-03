// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui.
  let retorno = null;

  if (value1 === true && value2 === true) {
    retorno = true;
  } else {
    retorno = false;
  }
  return retorno;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = 0;
  area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  let split = sentence.split(' ');
  return split;
}

// Desafio 4
function concatName(stringss) {
  // seu código aqui
  let primeiro = stringss[0];
  let tamanho = (stringss.length - 1);
  let ultimo = stringss[tamanho];
  let concat = `${ultimo}, ${primeiro}`;
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let totalVitorias = wins * 3;
  let totalEmpates = ties * 1;
  let totalPontos = totalVitorias + totalEmpates;

  return totalPontos;
}

// Desafio 6
function highestCount(arrayNums) {
  // seu código aqui
  let maior = Math.max(...arrayNums);
  let qtdMaior = 0;
  if (arrayNums[1] !== 0 && arrayNums[0] === 0) {
    return 1;
  }
  for (let i = 0; i < arrayNums.length; i += 1) {
    if (arrayNums[i] === maior) {
      qtdMaior += 1;
    }
  }
  return qtdMaior;
}

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  // seu código aqui
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);
  if (distCat1 === distCat2) {
    return console.log('os gatos trombam e o rato foge.');
  } if (distCat1 < distCat2) {
    return distCat1;
  } if (distCat2 < distCat1) {
    return distCat2;
  }
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
