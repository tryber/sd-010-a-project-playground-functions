// Challenge 10

const compare = (a, b) => {
  if (a.tech > b.tech) return 1;
  if (a.tech < b.tech) return -1;

  return 0;
};

function techList(technologiesArray, name) {
  if (!technologiesArray.length) {
    return 'Vazio!';
  }
  const array = technologiesArray.map((tech) => ({ tech, name }));
  return array.sort(compare);
}

// Challenge 11

const isAValidArray = (array) => array.length !== 11;

const isRepeatThreeTimes = (array, number) => {
  const count = array.reduce((acc, curr) => {
    if (curr === number) acc += 1;
    return acc;
  }, 0);
  return count >= 3;
};

const isAValidPhone = (array) =>
  array.some((el) => el < 0 || el > 9 || isRepeatThreeTimes(array, el));

// Challenge 11
const formatsNumber = (arrayOfNumbers) => {
  let string = arrayOfNumbers.join('');
  let ddd = string.slice(0, 2);
  let firstPart = string.slice(2, 7);
  let lastPart = string.slice(7, 11);
  return `(${ddd}) ${firstPart}-${lastPart}`;
};

const generatePhoneNumber = (array) => {
  if (isAValidArray(array)) {
    return 'Array com tamanho incorreto.';
  }
  if (isAValidPhone(array)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return formatsNumber(array);
};

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 1]));

// Challenge 12

const sum = (x, y) => x + y;
const sub = (x, y) => Math.abs(x - y);

function triangleCheck(lineA, lineB, lineC) {
  const arr = [lineA, lineB, lineC];
  const max = arr.splice(arr.indexOf(Math.max(lineA, lineB, lineC)), 1);
  const sumLines = sum(...arr);
  const subLines = sub(...arr);
  if (sumLines > max && max > subLines) {
    return true;
  }
  return false;
}

// Challenge 13
// Regex Source:
// https://stackoverflow.com/questions/30607419/return-only-numbers-from-string
const hydrate = (string) => {
  let numbersOfString = string.replace(/\D/g, '');

  let sumOfStringNumbers = [...numbersOfString].reduce(
    (acc, number) => acc + parseInt(number, 10),
    0,
  );

  return sumOfStringNumbers > 1
    ? `${sumOfStringNumbers} copos de água`
    : `${sumOfStringNumbers} copo de água`;
};

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
