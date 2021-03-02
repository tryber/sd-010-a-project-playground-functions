// Desafio 10
function techList(techArr, nameStr) {
  let outputObj = [];

  if (techArr.length <= 0) return 'Vazio!';

  for (let techItem of techArr.sort()) {
    outputObj.push(
      {
        tech: techItem,
        name: nameStr,
      },
    );
  }
  return outputObj;
}

// Desafio 11
function outZeroToNine(array) {
  let isGreaterThan3 = false;
  for (let num of array) if (num < 0 || num > 9) isGreaterThan3 = true;
  return isGreaterThan3;
}

function mostRepeatedThan3(array) {
  let repeatedNumbers = {};
  let moreEqual3 = false;

  for (let num of array) repeatedNumbers[num] = 0;
  for (let num of array) repeatedNumbers[num] += 1;
  for (let num in repeatedNumbers) {
    if (repeatedNumbers[num] >= 3) moreEqual3 = true;
  }

  return moreEqual3;
}

function subArrayToString(array, pos1, pos2) {
  let output = '';
  for (let pos = pos1; pos <= pos2; pos += 1) {
    output += array[pos].toString();
  }
  return output;
}

function generatePhoneNumber(numberPhone) {
  if (numberPhone.length !== 11) return 'Array com tamanho incorreto.';

  if (outZeroToNine(numberPhone) || mostRepeatedThan3(numberPhone)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let output = '';
  output += `(${subArrayToString(numberPhone, 0, 1)}) `;
  output += `${subArrayToString(numberPhone, 2, 6)}-`;
  output += `${subArrayToString(numberPhone, 7, 10)}`;

  return output;
}

// Desafio 12
function triangleCondition(a, b, c) {
  return (a < (b + c)) && a > Math.abs(b - c);
}
function triangleCheck(lineA, lineB, lineC) {
  let output = true;
  if (!triangleCondition(lineA, lineB, lineC)) output *= false;
  if (!triangleCondition(lineB, lineC, lineA)) output *= false;
  if (!triangleCondition(lineC, lineA, lineB)) output *= false;

  return Boolean(output);
}

// Desafio 13
function totalCups(str) {
  const regex = /([1-9]{1,}) (\w{1,})/g;
  let matches = str.match(regex);
  let strNumbers = [];
  let totalNumber = 0;

  for (let match of matches) strNumbers.push(match.split(' ')[0]);
  for (let strNum of strNumbers) {
    let num = Number(strNum);
    if (num >= 0 && num <= 9) totalNumber += num;
  }
  return totalNumber;
}

function hydrate(str) {
  let totalCupsNum = totalCups(str);

  if (totalCupsNum > 1) return `${totalCupsNum} copos de água`;
  return `${totalCupsNum} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
