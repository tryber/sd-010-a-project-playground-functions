// Desafio 1
function compareTrue(firstBool, secondBool) {
  if (firstBool && secondBool) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(setence) {
  let setenceList = [];
  let split = '';

  for (let index = 0; index < setence.length + 1; index += 1) {
    if ((setence[index] === ' ') || (index + 1 === setence.length + 1)) {
      setenceList.push(split);
      split = '';
    } else {
      split += setence[index];
    }
  }
  return setenceList;
}

// Desafio 4
function concatName(namesArray) {
  let firstItem;
  let secondItem;

  for (let index = 0; index < namesArray.length; index += 1) {
    if (index === 0) {
      secondItem = namesArray[index];
    } else if (index === namesArray.length - 1) {
      firstItem = namesArray[index];
    }
  }
  return `${firstItem}, ${secondItem}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;

  for (let index = 1; index <= (wins + ties); index += 1) {
    if (index > wins) {
      points += 1;
    } else {
      points += 3;
    }
  }
  return points;
}

// Desafio 6
function highestCount(numbersArray) {
  let highestNumber = numbersArray[0];
  let count = 0;

  for (let index of numbersArray) {
    if (index > highestNumber) {
      count = 1;
      highestNumber = index;
    } else if (index === highestNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let catDistance1 = mouse - cat1;
  let catDistance2 = mouse - cat2;

  if (catDistance1 < 0) {
    catDistance1 *= -1;
  }
  if (catDistance2 < 0) {
    catDistance2 *= -1;
  }

  if (catDistance1 < catDistance2) {
    return 'cat1';
  } if (catDistance2 < catDistance1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function isFizzBuzz(number) {
  if ((number % 3 === 0) && (number % 5 === 0)) {
    return 'fizzBuzz';
  } if (number % 3 === 0) {
    return 'fizz';
  } if (number % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}

function fizzBuzz(numbersArray) {
  for (let index = 0; index < numbersArray.length; index += 1) {
    numbersArray[index] = isFizzBuzz(numbersArray[index]);
  }
  return numbersArray;
}

// Desafio 9
function reference() {
  let characters = {
    encode: {
      a: '1',
      e: '2',
      i: '3',
      o: '4',
      u: '5',
    },
    decode: {
      1: 'a',
      2: 'e',
      3: 'i',
      4: 'o',
      5: 'u',
    },
  };

  return characters;
}

function encode(value) {
  let char = value.split('');
  let charReference = reference().encode;

  for (let index = 0; index < char.length; index += 1) {
    if (charReference[char[index]]) {
      char[index] = charReference[char[index]];
    }
  }
  return char.join('');
}

function decode(value) {
  let char = value.split('');
  let charReference = reference().decode;

  for (let index = 0; index < char.length; index += 1) {
    if (charReference[char[index]]) {
      char[index] = charReference[char[index]];
    }
  }
  return char.join('');
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
