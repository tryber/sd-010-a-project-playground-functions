// Desafio 10
function techList(arr, name) {
  if (arr.length === 0) return 'Vazio!';
  return arr.reduce((acc, curr) => {
    const object = { 'tech': curr, 'name': name };
    acc.push(object);
    acc.sort((el1, el2) => {
      if (el1.tech > el2.tech) return 1;
      if (el1.tech < el2.tech) return -1;
      return 0;
    });
    return acc;
  }, []);
}
// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

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
