// Desafio 10
function techList(techsArray, name) {
  if (!techsArray || techsArray.length === 0) {
    return 'Vazio!';
  }

  let serializedTechs = [];

  for (const item of techsArray.sort()) {
    serializedTechs.push(
      {
        tech: item,
        name,
      },
    );
  }
  return serializedTechs;
}

// Desafio 11
function phoneNumberConditionsVerify(phone) {
  let isNumberValid = function numberAppearenceVerify(number) {
    for (const n of number) {
      if (number.filter((numChar) => numChar === n).length >= 3) {
        return true;
      }
    }
    return false;
  };
  let isNumberInRange = phone.filter((num) => num < 0 || num > 9).length > 0;

  return isNumberValid(phone) || isNumberInRange;
}

function generatePhoneNumber(phone) {
  if (phone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  if (phoneNumberConditionsVerify(phone)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  return `(${phone[0]}${phone[1]}) ${phone[2]}${phone[3]}${phone[4]}\
${phone[5]}${phone[6]}-${phone[7]}${phone[8]}${phone[9]}${phone[10]}`;
}

// Desafio 12
function lineCheck(currentLine, lineX, lineY) {
  return currentLine < (lineX + lineY) && currentLine > Math.abs(lineX - lineY);
}

function triangleCheck(lineA, lineB, lineC) {
  let verifyLineA = lineCheck(lineA, lineB, lineC);
  let verifyLineB = lineCheck(lineB, lineA, lineC);
  let verifyLineC = lineCheck(lineC, lineB, lineA);

  if (verifyLineA && verifyLineB && verifyLineC) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(string) {
  let r = /\d+/g; // Este trrecho código foi retirado de https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript/30160994
  let numberInTheString = string.match(r);
  let sum = numberInTheString.map(Number).reduce((a, b) => a + b);

  if (sum === 1) return `${sum} copo de água`;
  return `${sum} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
