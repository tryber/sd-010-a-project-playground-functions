// Desafio 10
function techList(list, name) {
  // seu código aqui
  if (list.length === 0) {
    return 'Vazio!';
  }
  list.sort();
  const newArray = list.map((element) => {
    const result = { tech: `${element}`, name };
    return result;
  });
  return newArray;
}
console.log(techList(['JavaScript', 'Phyton', 'Java', 'C++'], 'Lucas'));

// Desafio 11

function generatePhoneNumber(dd, number, equal) {
  let conta = 0;
  if (number.length !== 9 || dd.length !== 2) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < number.length; index += 1) {
    if(number[index] === equal) { 
      conta += 1
      }
    if (number[index] > 9 || number[index] < 0) {
      return 'não é possível gerar um número de telefone com esses valores'
    }
  }
  if (conta >= 3) {
    return 'não é possível gerar um número de telefone com esses valores'
  }
  const dDD = dd.join('')
  const numbers = number.join('')

  return `(${dDD})${numbers}`;
}
console.log(generatePhoneNumber([1, 9], [3, 9, 7, 1, 3, 4, 9, 2, 2,], 9));
// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
