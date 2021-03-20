// Desafio 10 <-- Contribuição Felipe Muller e Henrique Lima-->
function techList(array, name) {
  if (array.length === 0) {
    return 'Vazio!';
  }
  let arrayTech = [];
  array.sort();
  for (let index = 0; index < array.length; index += 1) {
    let learningTech = {
      tech: array[index],
      name,
    };
    arrayTech.push(learningTech);
  }
  return arrayTech.sort();
}
console.log(techList([], 'Lucas'));

// Desafio 11 <-- Contribuição Felipe Muller e Henrique Lima / Discussões no Zoom-- Trybengers ;D >

function numberCount(arrayNumber, index) {
  let count = 0;
  for (
    let indexNumber = 0;
    indexNumber < arrayNumber.length;
    indexNumber += 1
  ) {
    if (arrayNumber[index] === arrayNumber[indexNumber]) {
      count += 1;
    }
  }
  return count;
}
function isValidNumber(arrayNumber, index, count) {
  if (arrayNumber[index] < 0 || arrayNumber[index] > 9 || count >= 3) {
    return false;
  }
  return true;
}
function generatePhoneNumber(arrayNumber) {
  if (arrayNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < arrayNumber.length; index += 1) {
    let count = numberCount(arrayNumber, index);
    if (!isValidNumber(arrayNumber, index, count)) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let myPhoneNumber = '(';
  myPhoneNumber += `${arrayNumber[0]}${arrayNumber[1]}`;
  myPhoneNumber += ') ';
  myPhoneNumber += `${arrayNumber[2]}${arrayNumber[3]}${arrayNumber[4]}${arrayNumber[5]}`;
  myPhoneNumber += `${arrayNumber[6]}`;
  myPhoneNumber += '-';
  myPhoneNumber += `${arrayNumber[7]}${arrayNumber[8]}${arrayNumber[9]}${arrayNumber[10]}`;
  return myPhoneNumber;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12 <--Contribuição João Nascimento,Felipe Muller, Wanderson Sales, Murilo Gonçalves-->
function triangleCheck1(lineA, lineB, lineC) {
  if (
    Math.abs(lineA) > Math.abs(lineB - lineC)
    && Math.abs(lineB) > lineA - lineC
    && Math.abs(lineC) > lineA - lineB
  ) {
    return true;
  }
  return false;
}
function triangleCheck2(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) {
    return true;
  }
  return false;
}

function triangleCheck(lineA, lineB, lineC) {
  let firstTest = false;
  let secondTest = false;
  firstTest = triangleCheck1(lineA, lineB, lineC);
  secondTest = triangleCheck2(lineA, lineB, lineC);
  if (firstTest === true && secondTest === true) {
    return true;
  }
  return false;
}

console.log(triangleCheck(10, 14, 8));

// Desafio 13 <--Contribuição Rafael Reis, Adriel e John (turma 9)-->
function hydrate(suggestion) {
  let string = suggestion.match(/\d+/g);

  let count = 0;
  for (let index = 0; index < string.length; index += 1) {
    count += parseInt(string[index], 10);
  }
  if (count === 1) {
    return `${count} copo de água`;
  }

  return `${count} copos de água`;
}
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

// Fim do Projeto//
