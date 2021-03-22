// Desafio 10
function techList(techName, user) {
  let orderTechName = techName.sort();
  let output = [];
  if (orderTechName.length === 0) {
    output = 'Vazio!';
  }
  for (let i = 0; i < techName.length; i += 1) {
    output.push({
      tech: orderTechName[i],
      name: user,
    });
  }
  return output;
}

// console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));
// console.log(techList([], 'Lucas'));

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
// Para trinângulo existir = é necessário que a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois e maior que o valor absoluto da diferença entre essas medidas
function triangleCheck(a, b, c) {
  const conditionOne = b + c;
  const conditionTwo = Math.abs(b - c);

  return a < conditionOne && a > conditionTwo;
}

// console.log(triangleCheck(10, 14, 8));

// Desafio 13
function print(water) {
  const simple = ' copo de água';
  const plural = ' copos de água';
  if (water > 1) {
    return water + plural;
  }
  return water + simple;
}

function hydrate(string) {
  let water = 0;
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] > 0 && string[i] < 10) {
      water += parseInt(string[i], 10);
    }
  }
  return print(water);
}

console.log(hydrate('1 cerveja'));
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));
console.log(hydrate('2 vodkas e 8 tequilas'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
