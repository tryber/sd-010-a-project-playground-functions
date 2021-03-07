// Desafio 1
function compareTrue(param1, param2) {
  return (param1 && param2);
}

// Desafio 2
function calcArea(base, height) {
  return (base*height/2);
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(arrayDeStrings) {
 return `${arrayDeStrings[arrayDeStrings.length - 1]}, ${arrayDeStrings[0]}` 
} // pesquisado no youtube - https://www.youtube.com/watch?v=ORI_HTXaIw0

// Desafio 5
function footballPoints(win, ties) {
  return (win*3)+ties
}

// Desafio 6
function highestCount(arr) {

let biggestNumber = 0;
let repetitionCount = 0;

for (let index = 0; index < arr.length; index += 1) {
  if (arr[index] > biggestNumber) {
    biggestNumber = arr[index]
  }
}

for (let index = 0; index < arr.length; index += 1) {
  if (arr[index] === biggestNumber) {
    repetitionCount += 1;
  }
}
return repetitionCount;
}

  

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = Math.abs(mouse - cat1);
  let cat2Distance = Math.abs(mouse - cat2);
  if (cat1Distance > cat2Distance) {
    return "cat2";
  } else if (cat1Distance < cat2Distance){
    return "cat1";
  } else{
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function condition(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'fizzBuzz';
    } if (number % 3 === 0) {
    return 'fizz';
    } if (number % 5 === 0) {
    return 'buzz';
    }
    return 'bug!';
}

function fizzBuzz(arr) {
  let message = [];
  for (let index = 0; index < arr.length; index +=1) {
  message.push(condition(arr[index]));
  }return message
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
