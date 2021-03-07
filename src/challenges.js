// Desafio 1
function compareTrue(number1, number2) {
  if (number1 === true && number2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(nameSplit) {
  let resultSplit = nameSplit.split(' ');
  return resultSplit;
}

// Desafio 4
function concatName(name) {
  let firtArray = name[0];
  let ultimateArrayNumber = name.length - 1;
  let ultimateArray = name[ultimateArrayNumber];
  let resultArray = ultimateArray + ', ' + firtArray;
  return resultArray;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let tiePoints = ties * 1;
  let totalPoints = winsPoints + tiePoints;
  return totalPoints;
}

// Desafio 6
function highestCount(numberRepeat) {
  let maxNumber = Math.max(...numberRepeat);
  let count = 0;
  for (let index = 0; index < numberRepeat.length; index += 1) {
    let walks = numberRepeat[index];
    if (walks === maxNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let situationOne = mouse - cat1;
  let situationTwo = mouse - cat2;
  if (situationOne < 0 ) {
    situationOne *= -1;
  }
  if (situationTwo < 0 ) {
    situationTwo *= -1;
  }

  if (situationOne < situationTwo) {
    return 'cat1'; }
  else if (situationTwo < situationOne) {
    return 'cat2';
  } else if (situationOne === situationTwo) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numberFizzBuzz) {
  let collectFizzBuzz = [];
  for (let i = 0; i < numberFizzBuzz.length; i += 1) {
    if (numberFizzBuzz[i] % 3 === 0 && numberFizzBuzz[i] % 5 === 0) {
      collectFizzBuzz[i] = 'fizzBuzz';
     } // 2, 15, 7, 9, 45
    else if (numberFizzBuzz[i] % 3 === 0) {
      collectFizzBuzz[i] = 'fizz';
    } else if (numberFizzBuzz[i] % 5 === 0 ) {
       collectFizzBuzz[i] = 'buzz';
     } else {
       collectFizzBuzz[i] = 'bug!';
    }
  }
  return collectFizzBuzz;  
}

// Desafio 9
function encode(listEncode) {
    let modify = listEncode.split('');
    for (let i = 0; i < modify.length; i += 1) {
      switch (modify[i]) {
        case 'a':
          modify[i] = '1';
          break;
        case 'e':
          modify[i] = '2';
          break;
        case 'i':
          modify[i] = '3';
          break;
        case 'o':
          modify[i] = '4';
          break;
        case 'u':
          modify[i] = '5';
          break;  
      }
    }
  return modify.join('');
}

function decode(listEncodeNumber) {
  let modifyNumber = listEncodeNumber.split('');
  for (let i = 0; i < modifyNumber.length; i += 1) {
    switch (modifyNumber[i]) {
      case '1':
        modifyNumber[i] = 'a';
        break;
      case '2':
        modifyNumber[i] = 'e'
        break;
      case '3':
        modifyNumber[i] = 'i';
        break;
      case '4':
        modifyNumber[i] = 'o'
        break;
      case '5':
        modifyNumber[i] = 'u';
        break;  
    }
  }
return modifyNumber.join('');
}

console.log(compareTrue(true, true));
console.log(compareTrue(false, true));
console.log(compareTrue(true, true));

console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

console.log(splitSentence('go trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

console.log(concatName(['Lucas', 'Cassio', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));

console.log(catAndMouse(0, 3, 2));
console.log(catAndMouse(10, 9, 22));
console.log(catAndMouse(1, 0, 2));

console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([7, 9]));
console.log(fizzBuzz([9, 5]));

console.log(encode('How are you today?'));
console.log(decode('H4w 1r2 y45 t4d1y?'));

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
