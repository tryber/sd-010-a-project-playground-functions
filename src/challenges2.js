// Desafio 10
function techList(tech, name) {
  let technologies = {
    tech: tech,
    name: name
  }
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let somLineAB = lineA + lineB;
  let somLineAC = lineA + lineC;
  let somLineBC = lineB + lineC;
  let difAbsolutAB = Math.abs(lineA - lineB);
  let difAbsolutAC = Math.abs(lineA - lineC);
  let difAbsolutBC = Math.abs(lineB - lineC);
  let check;
  if ((lineA < somLineBC && lineA > difAbsolutBC) || (lineB < somLineAC && lineB > difAbsolutAC) || (lineC < somLineAB && lineC > difAbsolutAB)) {
    check = true;
  } else {
    check = false;
  }
  return check;
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

// Testando a função triangleCheck
console.log(triangleCheck(10, 14, 8));
console.log(triangleCheck(1, 6, 8));
console.log(triangleCheck(14, 4, 8));
