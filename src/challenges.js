// Challenge 1
const compareTrue = (parameter1, parameter2) => parameter1 && parameter2;

// Challenge 2
const calcArea = (base, height) => (base * height) / 2;

// Challenge 3
const splitSentence = (string) => string.split(' ');

// Challenge 4
const concatName = (arrayDeStrings) => `${arrayDeStrings.pop()}, ${arrayDeStrings.shift()}`;

// Challenge 5
const footballPoints = (wins, ties) => (wins * 3) + ties;

// Challenge 6
const highestCount = (arrayOfNumbers) => {
  const max = Math.max(...arrayOfNumbers);
  return arrayOfNumbers.filter((n) => n === max).length;
};

// Challenge 7
function catAndMouse(mouse, cat1, cat2) {
  const cat1Proximity = Math.abs(mouse - cat1);
  const cat2Proximity = Math.abs(mouse - cat2);
  let response = 'os gatos trombam e o rato foge';
  if (cat1Proximity < cat2Proximity) {
    response = 'cat1';
  }
  if (cat1Proximity > cat2Proximity) {
    response = 'cat2';
  }
  return response;
}

// Challenge 8
const checksFizzBuzz = (number) => {
  let a = number % 3 === 0;
  let b = number % 5 === 0;
  let response = '';

  if (a) response = 'fizz';
  if (b) response += 'buzz';
  if (response === '') response = 'bug!';

  return response;
};

const toFizzBuzz = ([...word]) => word.reduce((acc, letter) => {
  if (letter === 'b') {
    acc += 'B';
  } else {
    acc += letter;
  }
  return acc;
}, '');
const fizzBuzz = (array) => array.reduce((acc, number) => {
  let word = checksFizzBuzz(number);
  if (word === 'fizzbuzz') word = toFizzBuzz(word);
  acc.push(word);
  return acc;
}, []);

// Challenge 9

const getVowels = () => ({ a: '1', e: '2', i: '3', o: '4', u: '5' });

function isVowel(char) {
  const vowels = getVowels();
  for (let key in vowels) {
    if (char === key) {
      char = vowels[key];
    }
  }
  return char;
}

function isNumber(char) {
  const vowels = getVowels();
  for (let key in vowels) {
    if (char === vowels[key]) {
      char = key;
    }
  }
  return char;
}

const encode = ([...string]) => string.map((char) => {
  const vowel = isVowel(char);
  return vowel;
}).join('');

const decode = ([...string]) => string.map((char) => {
  const vowel = isNumber(char);
  return vowel;
}).join('');

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
