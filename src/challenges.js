// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  let word = '';
  let separatedWords = [];
  for (let index = 0; index < frase.length; index += 1) {
    if (frase[index] !== ' ') {
      word += frase[index];
    }
    if ((frase[index] === ' ') || (index === frase.length-1)) {
      separatedWords.push(word);
      word = '';
    }
  }
  return separatedWords;
}

// Desafio 4
function concatName(words) {
  return words[words.length - 1] + ', ' + words[0];  
}

// Desafio 5
function footballPoints(wins, ties) {
  return 3 * wins + ties;
}

// Desafio 6
function highestCount(numbers) {
  let maiorNum = numbers[0];
  let timesRepeat = 0;
  for (let num in numbers) {
    if (numbers[num] > maiorNum) {
      maiorNum = numbers[num];
    }
  }
  for (let indexNumber = 0; indexNumber < numbers.length; indexNumber += 1) {
    if (numbers[indexNumber] === maiorNum) {
      timesRepeat += 1;
    }
  }
  return timesRepeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs(cat1 - mouse);
  let distance2 = Math.abs(cat2 - mouse);
  if (distance1 < distance2) {
    return 'cat1';
  } else if (distance1 > distance2) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let arrayFizzBuzz = [];
  for (let indice = 0; indice < arrayNumbers.length; indice += 1) {
    if (arrayNumbers[indice] % 3 === 0) {
      if (arrayNumbers[indice] % 5 === 0) {
        arrayFizzBuzz.push('fizzBuzz');
      } else {
        arrayFizzBuzz.push('fizz');
      }
    } else if (arrayNumbers[indice] % 5 === 0) {
      arrayFizzBuzz.push('buzz');
    } else {
      arrayFizzBuzz.push('bug!');
    }
  }
  return arrayFizzBuzz;
}

// Desafio 9
function encode(stringEncode) {
  stringEncode = stringEncode.replace(/a/g, '1');
  stringEncode = stringEncode.replace(/e/g, '2');
  stringEncode = stringEncode.replace(/i/g, '3');
  stringEncode = stringEncode.replace(/o/g, '4');
  stringEncode = stringEncode.replace(/u/g, '5');

  return stringEncode;
}

function decode(stringDecode) {
  stringDecode = stringDecode.replace(/1/g, 'a');
  stringDecode = stringDecode.replace(/2/g, 'e');
  stringDecode = stringDecode.replace(/3/g, 'i');
  stringDecode = stringDecode.replace(/4/g, 'o');
  stringDecode = stringDecode.replace(/5/g, 'u');

  return stringDecode;
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
