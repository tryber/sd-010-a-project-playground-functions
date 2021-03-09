// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}
// abaixo o print do resultado da função (false, nesse caso)
// console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// abaixo o print do resultado da função
// console.log(calcArea(10, 50));
// console.log(calcArea(5, 2));
// console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// console.log(splitSentence('go Trybe'));
// console.log(splitSentence('vamo que vamo'));
// console.log(splitSentence('foguete'));

// Desafio 4
function concatName(stringArray) {
  let lastItem = stringArray[stringArray.length - 1];
  let firstItem = stringArray[0];
  let space = ', ';
  return lastItem + space + firstItem;
}

// // console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
// // console.log(concatName(['foguete', 'não', 'tem', 'ré']));
// // console.log(concatName(['captain', 'my', 'captain']));

// // outra opção seria:
// function concatName(stringArray) {
//   return (stringArray[stringArray.length - 1]) + ', ' + stringArray[0];
// }

// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// console.log(footballPoints(14 , 8));
// console.log(footballPoints(1 , 2));
// console.log(footballPoints(0 , 0));

// Desafio 6
function highestCount(numberArray) {
  let highestNumber = Math.max.apply(null, numberArray);
  let repetion = 0;
  for (let index = 0; index < numberArray.length; index += 1) {
    if (highestNumber === numberArray[index]) {
      repetion += 1;
    }
  }
  return repetion;
}

// console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
// console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
// console.log(highestCount([0, 0, 0]));

// // por que não consigo printar o valor do highestNumber?
// console.log(highestNumber);

// por que ao utilizar let highestNumber = Math.max.apply(Math, numberArray)
// retorna Linha 60: Use the spread operator instead of '.apply()'.

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if ((Math.abs(mouse - cat1)) < (Math.abs(mouse - cat2))) {
    return 'cat1';
  }
  if ((Math.abs(mouse - cat2)) < (Math.abs(mouse - cat1))) {
    return 'cat2';
  }
  if ((Math.abs(mouse - cat1)) === (Math.abs(mouse - cat2))) {
    return 'os gatos trombam e o rato foge';
  }
}

// console.log(catAndMouse(5, 2, 3));
// console.log(catAndMouse(0, 6, 12));
// console.log(catAndMouse(0, -2, 2));

// Desafio 8
function fizzBuzz(numbers) {
  return numbers.map(function (num) {
    let result = 'bug!';
    if (num % 3 === 0 && num % 5 === 0) {
      result = 'fizzBuzz';
    } else if (num % 5 === 0) {
      result = 'buzz';
    } else if (num % 3 === 0) {
      result = 'fizz';
    }
    return result;
  });
}

// console.log(fizzBuzz([2, 15, 7, 9, 45]));
// console.log(fizzBuzz([7, 9]));
// console.log(fizzBuzz([9, 25]));

// Linha 98: Function 'fizzBuzz' has a complexity of 6. Maximum allowed is 5.
// Linha 98: Refactor this function to reduce its Cognitive Complexity from 7 to the 5 allowed.

// function fizzBuzz(numbers) {
//   let fizzBuzzArray = [];
//   for (let index = 0; index < numbers.length; index += 1) {
//     if ((numbers[index] % 3 === 0) && (numbers[index] % 5 === 0)) {
//       fizzBuzzArray.push('fizzBuzz');
//     } else if (numbers[index] % 5 === 0) {
//       fizzBuzzArray.push('buzz');
//     } else if (numbers[index] % 3 === 0) {
//       fizzBuzzArray.push('fizz');
//     } else {
//       fizzBuzzArray.push('bug!');
//     }
//   }
//   return fizzBuzzArray;
// }
// console.log(fizzBuzz([2, 15, 7, 9, 45]));
// console.log(fizzBuzz([7, 9]));
// console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode(parameter1) {
  let encodeObj = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return parameter1.replace(/[aeiou]/g, (m) => encodeObj[m]);
}
function decode(parameter2) {
  let decodeObj = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  return parameter2.replace(/[12345]/g, (m) => decodeObj[m]);
}

// console.log(encode('hi there!'));
// console.log(decode('h3 th2r2!'));

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
