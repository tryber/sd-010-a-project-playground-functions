// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true){
    return true;
  }
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = base * height / 2;

  return area;
}

// Desafio 3
function splitSentence(string) {

  return string.trim().split(/\s+/);
}

// Desafio 4
function concatName(array) {
  
  let firstElement = array[0];
  let lastElement = array[array.length - 1];

  return lastElement + ', ' + firstElement;
}

// Desafio 5
function footballPoints(wins, ties) {
  
  let teamPoints = (wins * 3) + (ties * 1);

  return teamPoints
}

// Desafio 6
function highestCount(numberArray) {

  let higherNumber = 0;
  let higherNumberRepetition = 0;

  for (let i = 0; i < numberArray.length; i += 1){
    if (higherNumber < numberArray[i]){
      higherNumber = numberArray[i];
    }  
  }
  for (let j = 0; j < numberArray.length; j += 1){
    if (numberArray[j] === higherNumber){
      higherNumberRepetition += 1;
    }
  }
  
return higherNumberRepetition;

}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let mouseCat1Distancy = Math.abs(mouse - cat1);
  let mouseCat2Distancy = Math.abs(mouse - cat2);
  if (mouseCat1Distancy > mouseCat2Distancy){
    return 'cat2';
  }
  else if (mouseCat1Distancy < mouseCat2Distancy){
    return 'cat1';
  }
  else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numberArray2) {
  let numbers = [];

  for (let i = 0; i < numberArray2.length; i += 1){
        
    if ((numberArray2[i] % 3 === 0) && (numberArray2[i] % 5 === 0)){
      numbers.push('fizzBuzz');
    }

    else if (numberArray2[i] % 3 === 0){
      numbers.push('fizz');
    }
    
    else if (numberArray2[i] % 5 === 0){
      numbers.push('buzz');
    }

    else if ((numberArray2[i] % 3 !== 0) && (numberArray2[i] % 5 !== 0)){ 
      numbers.push('bug!');
    }
  }
return numbers;
}

// Desafio 9
function encode(charToNumber) {
  let vowels = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5'
  }
   replace = charToNumber.replace(/a|e|i|o|u/g, function(charToNumber) {
    return vowels[charToNumber];
  });
 
    return replace;
}
function decode(numberToChar) {
  let number = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u'
  }
   replace = numberToChar.replace(/1|2|3|4|5/g, function(numberToChar) {
    return number[numberToChar];
  });
 
    return replace;
}


console.log(highestCount([0, 0, 0]));

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
