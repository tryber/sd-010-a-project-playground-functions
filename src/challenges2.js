// Desafio 10
function techList(techArray, name) {
  if (techArray.length === 0) {
    return 'Vazio!';
  }

  let techObjects = [];
  techArray.sort();

  for (let index = 0; index < techArray.length; index += 1) {
    let obj = {
      tech: techArray[index],
      name,
    };
    techObjects.push(obj);
  }
  return techObjects;
}

// Desafio 11
function repeatedCount(number, numbersArray, error) {
  const { bool } = error;
  let count = 0;

  if (bool) {
    return error;
  }
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (number === numbersArray[index]) {
      count += 1;
    }
  }
  if (count >= 3) {
    return {
      bool: true,
      msg: 'não é possível gerar um número de telefone com esses valores',
    };
  }
  return { bool: false, msg: '' };
}

function phoneNumberError(numbersArray) {
  let error = { bool: null, msg: null };
  if (numbersArray.length !== 11) {
    error.bool = true;
    error.msg = 'Array com tamanho incorreto.';
    return error;
  }

  for (let index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] < 0 || numbersArray[index] > 9) {
      error.bool = true;
      error.msg = 'não é possível gerar um número de telefone com esses valores';
      return error;
    }
    error = repeatedCount(numbersArray[index], numbersArray, error);
  }
  return error;
}

function generatePhoneNumber(numbersArray) {
  const { bool, msg } = phoneNumberError(numbersArray);
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
  if (bool) return msg;

  let ddd = '';
  let number = '';
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (index < 2) {
      ddd += numbersArray[index];
    } else {
      number += numbersArray[index];
    }
  }
  // https://www.w3schools.com/jsref/jsref_substring.asp
  let firstPart = number.substring(0, 5);
  let secondPart = number.substring(5);
  return `(${ddd}) ${firstPart}-${secondPart}`;
}

// Desafio 12

function absoluteCheck(lineA, lineB, lineC) {
  if (lineA >= Math.abs(lineB - lineC)
  || lineB >= Math.abs(lineA - lineC)
  || lineC >= Math.abs(lineA - lineB)) {
    return false;
  }
  return true;
}

function triangleCheck(lineA, lineB, lineC) {
  if (lineA >= lineB + lineC || lineB >= lineA + lineC || lineC >= lineA + lineB) {
    return false;
  }
  const isTriangle = absoluteCheck();
  return isTriangle;
}

// Desafio 13
function hydrate(drinks) {
  // https://www.encodedna.com/javascript/how-to-get-numbers-from-a-string-in-javascript.htm
  // https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers
  // https://www.tutorialrepublic.com/faq/how-to-find-the-sum-of-an-array-of-numbers-in-javascript.php
  // https://www.w3schools.com/jsref/jsref_reduce.asp
  let sum = parseInt(drinks.match(/\d+/g).reduce((total, number) => {
    total = parseInt(total, 10);
    number = parseInt(number, 10);
    return total + number;
  }), 10);

  if (sum === 1) {
    return `${sum} copo de água`;
  }
  return `${sum} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
