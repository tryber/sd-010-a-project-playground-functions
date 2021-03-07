function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }

  return false;
}

// Desafio 2
function calcArea(height, base) {
  let area = ((base * height) / 2);
  return area;
}

// Desafio 3
function splitSentence(word) {
  let split = word.split(' ');
  return split;
}

// Desafio 4
function concatName(names) {
  let divide = {
    firstName: names[0],
    lastName: names[names.length - 1],
  };

  let conquer = `${divide.lastName}, ${divide.firstName}`;

  return conquer;
}

// Desafio 5
function footballPoints(wins, ties) {
  let game = {
    winspoints: 3,
    tiespoints: 1,
  };
  let pointsSum = {
    winsplus: wins * game.winspoints,
    tiesplus: ties * game.tiespoints,
  };
  let total = pointsSum.winsplus + pointsSum.tiesplus;
  return total;
}

// Desafio 6
function highestCount(num) {
  let objectNumber = {
    highestNum: num[0],
    Count: 0,
  };
  for (let highestnumbers in num) {
    if (num[highestnumbers] > objectNumber.highestNum) {
      objectNumber.highestNum = num[highestnumbers];
    }
  }
  for (let verifyCount in num) {
    if (num[verifyCount] === objectNumber.highestNum) {
      objectNumber.Count += 1;
    }
  }
  return objectNumber.Count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let positions = {
    distanceCat1: Math.abs(cat1 - mouse),
    distanceCat2: Math.abs(cat2 - mouse),
  };
  if (positions.distanceCat2 > positions.distanceCat1) {
    positions.distanceCat1 = cat1 - mouse;
    return 'cat1';
  }
  if (positions.distanceCat1 > positions.distanceCat2) {
    return 'cat2';
  }

  return 'os gatos trombam e o rato foge';
}
console.log(catAndMouse(0, 6, 12));

// Desafio 8
function fizzBuzz(fizrray) {
  let fibuzrray = [];
  for (let count in fizrray) {
    if (fizrray[count] % 3 === 0 && fizrray[count] % 5 === 0) {
      fibuzrray.push('fizzBuzz');
    } else if (fizrray[count] % 3 === 0 && fizrray[count] % 5 !== 0) {
      fibuzrray.push('fizz');
    } else if (fizrray[count] % 5 === 0 && fizrray[count] % 3 !== 0) {
      fibuzrray.push('buzz');
    } else if (fizrray[count] % 5 !== 0 && fizrray[count] % 3 !== 0) {
      fibuzrray.push('bug!');
    }
  }
  return fibuzrray;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
// Referência Bruno Bastos. Me ajudou a fazer o código, a entender o replace, como funciona o global.
function encode(letter) {
  let encodedLetter = letter
    .replace(/a/g, 1)
    .replace(/e/g, 2)
    .replace(/i/g, 3)
    .replace(/o/g, 4)
    .replace(/u/g, 5);
  return encodedLetter;
}
console.log(encode('hi there'));

function decode(decodeLetter) {
  let decodedLetter = decodeLetter
    .replace(/1/g, 'a')
    .replace(/2/g, 'e')
    .replace(/3/g, 'i')
    .replace(/4/g, 'o')
    .replace(/5/g, 'u');
  return decodedLetter;
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
