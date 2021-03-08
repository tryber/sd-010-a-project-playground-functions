// Desafio 1 OK
function compareTrue(param1, param2) {
  return param1 && param2;
}

// Desafio 2 OK
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3 OK
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4 ALELUIA!
function concatName(array) {
  let lastName = array[array.length - 1];
  let firstName = [array[0]];
  let newArray = `${lastName}, ${firstName}`;
  // let resposta = newArray.concat(firstName);
  return newArray;
}

// Desafio 5 OK
function footballPoints(wins, ties) {
  let resultWins = (wins * 3);
  return (resultWins + ties);
}

// Desafio 6 AGORA FOI!
function highestCount(array) {
  let highNumber = Math.max(...array);
  let sumHighestCount = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === highNumber) {
      sumHighestCount += 1;
    }
  }
  return sumHighestCount;
}

// Desafio 7 OK
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);
  if (distanceCat1 > distanceCat2) {
    return 'cat2';
  } if (distanceCat1 < distanceCat2) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8 OK
function fizzBuzz(array) {
  let arrayFizzBuzz = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      array[index] = 'fizzBuzz';
    } else if (array[index] % 5 === 0) {
      array[index] = 'buzz';
    } else if (array[index] % 3 === 0) {
      array[index] = 'fizz';
    } else {
      array[index] = 'bug!';
    }
  }
  return array;
}

// Desafio 9
// ESQUECE O ARRAY e For
// Solução idealizada pelo Douglas Santana
function encode(string) {
  let codingStringStage = string.replaceAll('i', '3').replaceAll('o', '4').replaceAll('u', '5');
  let codingString = codingStringStage.replaceAll('a', '1').replaceAll('e', '2');
  return codingString;
}

function decode(string) {
  let decodingStringStage = string.replaceAll('3', 'i').replaceAll('4', 'o').replaceAll('5', 'u');
  let decodingString = decodingStringStage.replaceAll('1', 'a').replaceAll('2', 'e');
  return decodingString;
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
