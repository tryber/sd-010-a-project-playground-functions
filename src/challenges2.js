// Desafio 10
const techList = (tech, name) => {
  if (tech.length < 1) {
    return 'Vazio!';
  }
  let objects = tech.sort();
  let listTech = objects.map((techname) => ({ tech: techname, name }));
  return listTech;
};

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));
/* [
  { tech: 'CSS', name: 'Lucas' },
  { tech: 'HTML', name: 'Lucas' },
  { tech: 'JavaScript', name: 'Lucas' },
  { tech: 'Jest', name: 'Lucas' },
  { tech: 'React', name: 'Lucas' }
] */
console.log(techList([], 'Lucas')); // Vazio!

// Desafio 11
const checkLength = (phone) => ((phone.length !== 11));

const checkNumbers = (phone) => {
  const result = phone.some((number) => number > 9 || number < 0);
  return result;
};

const checkRepetition = (phone) => {
  let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let result = false;
  for (let index = 0; index < phone.length; index += 1) {
    count[phone[index]] += 1;
  }
  for (let index = 0; index < count.length; index += 1) {
    if (count[index] >= 3) {
      result = true;
    }
  }
  return result;
};

function generatePhoneNumber(phone) {
  const join = phone.join('');
  const regex = /([0-9]{2})([0-9]{5})([0-9]{4})/gm;
  if (checkLength(phone) === true) {
    return 'Array com tamanho incorreto.';
  } if (checkNumbers(phone) === true || checkRepetition(phone) === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return join.replace(regex, '($1) $2-$3');
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1])); // (12) 34567-8901
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // Array com tamanho incorreto.
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11])); // não é possível gerar um número de telefone com esses valores
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 0, 0, 0])); // não é possível gerar um número de telefone com esses valores

// Desafio 12
const triangleCheck = (lineA, lineB, lineC) => {
  let resultado;
  if ((lineA < lineB + lineC) && (lineB < lineA + lineC) && (lineC < lineA + lineB)) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
};

console.log(triangleCheck(10, 14, 8)); // true
console.log(triangleCheck(23, 14, 8)); // false

// Desafio 13
const hydrate = (waterQ) => {
  let quantity = waterQ.match(/\d+/g);
  // Como visto em: https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript/30160994
  let water = 0;
  for (let index = 0; index < quantity.length; index += 1) {
    let frase = Number(quantity[index]);
    water += frase;
  }
  if (water === 1) {
    return `${water} copo de água`;
  } if (water > 1) {
    return `${water} copos de água`;
  }
};

console.log(hydrate('1 cerveja')); // 1 copo de água
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')); // 7 copos de água

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
