// Desafio 10
// Referência https://www.edsonemiliano.com.br/blog/como-ordenar-uma-array-de-objetos-com-javascript-sort/#:~:text=Caso%20voc%C3%AA%20tenha%20um%20array,usar%20o%20m%C3%A9todo%20sort().&text=return%20(a.,nome%20%3E%20b.
function techList(techs, name) {
  if (techs.length === 0) return 'Vazio!';
  return techs.map((el) => ({ tech: el, name }))
    .sort((el, el2) => {
      let result = 0;
      if (el.tech > el2.tech) {
        result = 1;
      } else if (el2.tech > el.tech) {
        result = -1;
      }
      return result;
    });
}

// Desafio 11
function greaterThanOrEqualThree(number) {
  for (const el of number) {
    if (number.filter((x) => x === el).length >= 3) {
      return true;
    }
  }
  return false;
}
function generatePhoneNumber(number) {
  let output = String(number.join(''));
  if (number.length !== 11) return 'Array com tamanho incorreto.';
  if ((number.filter((x) => x < 0 || x > 9).length > 0) || greaterThanOrEqualThree(number)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return `(${output.substring(0, 2)}) ${output.substring(2, 7)}-${output.substring(7, 11)}`;
}

// Desafio 12
function oneLineGreaterThanOthers(lineA, lineB, lineC) {
  if (lineA > lineB + lineC
      || lineB > lineA + lineC
      || lineC > lineA + lineB) return true;
}
function oneLineLessThanOthers(lineA, lineB, lineC) {
  if (lineA < Math.abs(lineB - lineC)
  || lineB < Math.abs(lineA - lineC)
  || lineC < Math.abs(lineA - lineB)) return true;
}
function triangleCheck(lineA, lineB, lineC) {
  if (oneLineGreaterThanOthers(lineA, lineB, lineC) || oneLineLessThanOthers(lineA, lineB, lineC)) {
    return false;
  }
  return true;
}

// Desafio 13
// Referência https://stackoverflow.com/questions/30607419/return-only-numbers-from-string
function hydrate(string) {
  let sum = string.match(/\d+/g).map(Number).reduce((a, b) => a + b);
  if (sum > 1) return `${sum} copos de água`;
  return `${sum} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
