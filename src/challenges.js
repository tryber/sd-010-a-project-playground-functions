// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true){
    return true; }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4, tive ajuda dos colegas na breakroom do fechamento dia 2/03
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`; 
}

// Desafio 5
function footballPoints(wins,ties) {
  return (wins *3) + ties;
}

// Desafio 6
/* vezes que numero aparece
descobrir maior numero
 */
function highestCount(arrayNumber) {
  let guardaMaiorNumero = 0;
  let contaMaiorNumero = 0;

  for(let index = 0; index < arrayNumber.length; index += 1){
    if (arrayNumber[index] > guardaMaiorNumero){
      guardaMaiorNumero = arrayNumber[index]
    }
  }
  for(let index =0; index < arrayNumber.length; index += 1){
    if (arrayNumber[index] === guardaMaiorNumero){
      contaMaiorNumero += 1
    }
  }
  return contaMaiorNumero;
}
console.log(highestCount([2,5,6,8,9,9]))

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  let mouseForCat1 = Math.abs(mouse-cat1);
  let mouseForCat2 = Math.abs(mouse-cat2);

  if(mouseForCat1 < mouseForCat2){
    return "cat1"
  } else if (mouseForCat1 > mouseForCat2){
    return "cat2"
  } else if(mouseForCat1 == mouseForCat2) { 
    return "os gatos trombam e o rato foge"
  }
}

// Desafio 8
function fizzBuzz(arrayNumber) {
  let result = []

  for(let index in arrayNumber){  

    if (arrayNumber[index] % 3 === 0 && arrayNumber[index] % 5 === 0){
      result.push("fizzBuzz")
    } 
    else if (arrayNumber[index] % 3 === 0) {
      result.push("fizz")
    } 
    else if (arrayNumber[index] % 5 === 0){
      result.push("buzz")
    } 
    else {
      result.push("bug!")
    }
  }
  return result
}

// Desafio 9
function encodeReplace(letter) {
  let letters = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };

  for (let index in letters) {
    if (letter === index) {
      return letters[index];
    }
  }
  return letter;
}
function encode(string) {
  let encodedString = '';
  for (let index = 0; index < string.length; index += 1) {
    encodedString += encodeReplace(string[index]);
  }
  return encodedString;
}

function decodeReplace(letter) {
  let letters = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };

  for (let index in letters) {
    if (letter === letters[index].toString()) {
      return index;
    }
  }
  return letter;
}

function decode(string) {
  let decodedString = '';
  for (let index = 0; index < string.length; index += 1) {
    decodedString += decodeReplace((string[index]));
  }
  return decodedString;
}
console.log (decode('1p2n1s um teste'))

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
