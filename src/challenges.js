// Desafio 1
function compareTrue(val1, val2) {
  if (val1 === true && val2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
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
      letra = [];
    }
  }
  return armazenaPalavra;
}

splitSentence('Eita Nois');

// Desafio 4
function concatName(paramNomes) {
  return `${paramNomes[paramNomes.length - 1]}, ${paramNomes[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let vit = wins * 3;
  let emp = ties;
  return vit + emp;
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
  let dist1 = cat1 - mouse;
  let dist2 = cat2 - mouse;
  if (dist1 < 0) {
    dist1 *= -1;
  } if (dist2 < 0) {
    dist2 *= -1;
  }
  if (dist1 > dist2) {
    return 'cat2';
  } if (dist1 === dist2) {
    return 'os gatos trombam e o rato foge';
  } return 'cat1';
}

// Desafio 8
function fizzBuzz(paramNumbers) {
  let arrayDeNumeros = [];
  for (let index in paramNumbers) {
    if (paramNumbers[index] % 3 === 0 && paramNumbers[index] % 5 === 0) {
      arrayDeNumeros.push('fizzBuzz');
    } else if (paramNumbers[index] % 3 === 0) {
      arrayDeNumeros.push('fizz');
    } else if (paramNumbers[index] % 5 === 0) {
      arrayDeNumeros.push('buzz');
    } else {
      arrayDeNumeros.push('bug!');
    }
  }
  return arrayDeNumeros;
}
// Desafio 9
function encode(frase) {
  let encodingPhrase = string.split('');

  for (let index in encodingPhrase) {
    if (encodingPhrase[index] === 'a') {
      encodingPhrase[index] = 1;
    } else if (encodingPhrase[index] === 'e') {
      encodingPhrase[index] = 2;
    } else if (encodingPhrase[index] === 'i') {
      encodingPhrase[index] = 3;
    } else if (encodingPhrase[index] === 'o') {
      encodingPhrase[index] = 4;
    } else if (encodingPhrase[index] === 'u') {
      encodingPhrase[index] = 5;
    }
  }
  return encodingPhrase.join('');
}

function decode(string) {
  let splitStringArray = string.split('');
  for (let index in splitStringArray) {
    if (splitStringArray[index] === '1') {
      splitStringArray[index] = 'a';
    } else if (splitStringArray[index] === '2') {
      splitStringArray[index] = 'e';
    } else if (splitStringArray[index] === '3') {
      splitStringArray[index] = 'i';
    } else if (splitStringArray[index] === '4') {
      splitStringArray[index] = 'o';
    } else if (splitStringArray[index] === '5') {
      splitStringArray[index] = 'u';
    }
  }
  return splitStringArray.join('');
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
