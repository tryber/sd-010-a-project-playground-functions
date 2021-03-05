// Desafio 1
function compareTrue(bool1, bool2) {
  // seu código aqui
  if (bool1 === true && bool2 === true) {
    return true;
  } else {
    return false;
  }
}

console.log('Desafio 1');
console.log(compareTrue(true, true));
console.log(compareTrue(true, false));
console.log(compareTrue(false, false));

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let result = (base * height) / 2;
  return result;
}

console.log('Desafio 2');
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(separatee) {
  // seu código aqui
  let limiter = ' ';
  let result = separatee.split(limiter);
  return result;
}

console.log('Desafio 3');
console.log(splitSentence('go Trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

// Desafio 4
function concatName(names) {
  // seu código aqui
  return names[names.length - 1] + ', ' + names[0];
}

console.log('Desafio 4');
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolilo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let total = ((wins * 3) + ties );
  return total;
}

console.log('Desafio 5');
console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  let high = numbers[0];
  for (let u = 1; u < numbers.length; u++) {
    if (numbers[u] > high) {
      high = numbers[u];
    }
  }
  let counter = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === high) {
      counter++ ;
    }
  }
  return counter;
}

console.log('Desafio 6');
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

console.log('Desafio 7');
console.log(catAndMouse(5, 2, 15));
console.log(catAndMouse(5, 80, 17));
console.log(catAndMouse(5, 2, 8));

// Desafio 8
function fizzBuzz(numbers) {
  // seu código aqui
  let result = [];
  for(let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
      result.push('fizzBuzz');
    }
    else if (numbers[i] % 3 === 0 ) {
      result.push('fizz');
    }
    else if (numbers[i] % 5 === 0) {
      result.push('buzz');
    } else { 
      result.push('bug!');
    }
  }
  return result;
}

console.log('Desafio 8');
console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([7, 9]));
console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode(words) {
  // seu código aqui
  
}
function decode() {
  // seu código aqui
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
