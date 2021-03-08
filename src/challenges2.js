// Desafio 10
function techList(techs, name) {
  let object = {}
  let objectArray = []
  if (techs.length === 0) {
    objectArray = 'Vazio!'
  } else {
    techs = techs.sort()
    for (index6 = 0; index6 < techs.length; index6 += 1) {
      object['tech'] = techs[index6];
      object['name'] = name;
      objectArray.push(object);
    }
  }
  return objectArray
}
console.log(techList(['teste1', 'teste2', 'teste3'], 'eric'));


// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(a, b, c) {
  isTriangle = true;
  if (a > b + c) {
    isTriangle = false
  }
  if (b > a + c) {
    isTriangle = false
  }
  if (c > a+ b) {
    isTriangle = false
  }
  if (a < Math.abs(b - c)) {
    isTriangle = false
  }
  if (b < Math.abs(a - c)) {
    isTriangle = false
  }
  if (c < Math.abs(a - b)) {
    isTriangle = false
  }
  return isTriangle
}
console.log(triangleCheck(10, 8, 1));

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
