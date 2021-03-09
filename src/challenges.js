// Desafio 1
function compareTrue(parameter1, parameter2) {
  if (parameter1 === true && parameter2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, area) {
  return (base * area) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  let newArray = sentence.split (' ');
  return newArray;
}

// Desafio 4
function concatName(fullname) {
  let firstAndLast = fullname[fullname.length - 1] + ',' + ' ' + fullname[0];
  return firstAndLast;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(numbers) {
  let timesAppear = 0;
  let maxNumber = Math.max.apply(null, numbers);
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === maxNumber) {
      timesAppear += 1;
    }
  }
  return timesAppear;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs(cat1 - mouse);
  let distance2 = Math.abs(cat2 - mouse);
  if ((distance1 - mouse) < (distance2 - mouse)) {
    return 'cat1';
  } else if ((distance2 - mouse) < (distance1 - mouse)) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let finalArray = [];
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] % 3 === 0 && arrayNumbers[index] % 5 === 0) {
      finalArray.push('fizzBuzz');
    } else if (arrayNumbers[index] % 3 === 0) {
      finalArray.push('fizz');
    } else if (arrayNumbers[index] % 5 === 0) {
      finalArray.push('buzz');
    } else {
      finalArray.push('bug!');
    }
  }
  return finalArray;
}

// Desafio 9
function encode(stringParameter) {
  let codedArray = [];
  for (let index = 0; index < stringParameter.length; index += 1) {
    switch (stringParameter[index]) {
      case 'a':
        codedArray.push(1);
        break;
      case 'e':
        codedArray.push(2);
        break;
      case 'i':
        codedArray.push(3);
        break;
      case 'o':
        codedArray.push(4);
        break;
      case 'u':
        codedArray.push(5);
        break;
      default:
        codedArray.push(stringParameter[index]);
    }
  }
  return codedArray.join('');
}

function decode(codedParameter) {
  let decodedArray = [];
  for (let index = 0; index < codedParameter.length; index += 1) {
    if(codedParameter[index] == 1) {
      decodedArray.push('a');
    } else if(codedParameter[index] == 2) {
      decodedArray.push ('e');
    } else if(codedParameter[index] == 3) {
      decodedArray.push('i');
    } else if(codedParameter[index] == 4) {
      decodedArray.push('o');
    } else if(codedParameter[index] == 5) {
      decodedArray.push('u');
    } else {
      decodedArray.push(codedParameter[index]);
    }
  }
  return decodedArray.join('');
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
