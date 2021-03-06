// fazer a função stringToArray
// vamos começar
// Desafio 1
function compareTrue(value1, value2) {
  let returnValue;
  if (value1 && value2) {
    returnValue = true;
  } else {
    returnValue = false;
  }
  return returnValue;
  // ty jackson
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
// Utilizei a dica do Rafael Medeiros de utilizar o .split no string.
function splitSentence(phrase) {
  let splitPhrase = phrase.split(' ');
  return splitPhrase;
}
// Desafio 4
function concatName(name) {
  let signature = name[name.length - 1] + ', ' + name[0];
  return signature;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let totalPoints = 3 * wins + ties;
  return totalPoints;
}

// Desafio 6
function highestNumber(numbers) {
  let maiorNumber = numbers[0];
  for (let i in numbers) {
    if (numbers[i] > maiorNumber) {
      maiorNumber = numbers[i];
    }
  }
  return maiorNumber;
}
function highestCount(numbers) {
  let maiorNumber = highestNumber(numbers);
  let repeatTimes = 0;
  for (let i in numbers) {
    if (maiorNumber === numbers[i]) {
      repeatTimes += 1;
    }
  }
  return repeatTimes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let dCat1NMouse = Math.abs(mouse - cat1);
  let dCat2NMouse = Math.abs(mouse - cat2);
  let phrase = '';
  if (dCat1NMouse === dCat2NMouse) {
    phrase = 'os gatos trombam e o rato foge';
  } else if (dCat1NMouse > dCat2NMouse) {
    phrase = 'cat2';
  } else {
    phrase = 'cat1';
  }
  return phrase;
}

// Desafio 8
function fizzBuzz(array) {
  let stock = [];
  for (let i = 0; i < array.length; i += 1) {
    let diviFor3 = array[i] % 3 === 0;
    let diviFor5 = array[i] % 5 === 0;
    if (diviFor3 && diviFor5) {
      stock.push('fizzBuzz');
    } else if (diviFor3 && !diviFor5) {
      stock.push('fizz');
    } else if (diviFor5 && !diviFor3) {
      stock.push('buzz');
    } else {
      stock.push('bug!');
    }
  }
  return stock;
}

// Desafio 9
function encode(word) {
  let changeWord = [];
  let encondeWord = '';
  for (let i = 0; i < word.length; i += 1) {
    changeWord.push(word[i]);
  }
  for (let i in changeWord) {
    if (changeWord[i] === 'a') {
      changeWord[i] = 1;
    } else if (changeWord[i] === 'e') {
      changeWord[i] = 2;
    } else if (changeWord[i] === 'i') {
      changeWord[i] = 3;
    } else if (changeWord[i] === 'o') {
      changeWord[i] = 4;
    } else if (changeWord[i] === 'u') {
      changeWord[i] = 5;
    }
  }
  for (let i = 0; i < changeWord.length; i += 1) {
    encondeWord += changeWord[i];
  }
  return encondeWord;
}
function decode(word) {
  let changeWord = [];
  let decondeWord = '';
  for (let i = 0; i < word.length; i += 1) {
    changeWord.push(word[i]);
  }
  for (let i = 0; i < changeWord.length; i += 1) {
    if (changeWord[i] === '1') {
      changeWord[i] = 'a';
    } else if (changeWord[i] === '2') {
      changeWord[i] = 'e';
    } else if (changeWord[i] === '3') {
      changeWord[i] = 'i';
    } else if (changeWord[i] === '4') {
      changeWord[i] = 'o';
    } else if (changeWord[i] === '5') {
      changeWord[i] = 'u';
    }
  }
  for (let i = 0; i < changeWord.length; i += 1) {
    decondeWord += changeWord[i];
  }
  return decondeWord;
}

// Desafio 10
function techList(testArray, name) {
  testArray.sort();
  let userArray = [];
  if (testArray.length === 0) {
    userArray = 'Vazio!';
  } else {
    for (let i = 0; i < testArray.length; i += 1) {
      userArray[i] = {
        name: name,
        tech: testArray[i],
      };
    }
  }
  return userArray;
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
  techList,
};
