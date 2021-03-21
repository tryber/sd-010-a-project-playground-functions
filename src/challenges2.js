// Desafio 10
function sorting(a, b) {
  return b.tech > a.tech ? -1 : 1;
}

function techList(numbers, name) {
  let namelist = name;
  let numberlist = [];
  if (numbers.length === 5) {
    for (let index = 0; index < 5; index += 1) {
      let techlist = {
        name: ' ',
        tech: ' ',
      };
      techlist.tech = numbers[index];
      techlist.name = namelist;
      numberlist[index] = techlist;
    }
    return numberlist.sort(sorting);
  } if (numbers.length === 0) {
    return 'Vazio!';
  }
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Hernanne'));
// novamente exercicio 10 finalizado com ajuda, por estar tendo mt dificuldade com for

// desafio 11;
function generatePhoneNumber() {
}
// Desafio 12;
// eslint-disable-next-line complexity
function triangleCheck(lineA, lineB, lineC) {
  if (lineA + lineB > lineC && lineA + lineC > lineB && lineB + lineC > lineA) {
    return true;
  }
  return false;
}
console.log(triangleCheck(10, 14, 8));
// Desafio 13
function hydrate() {
  // seu código aqui
}

function generatePhoneNumber () {
}

function hydrate(drinks) {
  let Bebidas = drinks.match(/\d+/g).map(Number);
  let resultado = Bebidas.reduce((acumulador, index) => acumulador + index);
  if (resultado > 1) {
    return `${resultado} copos de água`; // Referencia a Giovanni Maldonado, peguei o codigo dele de exemplo, por nao entender a funcao Match.Map
  }
  return `${resultado} copo de água`;
}

console.log(hydrate('5 cervejas, 2 copos de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
