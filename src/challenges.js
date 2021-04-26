// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
}
console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  let phraseArray = string.split(' ');
  return phraseArray;
}
console.log(splitSentence('Go Trybe'));
// *Como usar o split: https://www.guj.com.br/t/o-metodo-split/100456

// Desafio 4
function concatName(string) {
  let name = string;
  name = (`${string[string.length - 1]}, ${string[0]}`);
  return name;
}
console.log(concatName(['foguete', 'não', 'tem', 'ré']));

// ou:
// function concatName(string){
// result = string[(string.length - 1)] + ", " + string[0];
// return result

// Concatenar String em JS:
// https://pt.stackoverflow.com/questions/231359/qual-a-forma-correta-de-concatenar-strings-em-javascript
// https://wesbos.com/javascript-template-strings

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties * 1);
  return points;
}
console.log(footballPoints(14, 8));

// Desafio 6
// function highestCount(){
function heightNumber(numbers) {
  let height = 0;
  for (let index in numbers) {
    if (numbers[index] > height) {
      height = numbers[index];
    }
  }
  return height;
}
function highestCount(numbers) {
  let firstheight = heightNumber(numbers);
  let counter = 0;
  for (let index2 in numbers) {
    if (firstheight === numbers[index2]) {
      counter += 1;
    }
  }
  return counter;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
// *Função para obter o maior valor https://pt.stackoverflow.com/questions/99193/valor-em-array-com-a-maior-ocorr%C3%AAncia

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse); // Para obter o valor absoluto de um número em JavaScript.
  let distanceCat2 = Math.abs(cat2 - mouse);
  let result = '';
  if (distanceCat1 < distanceCat2) {
    result = 'cat1';
  } else if (distanceCat2 < distanceCat1) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}
console.log(catAndMouse(10, 2, 1));

// Desafio 8
// function fizzBuzz() {
function find(findBuzz) {
  if (findBuzz % 3 === 0 && findBuzz % 5 === 0) {
    return 'fizzBuzz';
  } if (findBuzz % 3 === 0) {
    return 'fizz';
  } if (findBuzz % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}
function fizzBuzz(numbers) {
  let array = [];
  for (let index = 0; index < numbers.length; index += 1) {
    array.push(find(numbers[index]));
  }
  return array;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// * Resolução baseada em discussão no slack: https://trybecourse.slack.com/archives/C01L16B9XC7/p1614728098441600

// Desafio 9
function encode(string) {
  let letters = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  let phrase = '';
  for (let index in string) {
    if (letters[string[index]]) {
      phrase += letters[string[index]];
    } else {
      phrase += string[index];
    }
  }
  return phrase;
}
console.log(encode('hi there!'));
function decode(newString) {
  let letters = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let secondPhrase = '';
  for (let index in newString) {
    if (letters[newString[index]]) {
      secondPhrase += letters[newString[index]];
    } else {
      secondPhrase += newString[index];
    }
  }
  return secondPhrase;
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
