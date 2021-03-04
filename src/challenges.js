// Desafio 1
function compareTrue(test1, test2) {
  return test1 && test2;
}

// Desafio 2
function calcArea(base, heigt) {
  return (base * heigt) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  let word = '';
  let sentenceSplited = [];
  for (let index in sentence) {
    if (sentence[index] !== ' ') {
      word += sentence[index];
      index += 1;
    } else if (word !== '' || index === sentence.length - 1) {
      sentenceSplited.push(word);
      word = '';
    }
  }
  sentenceSplited.push(word);
  return sentenceSplited;
}

// Desafio 4
function concatName(originArray) {
  return `${originArray[originArray.length - 1]}, ${originArray[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(numbersArray) {
  let count = 0;
  let testNumber = numbersArray[0];
  for (let index in numbersArray) {
    if (testNumber < numbersArray[index]) {
      testNumber = numbersArray[index];
      count = 1;
    } else if (testNumber === numbersArray[index]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = Math.abs(mouse - cat1);
  let cat2Distance = Math.abs(mouse - cat2);
  let result;
  if (cat1Distance < cat2Distance) {
    result = 'cat1';
  } else if (cat1Distance > cat2Distance) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

// a função avalia se o número é divisivel por 3, 5, 3 e 5, nem 3 nem 5; retornando respectivamente: 'fizz', 'buzz', 'fizzBuzz' e 'bug!'
function caseFizzBuzz(numberAvalided) {
  let result = '';
  if (numberAvalided % 3 === 0) {
    result = 'fizz';
    if (numberAvalided % 5 === 0) {
      result = 'fizzBuzz';
    }
  } else if (numberAvalided % 5 === 0) {
    result = 'buzz';
  } else {
    result = 'bug!';
  }
  return result;
}

// Desafio 8
function fizzBuzz(numbersArray) {
  let word = '';
  let mensage = [];
  for (let index = 0; index < numbersArray.length; index += 1) {
    word = caseFizzBuzz(numbersArray[index]);
    mensage.push(word);
  }
  return mensage;
}

// Função verifica se caractere é uma vogal e retorna true se for e false se não for.
function isVogal(char) {
  return (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u');
}

// Desafio 9
function encode(decriptMensage) {
  let mensageEncripted = '';
  let codeDic = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  for (let index in decriptMensage) {
    if (isVogal(decriptMensage[index])) {
      mensageEncripted += codeDic[decriptMensage[index]];
    } else {
      mensageEncripted += decriptMensage[index];
    }
  }
  return mensageEncripted;
}

// Função verifica  o caratere correponte a um número de 1 a 5 e retorna true se for e false se não for.
function isNumber1to5(char) {
  return (char === '1' || char === '2' || char === '3' || char === '4' || char === '5');
}

function decode(encriptMensage) {
  let mensageDecripted = '';
  let decodeDic = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  for (let index in encriptMensage) {
    if (isNumber1to5(encriptMensage[index])) {
      mensageDecripted += decodeDic[encriptMensage[index]];
    } else {
      mensageDecripted += encriptMensage[index];
    }
  }
  return mensageDecripted;
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
