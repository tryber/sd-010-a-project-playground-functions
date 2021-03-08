// Desafio 1
function compareTrue(val1, val2) {
  let result;
  if (val1 === true && val2 === true) {
    result = true;
  } else {
    result = false;
  }
  console.log(result);
  return result;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  console.log(area);
  return area;
}

// Desafio 3
function splitSentence(phrase) {
  let split = [];
  split = phrase.split(' ');
  console.log(split);
  return split;
}

// Desafio 4
function concatName(strArray) {
  let result;
  result = `${strArray[strArray.length - 1]}, ${strArray[0]}`;
  console.log(result);
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points;
  points = (wins * 3) + ties;
  console.log(points);
  return points;
}

// Desafio 6
function highestCount(numArray) {
  let highestNum = 0;
  highestNum = Math.max.apply(null, numArray);

  let result = 0;
  for (let index = 0; index < numArray.length; index += 1) {
    if (numArray[index] === highestNum) {
      result += 1;
    }
  }
  console.log(result);
  return result;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Dist = 0;
  cat1Dist = cat1 - mouse;
  if (cat1Dist < 0) {
    cat1Dist *= -1;
  }
  let cat2Dist = 0;
  cat2Dist = cat2 - mouse;
  if (cat2Dist < 0) {
    cat2Dist *= -1;
  }

  if (cat1Dist > cat2Dist) {
    return 'cat2';
  } if (cat1Dist < cat2Dist) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numArray) {
  let fizzArray = [];
  for (let index in numArray) {
    if (numArray[index] % 3 === 0 && numArray[index] % 5 === 0) {
      fizzArray.push('fizzBuzz');
    } else if (numArray[index] % 3 === 0) {
      fizzArray.push('fizz');
    } else if (numArray[index] % 5 === 0) {
      fizzArray.push('buzz');
    } else {
      fizzArray.push('bug!');
    }
  }
  console.log(fizzArray);
  return fizzArray;
}

// Desafio 9
function encode(phrase) {
  let code = '';
  for (let index = 0; index < phrase.length; index += 1) {
    if (phrase[index] === 'a') {
      code += '1';
    } else if (phrase[index] === 'e') {
      code += '2';
    } else if (phrase[index] === 'i') {
      code += '3';
    } else if (phrase[index] === 'o') {
      code += '4';
    } else if (phrase[index] === 'u') {
      code += '5';
    } else {
      code += phrase[index];
    }
  }
  console.log(code);
  return code;
}

function decode(code) {
  let phrase = '';
  for (let index = 0; index < code.length; index += 1) {
    if (code[index] === '1') {
      phrase += 'a';
    } else if (code[index] === '2') {
      phrase += 'e';
    } else if (code[index] === '3') {
      phrase += 'i';
    } else if (code[index] === '4') {
      phrase += 'o';
    } else if (code[index] === '5') {
      phrase += 'u';
    } else {
      phrase += code[index];
    }
  }
  console.log(phrase);
  return phrase;
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
