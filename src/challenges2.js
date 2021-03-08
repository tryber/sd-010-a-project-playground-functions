// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let techArray = {};
  let techObj = [];
  tech = tech.sort();

  if (tech.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < tech.length; index += 1) {
    techArray.tech = tech[index];
    techArray.name = name;
    techObj.push({ tech: tech[index], name });
  }
  return techObj;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let DistA = Math.abs(lineA - lineB);
  let DistB = lineA + lineB;
  if (lineC > DistA && lineC < DistB) {
    return true;
  }
  return false;
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
