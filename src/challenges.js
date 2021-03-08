function compareTrue(bolean1, bolean2) {
  if (bolean1 && bolean2 === true) {
    return true;
  }
  return false;
}

function calcArea(base, height) {
  return (base * height) / 2;
}

function splitSentence(phrase) {
  return phrase.split(' ');
}

function concatName(arrayPhrase) {

  let phraseDisposition = [];

  phraseDisposition = `${arrayPhrase[arrayPhrase.length - 1]}, ${arrayPhrase[0]}`;

  return phraseDisposition;
}

function footballPoints(wins, ties) {
  wins *= 3;
  ties *= 1;

  return wins + ties;
}

function highestCount(numbers) {
  let resultado = 0;

  let maxNumber = Math.max.apply(Math, numbers);
  // Math.max.apply(Math,Array) found in https://stackoverflow.com/questions/1669190/find-the-min-max-element-of-an-array-in-javascript, Author GSerg

  for (let index = 0; index < numbers.length; index += 1) {
    if (maxNumber === numbers[index]) {
      resultado += 1;  
    } }
  return resultado;
}

function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = cat1 - mouse;
  let cat2Distance = cat2 - mouse;

  if (cat1Distance < 0) {
    cat1Distance *= -1;
  } else if (cat2Distance < 0) {
    cat2Distance *= -1;
  }

  if (cat1Distance > cat2Distance) {
    return 'cat2';
  } else if (cat1Distance < cat2Distance) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

function fizzBuzz(numbers) {
  let resultado = [];
  for (let index = 0; index < numbers.length; index += 1) {

    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (numbers[index] % 3 === 0) {
      resultado.push('fizz');
    } else if (numbers[index] % 5 === 0) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
}

function encode(text) {
  let arrayPhrase = [];

  for (let index = 0; index < text.length; index += 1) {

    if (text[index] === 'a') {
      arrayPhrase.push(1);
    } else if (text[index] === 'e') {
      arrayPhrase.push(2);
    } else if (text[index] === 'i') {
      arrayPhrase.push(3);
    } else if (text[index] === 'o') {
      arrayPhrase.push(4);
    } else if (text[index] === 'u') {
      arrayPhrase.push(5);
    } else {
      arrayPhrase.push(text[index]);
    }
  }

  return arrayPhrase.join('');
}

function decode(text) {
  let arrayPhrase = [];

  for (let index = 0; index < text.length; index += 1) {
    if (text[index] === '1') {
      arrayPhrase.push('a');
    } else if (text[index] === '2') {
      arrayPhrase.push('e');
    } else if (text[index] === '3') {
      arrayPhrase.push('i');
    } else if (text[index] === '4') {
      arrayPhrase.push('o');
    } else if (text[index] === '5') {
      arrayPhrase.push('u');
    } else {
      arrayPhrase.push(text[index]);
    }
  }

  return arrayPhrase.join('');
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
