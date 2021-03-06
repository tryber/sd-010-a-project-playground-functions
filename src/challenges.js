// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(name) {
  
  let result = name.split(' ');
  return result;
}

// Desafio 4
function concatName(array) {
  let lastFirst = array[array.length - 1] + ', ' + array[0];
  return lastFirst;
} 
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let result = (wins * 3) + (ties);
  return result;
}

// Desafio 6
function highestCount(array) {
  let result = 0;
  let highest = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > highest) {
      highest = array[index];
    }
  }
  for (let index2 = 0; index2 < array.length; index2 += 1) {
    if (array[index2] === highest) {
      result += 1;
    }
  }
  return result;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs(mouse - cat1);
  let distance2 =  Math.abs(mouse - cat2);
  let result;

  if (distance1 < distance2) {
    result = 'cat1';
  } else if (distance1 > distance2) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      result.push('fizz');
    } else if (array[index] % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(name) {
  name = name.replaceAll('a', '1').replaceAll('e', '2')
    .replaceAll('i', '3').replaceAll('o', '4').replaceAll('u', '5');
  return name;
}
function decode(name) {
  name = name.replaceAll('1', 'a').replaceAll('2', 'e')
    .replaceAll('3', 'i').replaceAll('4', 'o').replaceAll('5', 'u');
  return name;
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
