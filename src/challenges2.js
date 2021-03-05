// Desafio 10
function techList() {
  // seu código aqui
  // Marilia
}

// Desafio 11
function generatePhoneNumber(numbers) {
  let num = numbers;
  if (numbers.length < 11 || numbers.length > 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > 9 || numbers[index] < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let numbersSort = numbers.slice().sort();
  let count = 1;
  for (let index = 0; index < (numbersSort.length - 1); index += 1) {
    if (numbersSort[index] === numbersSort[(index + 1)]) {
      count += 1;
      if (count === 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    } else {
      count = 1;
    }
  }
  let prefix = (num.slice(0, 2));
  let prefixToString = prefix.map(String);
  let finalPrefix = prefixToString.join('');
  let phoneNumber1 = (num.slice(2, 7));
  let phoneToString1 = phoneNumber1.map(String);
  let phone1 = phoneToString1.join('');
  let phoneNumber2 = (num.slice(7, 11));
  let phoneToString2 = phoneNumber2.map(String);
  let phone2 = phoneToString2.join('');
  return `(${finalPrefix}) ${phone1}-${phone2}`;
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let condA = lineB + lineC;
  let condB = lineA + lineC;
  let condC = lineA + lineB;
  let condD = Math.abs(lineB - lineC);
  let condE = Math.abs(lineA - lineC);
  let condF = Math.abs(lineA - lineB);
  let hypotesisA = ((lineA < condA) && (lineB < condB) && (lineC < condC));
  let hypotesisB = ((lineA > condD) && (lineB > condE) && (lineC > condF));
  if (hypotesisA && hypotesisB) {
    return true;
  } return false;
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
