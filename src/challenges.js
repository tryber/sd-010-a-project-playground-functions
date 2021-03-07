// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } 
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
// Questão realizada após rever o conteúdo no W3 Schools - https://www.w3schools.com/jsref/jsref_split.asp
function splitSentence(str) {
  let answer = str.split(" ");
  return answer;
}

// Desafio 4
function concatName(names) {
  let firstAndLast = '';
  let name = '';
  name = names[names.length - 1];
  firstAndLast = name;
  firstAndLast = firstAndLast + ',';
  name = names[0];
  firstAndLast = firstAndLast + ' ' + name;
  return firstAndLast;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointWins = wins * 3;
  return (pointWins + ties);
}

// Desafio 6
// Após tentar resolver com uma função for dentro da outra e não ter conseguido, percebi outra forma mais fácil de resolver tomando como direcao o print do código da Gal da turma 09 no slack
// https://trybecourse.slack.com/archives/C01DJFH0DNW/p1607010243137100?thread_ts=1607007991.123300&cid=C01DJFH0DNW
function highestCount(array) {
  let count = 0;
  let ordem = array.sort();
  let tamanho = ordem.length;
  let maior = ordem[tamanho - 1];
  for (let index = 0; index < tamanho; index += 1) {
    if (maior === ordem[index]) {
      count += 1;
    }  
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let same = 'os gatos trombam e o rato foge';
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  } else {
  return same;
  }
}

// Desafio 8
// Lógica vista e compreendida no código do Iago Ferreira  https://github.com/tryber/sd-010-a-project-playground-functions/blob/iagopferreira-project-playground-functions/src/challenges.js
function fizzBuzz(array) {
  let codified = [];
  for (let index = 0; index < array.length; index += 1) {
    codified.push(ifelse(array[index]))
  }
  return codified;
}

function ifelse (index) {  
  if (index % 3 === 0 && index % 5 === 0) {
    return 'fizzBuzz';
} if (index % 3 === 0) {
    return 'fizz';
} if (index % 5 === 0) {
    return 'buzz';
} if (index % 3 !== 0 && index % 5 !== 0) {
    return 'bug!';
    }
  }

// Desafio 9
function encode(phrase) {
  let letter = '';
  for (let index = 0; index < phrase.length; index += 1){
    letter += (ifElse(phrase[index]));
  }
  return letter;
}

function ifElse (index) {  
  if (index === 'a') {
    return '1';
} if (index === 'e') {
    return '2';
} if (index === 'i') {
    return '3';
} if (index === 'o') {
    return '4';
} if (index === 'u') {
    return '5';
  } 
  return index;
}


function decode (phrase) {
  let letter = '';
  for (let index = 0; index < phrase.length; index += 1){
    letter += (ifElseNumber(phrase[index]));
  }
  return letter;
}

function ifElseNumber (index) {  
  if (index === '1') {
    return 'a';
} if (index === '2') {
    return 'e';
} if (index === '3') {
    return 'i';
} if (index === '4') {
    return 'o';
} if (index === '5') {
    return 'u';
  } 
  return index;
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
}
