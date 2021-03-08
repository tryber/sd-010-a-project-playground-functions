// Desafio 1
function compareTrue(value1, value2) {
  if ((value1 === true) && (value2 === true)) {
    return true;
  }
  return false;
}

console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}

console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(frase) {
  let resultado = frase.split(' ');
  return resultado;
}

console.log(splitSentence('vamo que vamo'));

// Desafio 4
function concatName(trocaPalavra) {
  let auxiliar = `${trocaPalavra[trocaPalavra.length - 1]}, ${trocaPalavra[0]}`;
  return auxiliar;
}

console.log(concatName(['foguete', 'não', 'tem', 'ré']));

// Desafio 5
function footballPoints(win, ties) {
  return (3 * win) + ties;
}

console.log(footballPoints(1, 2));

// Desafio 6
function encontraMaiorValorRepetido(valoresRecebidos) {
  let maiorValor = 0;
  for (let index = 0; index < valoresRecebidos.length; index += 1) {
    if (maiorValor < valoresRecebidos[index]) {
      maiorValor = valoresRecebidos[index];
    }
  }
  return maiorValor;
}

function highestCount(valoresRecebidos) {
  let count = 0;
  let maiorValor = encontraMaiorValorRepetido(valoresRecebidos);
  for (let index2 = 0; index2 < valoresRecebidos.length; index2 += 1) {
    if (maiorValor === valoresRecebidos[index2]) {
      count += 1;
    }
  }
  return count;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let diferencaCat1 = cat1 - mouse;
  let diferencaCat2 = cat2 - mouse;
  if (diferencaCat1 < 0) {
    diferencaCat1 *= -1;
  }
  if (diferencaCat2 < 0) {
    diferencaCat2 *= -1;
  }
  if (diferencaCat1 > diferencaCat2) {
    return 'cat2';
  }
  if (diferencaCat1 < diferencaCat2) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

console.log(catAndMouse(1, 0, 2));

// Desafio 8
function validaDivisibilidade(stringNumeros) {
  let fizzBuzzLightYear;
  if (stringNumeros % 3 === 0 && stringNumeros % 5 === 0) {
    fizzBuzzLightYear = 'fizzBuzz';
  } else if ((stringNumeros % 5) === 0) {
    fizzBuzzLightYear = 'buzz';
  } else if (stringNumeros % 3 === 0) {
    fizzBuzzLightYear = 'fizz';
  } else {
    fizzBuzzLightYear = 'bug!';
  }
  return fizzBuzzLightYear;
}

function fizzBuzz(stringNumeros) {
  let respostaFizzBuzz = [];
  let recebeFuncAnterior;
  for (let index = 0; index < stringNumeros.length; index += 1) {
    recebeFuncAnterior = validaDivisibilidade(stringNumeros[index]);
    respostaFizzBuzz.push(recebeFuncAnterior);
  }
  return respostaFizzBuzz;
}

console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode(frase) {
  let auxiliar = frase.split('');
  for (let index = 0; index < frase.length; index += 1) {
    switch (frase[index]) {
    case 'a':
      auxiliar[index] = '1'; break;
    case 'e':
      auxiliar[index] = '2'; break;
    case 'i':
      auxiliar[index] = '3'; break;
    case 'o':
      auxiliar[index] = '4'; break;
    case 'u':
      auxiliar[index] = '5'; break;
    default: break;
    }
  } return auxiliar.join('');
}

console.log(encode('hi there!'));

function decode(frase) {
  let auxiliar = frase.split('');
  for (let index = 0; index < frase.length; index += 1) {
    switch (frase[index]) {
    case '1':
      auxiliar[index] = 'a'; break;
    case '2':
      auxiliar[index] = 'e'; break;
    case '3':
      auxiliar[index] = 'i'; break;
    case '4':
      auxiliar[index] = 'o'; break;
    case '5':
      auxiliar[index] = 'u'; break;
    default: break;
    }
  } return auxiliar.join('');
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
