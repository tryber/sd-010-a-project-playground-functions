// Desafio 10
function sorting(a, b) {
  return b.tech > a.tech ? -1 : 1;
}

function techList(array, name) {
  let listOfName = name;
  let arrayNum = [];
  if (array.length === 5) {
    for (let index = 0; index < 5; index += 1) {
      let technoList = {
        tech: ' ',
        name: ' ',
      };
      technoList.tech = array[index];
      technoList.name = listOfName;
      arrayNum[index] = technoList;
    }
    return arrayNum.sort(sorting);
  } if (array.length === 0) {
    return 'Vazio!';
  }
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Giovanni'));
// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA + lineB > lineC && lineB + lineC > lineA && lineC + lineA > lineB) {
    return true;
  }
  return false;
}
console.log(triangleCheck(10, 14, 8));

// Desafio 13
function hydrate(drinks) {
  let itemAmount = drinks.match(/\d+/g).map(Number);
  let result = itemAmount.reduce((acumulador, index) => acumulador + index);
  if (result > 1) {
    return `${result} copos de água`;
  }
  return `${result} copo de água`;
}
console.log(hydrate('5 cervejas'));
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
