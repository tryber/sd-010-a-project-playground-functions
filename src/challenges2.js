// Desafio 10
function techList(Arraytech, name) {
  if (Arraytech.length === 0) {
    return 'Vazio!';
  }
  
  if (Arraytech !== 0) {
    let orderedArray = Arraytech.sort();
    let skills = [];

    for (let index = 0; index < orderedArray.length; index += 1) {
      skills.push({
        tech: orderedArray[index],
        name: name,
      });
    }

    return skills;
  }
}

// Desafio 11
function generatePhoneNumber(numericArray) {
  
  function checkLength() {
    if (numericArray.length !== 11) {
      return true ;
    }
  }
  checkLength();

  function checkHigher() {
    for (let index = 0; index < numericArray.length; index += 1) {
      if (numericArray[index] < 0 || numericArray[index] > 9) {
        return true;
      }
    }  
  }
  checkHigher();

  function checkRepeat() {
    for (let index = 0; index < numericArray.length; index += 1) {
      function check(number) {
        return number === numericArray[index];
      }

      let treeTimes = numericArray.filter(check);

      if (treeTimes.length >= 3) {
        return true;
      }
    }
  }
  checkRepeat();
  
  if (checkLength() === true) {
    return "Array com tamanho incorreto.";
  }

  if (checkHigher() === true || checkRepeat() === true ) {
    return "não é possível gerar um número de telefone com esses valores";
  }
  
  numericArray.splice(0, 0, "(")
  numericArray.splice(3, 0, ")")
  numericArray.splice(4, 0, " ")
  numericArray.splice(10, 0, "-")

  let phoneNumber = numericArray.join('');

  return phoneNumber;
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
