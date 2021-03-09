// Desafio 10

function techList(technologies, studantsname) {
  let arrayOfTechs = [];
  for (let index = 0; index < technologies.sort().length; index += 1) {
    let newObject = { tech: technologies[index], name: studantsname };
    arrayOfTechs.push(newObject);
  }
  if (technologies.length === 0) {
    arrayOfTechs = 'Vazio!';
  }
  return arrayOfTechs;
}

// Desafio 11

function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12

function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  } else if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    return true;
  } else if (lineC < lineB + lineA && lineC > Math.abs(lineA - lineB)) {
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
