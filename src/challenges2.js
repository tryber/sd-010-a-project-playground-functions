// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let techListObject = {};
  let retornoObject = [];
  tech = tech.sort();
  if (tech.length === 0) {
    return 'Vazio!';
  }
  for (let i = 0; i < tech.length; i += 1) {
    techListObject.tech = tech[i];
    techListObject.name = name;
    retornoObject.push({ tech: tech[i], name });
  }
  return retornoObject;
}

// Desafio 11
function generatePhoneNumber(telNumber) {
  // seu código aqui
  let repete;
  let ddd;
  let prim;
  let seg;
  if (telNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < telNumber.length; i += 1) {
    if (telNumber[i] > 9 || telNumber[i] < 0 || repete >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    repete = 0;
    for (let j = 0; j < telNumber.length; j += 1) {
      if (telNumber[i] === telNumber[j]) {
        repete += 1;
      }
    }
  }
  ddd = `(${telNumber[0]}${telNumber[1]})`;
  prim = `${telNumber[2]}${telNumber[3]}${telNumber[4]}${telNumber[5]}${telNumber[6]}-`;
  seg = `${telNumber[7]}${telNumber[8]}${telNumber[9]}${telNumber[10]}`;
  return `${ddd} ${prim}${seg}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let cont = 0;
  let a = parseInt(lineA, 10);
  let b = parseInt(lineB, 10);
  let c = parseInt(lineC, 10);
  if (a <= b + c && b <= a + c && c <= b + a) {
    cont += 1;
  }
  if (a >= Math.abs(b - c) && b >= Math.abs(a - c) && c >= Math.abs(b - a)) {
    cont += 1;
  }
  if (cont === 2) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(bebidas) {
  // seu código aqui
  // https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript/30160994
  let beba = bebidas;
  let numeros = beba.match(/\d+/g);
  let soma = 0;
  for (let i = 0; i < numeros.length; i += 1) {
    soma += parseInt(numeros[i], 10);
  }
  if (soma === 1) {
    return `${soma} copo de água`;
  }
  return `${soma} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
