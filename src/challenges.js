// Desafio 1
function compareTrue(a, b) {
  return a === true && b === true;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

// Desafio 4
function concatName(array) {
  return (array[array.length - 1] + ', ' + array[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(array) {
  let counter = 0;
  function greatest(array1) {
    let greatestN = array1[0];
    for (let index in array1) {
      if (array1[index] > greatestN) {
        greatestN = array1[index];
      }
    }
    return greatestN;
  }
  let numberG = greatest(array)
  for (let index in array) {
    if (array[index] === numberG) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = cat1 - mouse;
  let distance2 = cat2 - mouse;
  if (distance1 < 0) {
     distance1 = distance1 * -1 
  }
  if (distance2 < 0) {
    distance2 = distance2 * -1 };
  if (distance2 === distance1) {
    return 'os gatos trombam e o rato foge'
  }
  else if (distance1 < distance2) {
    return 'cat1';
  }
  else {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let codfied = [];
  for (let index in array)
  {
    if (array[index] % 5 === 0 && array[index] % 3 === 0)
    {
      codfied.push('fizzBuzz')
    }
    else if (array[index] % 3 === 0)
    {
      codfied.push('fizz')
    }
    else if (array[index] % 5 === 0)
    {
      codfied.push('buzz')
    }
    else {
      codfied.push('bug!')
    };
  };
  return codfied
}

// Desafio 9
function encode(str) {
  let code = str.split('');
  for (let index in code)
  { 
    if (code[index] === 'a')
    {
      code[index] = 1 + ''
    }
    else if (code[index] === 'e')
    {
      code[index] = 2 + ''
    }
    else if (code[index] === 'i')
    {
      code[index] = 3 + ''
    }
    else if (code[index] === 'o')
    {
      code[index] = 4 + ''
    }
    else if (code[index] === 'u')
    {
      code[index] = 5 + ''
    }
  }
  return code.join('')
}
function decode(str) {
  let code = str.split('');
  for (let index in code)
  { 
    if (code[index] === '1')
    {
      code[index] = 'a'
    }
    else if (code[index] === '2')
    {
      code[index] = 'e'
    }
    else if (code[index] === '3')
    {
      code[index] = 'i'
    }
    else if (code[index] === '4')
    {
      code[index] = 'o'
    }
    else if (code[index] === '5')
    {
      code[index] = 'u'
    }
  }
  return code.join('')
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
