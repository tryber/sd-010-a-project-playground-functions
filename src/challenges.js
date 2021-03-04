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
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);
  if (distCat1 === distCat2) {
    return 'os gatos trombam e o rato foge';
  } if (distCat1 < distCat2) {
    return 'cat1';
  } if (distCat2 < distCat1) {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(arrayDivs) {
  // seu código aqui
  for (let i = 0; i < arrayDivs.length; i += 1) {
    if (arrayDivs[i] % 3 === 0 && arrayDivs[i] % 5 === 0) {
      arrayDivs[i] = 'fizzBuzz';
    } else if (arrayDivs[i] % 5 === 0) {
      arrayDivs[i] = 'buzz';
    } else if (arrayDivs[i] % 3 === 0) {
      arrayDivs[i] = 'fizz';
    } else {
      arrayDivs[i] = 'bug!';
    }
  }
  return arrayDivs;
}

// Desafio 9
function encode(frase) {
  // seu código aqui
  // https://www.devmedia.com.br/javascript-replace-substituindo-valores-em-uma-string/39176
  let Frase = frase.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  let frase1 = Frase.replace(/a/g, '1');
  let frase2 = frase1.replace(/e/g, '2');
  let frase3 = frase2.replace(/i/g, '3');
  let frase4 = frase3.replace(/o/g, '4');
  let frase5 = frase4.replace(/u/g, '5');
  let novaFrase = frase5;
  return novaFrase;
}
function decode(frase) {
  // seu código aqui
  let Frase = frase;
  let frase1 = Frase.replace(/1/g, 'a');
  let frase2 = frase1.replace(/2/g, 'e');
  let frase3 = frase2.replace(/3/g, 'i');
  let frase4 = frase3.replace(/4/g, 'o');
  let frase5 = frase4.replace(/5/g, 'u');
  let novaFrase = frase5;
  return novaFrase;
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
