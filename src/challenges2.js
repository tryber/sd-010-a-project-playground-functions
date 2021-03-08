// Desafio 10

function techList(technologies, profile) {
  if (technologies.length === 0) return 'Vazio!';

  let arraySort = technologies.sort();
  let array = [];

  for (let index = 0; index < technologies.length; index += 1) {
    array.push({
      tech: arraySort[index],
      name: profile,
    });
  }

  return array;
}

// Desafio 11

function verifyRepetition(telephone) {
  let sorted = [...telephone].sort();

  for (let index = 0; index < telephone.length; index += 1) {
    if (sorted[index] === sorted[index + 1] && sorted[index] === sorted[index + 2]) return true;
  }

  return false;
}

function verifyBiggerSmaller(telephone) {
  for (let index of telephone) if (index < 0 || index > 9) return true;
  return false;
}

function createPhoneNumber(number, index) {
  let stringNumber = number.toString();

  switch (index) {
  case 0:
    stringNumber = `(${stringNumber}`;
    break;
  case 1:
    stringNumber = `${stringNumber}) `;
    break;
  case 7:
    stringNumber = `-${stringNumber}`;
    break;

  default:
  }

  return stringNumber;
}

function generatePhoneNumber(telephone) {
  let stringPhoneNumber = '';

  if (telephone.length !== 11) return 'Array com tamanho incorreto.';

  if (verifyBiggerSmaller(telephone) || verifyRepetition(telephone)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  for (let index = 0; index < telephone.length; index += 1) {
    stringPhoneNumber += createPhoneNumber(telephone[index], index);
  }

  return stringPhoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  return lineA < lineB + lineC && lineA > Math.abs(lineB - lineC);
}

// Desafio 13

function hydrate(stringDrinks) {
  let arrayDrinks = stringDrinks.match(/\d/g);
  let sum = 0;

  for (let index of arrayDrinks) sum += parseFloat(index);

  let resultHydrate = sum === 1 ? '1 copo de água' : `${sum} copos de água`;

  return resultHydrate;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

/*

REFERÊNCIAS UTILIZADAS :
https://medium.com/swlh/5-ways-to-replace-if-else-statements-857c0ff19357
https://flaviocopes.com/how-to-get-index-in-for-of-loop/
https://flaviocopes.com/how-to-find-duplicates-array-javascript/
https://eslint.org/docs/rules/no-else-return
https://stackoverflow.com/questions/24074968/does-sort-function-change-original-array
https://oprea.rocks/blog/what-do-the-three-dots-mean-in-javascript/
Recomendação do Rafael Medeiros: https://en.wikipedia.org/wiki/Triangle_inequality

*/
