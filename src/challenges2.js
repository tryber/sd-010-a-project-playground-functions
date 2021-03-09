// Desafio 10
function techList(array, name) {
  let objectArray = [];
  if (array.length === 0) {
    return 'Vazio!';
  }
  let arraySorted = array.sort();
  for (let index = 0; index < arraySorted.length; index += 1) {
    objectArray.push({
      tech: array[index],
      name });
  }
  return objectArray;
}

// Desafio 11
function numbersRepetitionVerificator(array) {
  let sum;
  for (let index = 0; index < array.length; index += 1) {
    sum = 0;
    for (let index2 = 0; index2 < array.length; index2 += 1) {
      if (array[index] === array[index2]) {
        sum += 1;
      }
    }
    if (sum >= 3) {
      return true;
    }
  }
  return false;
}

function stringConcatenationPhoneNumber(string) {
  let abrirParentese = '(';
  let fecharParentese = ') ';
  let traco = '-';
  string = string.substring(0, 0) + abrirParentese + string.substring(0, string.length);
  string = string.substring(0, 3) + fecharParentese + string.substring(3, string.length);
  string = string.substring(0, 10) + traco + string.substring(10, string.length);
  return string;
}

function generatePhoneNumber(array) {
  let phoneNumber = '';
  if (array.length === 11) {
    for (let index = 0; index < array.length; index += 1) {
      if (array[index] < 0 || array[index] > 9 || numbersRepetitionVerificator(array)) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
      phoneNumber += array[index];
    }
    return stringConcatenationPhoneNumber(phoneNumber);
  }
  return 'Array com tamanho incorreto.';
}

// Desafio 12
function triangleSideCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  }
}

function triangleCheck(lineA, lineB, lineC) {
  if (triangleSideCheck(lineA, lineB, lineC) && triangleSideCheck(lineB, lineA, lineC)
    && triangleSideCheck(lineC, lineA, lineB)) {
    return true;
  }
  return false;
}

// Desafio 13
/* https://pt.stackoverflow.com/questions/3719/como-obter-apenas-os-n%C3%BAmeros-de-uma-string-em-javascript
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp
Funcao .replace(/\D/g, '') - Onde /\D/ = Alfabeto e g - fazer em todos os caracteres da string */
function hydrate(string) {
  let numbersString = string.replace(/\D/g, '');
  let numbersArray = [];
  for (let index = 0; index < numbersString.length; index += 1) {
    numbersArray.push(parseInt(numbersString.charAt(index), 10));
  }
  let sum = 0;
  for (let index = 0; index < numbersArray.length; index += 1) {
    sum += numbersArray[index];
  }
  let coposDagua = ' copos de água';
  if (sum <= 1) {
    coposDagua = ' copo de água';
  }
  return sum + coposDagua;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};