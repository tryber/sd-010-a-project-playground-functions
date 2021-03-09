// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
return (base * height) / 2;
}

// Desafio 3
function splitSentence(string_1) {
  let stringArray = [];
  return stringArray = string_1.split(" ", 3);
}

// Desafio 4
function concatName(myArray) {

  return myArray[myArray.length-1] + ', ' + myArray[0];
}

// Desafio 5
function footballPoints(wins,ties) {
  let points = 0;
  return  points = (wins*3)+(ties*1);
}

// Desafio 6
function highestCount(numberArray) {
  let highest = numberArray[0];

  for (let index = 1; index < numberArray.length; index += 1) {
    if (highest < numberArray[index]) {
      highest = numberArray[index];
    }
  }

  let equal = 0;

  for (let index = 0; index < numberArray.length; index += 1) {
    if (highest === numberArray[index]) equal += 1;
  }

  return equal;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
// referência de lógica do Anderson Silva (Andy) Tribo A - Turma 10
let distanceCat1 = Math.abs(mouse - cat1);
let distanceCat2 = Math.abs(mouse - cat2);

  if (distanceCat1 > distanceCat2) {
    return 'cat2';
  } else if (distanceCat2 > distanceCat1){
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}


// Desafio 8
function fizzBuzz(fizzArray) {
  const result = [];
  for (let index = 0; index < fizzArray.length; index += 1) {
    if (fizzArray[index] % 3 !== 0 && fizzArray[index] % 5 !== 0) {
      result.push('bug!');
    } else if (fizzArray[index] % 3 === 0 && fizzArray[index] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (fizzArray[index] % 3 === 0) {
      result.push('fizz');
    } else if (fizzArray[index] % 5 === 0) {
      result.push('buzz');
    }
  }
  return result;
}
console.log(fizzBuzz([9, 25]));


// Desafio 9
function encode() {

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
