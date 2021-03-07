// Desafio 10
function techList(tech, name) {
  let functionality = {
    tech: tech.sort(),
    techList: [],
  };

  if (tech.length === 0) {
    return 'Vazio!';
  }

  for (let index in tech) {
    functionality.techList.push({
      tech: tech[index],
      name,
    });
  } return functionality.techList;
} console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

// referencia - https://www.w3schools.com/jsref/jsref_sort.asp - Me ajudou a entender como o sorte nũmerico em órdem crescente funciona
function generatePhoneNumber(number) {
  if (number.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let index in number) {

  }
}

// let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// let arr = array.sort(function (a, b) { return a - b; });
// console.log(arr);

// Desafio 12 - Ajuda de Bruno Bastos e biblioteca do Mozilla sobre ABS
function triangleCheck(lineA, lineB, lineC) {
  if ((lineA < lineB + lineC) && (lineA > Math.abs(lineB - lineC))) {
    return true;
  }

  if ((lineB < lineA + lineC) && (lineB > Math.abs(lineA - lineC))) {
    return true;
  }

  if ((lineC < lineB + lineA) && (lineC > Math.abs(lineB - lineA))) {
    return true;
  }

  return false;
}

// Desafio 13 - Peguei a referência do reduce e sua manipulação no https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers.
function hydrate(string) {
  let array = [];

  let number = string.match(/\d/g);

  for (let index in number) {
    array.push(parseInt(number[index]));
  }

  let sumArrays = array.reduce((a, b) => (a + b));

  if (sumArrays === 1) {
    return `${sumArrays} copo de água`;
  }

  return `${sumArrays} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
