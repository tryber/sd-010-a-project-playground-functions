// Desafio 1
function compareTrue(var1, var2) {
  let end = false;
  if (var1 === true && var2 === true) {
    end = true;
  } return end;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(word) {
  let splitted = word.split(' ');
  return splitted;
}

// Desafio 4
function concatName(word) {
  let lastNum = word.length - 1;
  let concatInt = [word[lastNum], word[0]];
  let concat = concatInt.join(', ');
  return (concat);
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((3 * wins) + (1 * ties));
}

// Função hiest para exercico 6
function highest(array) {
  let higherNumber = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > higherNumber) {
      higherNumber = array[index];
    }
  }
  return higherNumber;
}

// Desafio 6
function highestCount(array) {
  let highestNumber = highest(array);
  let count = 0;
  for (let index in array) {
    if (array[index] === highestNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(cat1 - mouse);
  let dist2 = Math.abs(cat2 - mouse);
  let result;
  if (dist1 > dist2) {
    result = 'cat2';
  } else if (dist2 > dist1) {
    result = 'cat1';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}
// decoberto a função Math.abs que retorna o módulo, no site: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs

// função complementar exercicio 8 para ver se numero é divisivel por 3
function numbDiv3(num) {
  let result = false;
  if (num % 3 === 0) {
    result = true;
  }
  return result;
}

// função complementar exercicio 8 para ver se numero é divisivel por 5
function numbDiv5(num) {
  let result = false;
  if (num % 5 === 0) {
    result = true;
  }
  return result;
}

// função complementar ao exercicio 8 para decidir qual palavra guardar no array
function writeArray(value) {
  let result;
  if (numbDiv3(value) === true && numbDiv5(value) === true) {
    result = 'fizzBuzz';
  } else if (numbDiv3(value) === true) {
    result = 'fizz';
  } else if (numbDiv5(value) === true) {
    result = 'buzz';
  } else {
    result = 'bug!';
  }
  return result;
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for (let index = 0; index < array.length; index += 1) {
    result.push(writeArray(array[index]));
  }
  return result;
}

// auxiliar desafio 9 encode
function replace(char) {
  let vog = ['a', 'e', 'i', 'o', 'u'];
  let numb = ['1', '2', '3', '4', '5'];
  for (let index = 0; index < vog.length; index += 1) {
    if (char === vog[index]) {
      char = numb[index];
    }
  }
  return char;
}

// auxiliar desafio 9 decode
function replaceDec(char) {
  let vog = ['a', 'e', 'i', 'o', 'u'];
  let numb = ['1', '2', '3', '4', '5'];
  for (let index = 0; index < vog.length; index += 1) {
    if (char === numb[index]) {
      char = vog[index];
    }
  }
  return char;
}

// Desafio 9
function encode(string) {
  let array = string.split('');
  let result = '';
  for (let index = 0; index < array.length; index += 1) {
    result += replace(array[index]);
  }
  return result;
}
function decode(string) {
  let array = string.split('');
  let result = '';
  for (let index = 0; index < array.length; index += 1) {
    result += replaceDec(array[index]);
  }
  return result;
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
