// Desafio 1
function compareTrue(teamFlamengoChampion, teamInterNoChampion) {
  if (teamFlamengoChampion && teamInterNoChampion === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3 - Aprendi a usar o SPLIT no site https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254
function splitSentence(frase, fraseSplit) {
  fraseSplit = frase.split(' ');
  return fraseSplit;
}

// Desafio 4
function concatName(listaDeNomes, ultimoPrimeiroNome) {
  ultimoPrimeiroNome = listaDeNomes[listaDeNomes.length - 1] + ', ' + listaDeNomes[0];
  return ultimoPrimeiroNome;
}

// Desafio 5
function footballPoints(wins, ties, score) {
  score = wins * 3 + ties * 1;
  return score;
}

// Desafio 6 - Entendi melhor sobre o Math.max neste link https://www.youtube.com/watch?v=IY7TRbXLU6c
function highestCount(conjuntoNumeros) {
  let quantidadeVezes = 0;
  let maiorNumero = Math.max(...conjuntoNumeros);
  for (let index = 0; index < conjuntoNumeros.length; index += 1) {
    if (maiorNumero === conjuntoNumeros[index]) {
      quantidadeVezes += 1;
    }
  }
  return quantidadeVezes;
}

// Desafio 7 - Entendi melhor sobre o Math.abs neste link https://www.youtube.com/watch?v=DvNeAlmJ3ZU
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(mouse - cat1);
  let distanciaCat2 = Math.abs(mouse - cat2);
  if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  }
  if (distanciaCat2 < distanciaCat1) {
    return 'cat2';
  }
  if (distanciaCat1 === distanciaCat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(sequenciaNumeros) {
  let sequenciaStrings = [];
  for (let index = 0; index < sequenciaNumeros.length; index += 1) {
    if (sequenciaNumeros[index] % 3 === 0 && sequenciaNumeros[index] % 5 === 0) {
      sequenciaStrings.push('fizzBuzz');
    } else if (sequenciaNumeros[index] % 3 === 0) {
      sequenciaStrings.push('fizz');
    } else if (sequenciaNumeros[index] % 5 === 0) {
      sequenciaStrings.push('buzz');
    } else {
      sequenciaStrings.push('bug!');
    }
  }
  return sequenciaStrings;
}

// Desafio 9
function encode(trocaLetrasPorNumeros) {
  for (let index = 0; index < trocaLetrasPorNumeros.length; index += 1) {
    switch (trocaLetrasPorNumeros) {
      case (trocaLetrasPorNumeros[index] === 'a'):
        trocaLetrasPorNumeros[index] = '1';
      break;
    }
    switch (trocaLetrasPorNumeros) {
      case (trocaLetrasPorNumeros[index] === 'e'):
        trocaLetrasPorNumeros[index] = '2';
      break;
    } 
    switch (trocaLetrasPorNumeros) {
      case (trocaLetrasPorNumeros[index] === 'i'):
        trocaLetrasPorNumeros[index] = '3';
      break;
    }
    switch (trocaLetrasPorNumeros) {
      case (trocaLetrasPorNumeros[index] === 'o'):
        trocaLetrasPorNumeros[index] = '4';
      break;
    }
    switch (trocaLetrasPorNumeros) {
      case (trocaLetrasPorNumeros[index] === 'u'):
        trocaLetrasPorNumeros[index] = '5';
      break;
    }
  }
  return trocaLetrasPorNumeros;
}

function decode(trocaNumerosPorLetras) {
  for (let index = 0; index < trocaNumerosPorLetras.length; index += 1) {
    switch (trocaNumerosPorLetras) {
      case (trocaNumerosPorLetras[index] === '1'):
        trocaNumerosPorLetras[index] = 'a';
      break;
    }
    switch (trocaNumerosPorLetras) {
      case (trocaNumerosPorLetras[index] === '2'):
        trocaNumerosPorLetras[index] = 'e';
      break;
    } 
    switch (trocaNumerosPorLetras) {
      case (trocaNumerosPorLetras[index] === '3'):
        trocaNumerosPorLetras[index] = 'i';
      break;
    }
    switch (trocaNumerosPorLetras) {
      case (trocaNumerosPorLetras[index] === '4'):
        trocaNumerosPorLetras[index] = 'o';
      break;
    }
    switch (trocaNumerosPorLetras) {
      case (trocaNumerosPorLetras[index] === '5'):
        trocaNumerosPorLetras[index] = 'u';
      break;
    }
  }
  return trocaNumerosPorLetras;
}

// Não foi dessa vez que copnsegui 100%. Obtive apenas 80%.
// Fico satisfeito por enquanto. Obrigado pelo desafio equipe Trybe.

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
