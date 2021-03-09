// Desafio 10
// Exercício feito com a ajuda do Rodrigo Queiroz
// Link: https://trybecourse.slack.com/archives/D01QM9QK51S
function techList(tecnologias, nome) {
  if (tecnologias.length === 0) {
    return 'Vazio!';
  }

  let arrayTech = tecnologias.sort();
  let newArray = [];

  for (let index = 0; index < arrayTech.length; index += 1) {
    newArray.push(
      {
        tech: arrayTech[index],
        name: nome,
      },
    );
  }
  return newArray;
}

// Desafio 11
// Exercício corrigido com a ajuda do código do Felipe Flores
// Link: https://github.com/tryber/sd-010-a-project-playground-functions/blob/9cc66910b7a0b4bd1a816105407ad14e7594d1b1/src/challenges2.js
function checkingRepetition(numbers) {
  for (let index = 0; index < numbers.length; index += 1) {
    let contador = 0;
    for (let index2 = 0; index2 < numbers.length; index2 += 1) {
      if (numbers[index] === numbers[index2]) {
        contador += 1;
      }
    }
    if (contador >= 3) {
      return true;
    }
  }
  return false;
}

function checkingBiggerAndSmaller(numbers) {
  let evaluator = false;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < 0 || numbers[index] > 9) {
      evaluator = true;
    }
  }
  return evaluator;
}

function generatePhoneNumber(numbers) {
  // seu código aqui
  let numberFone = [];

  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  if (checkingBiggerAndSmaller(numbers) === true || checkingRepetition(numbers) === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  numberFone = `${'('}${numbers[0]}${numbers[1]}${')'}`;
  numberFone += `${' '}${numbers[2]}${numbers[3]}${numbers[4]}${numbers[5]}${numbers[6]}`;
  numberFone += `${'-'}${numbers[7]}${numbers[8]}${numbers[9]}${numbers[10]}`;
  return numberFone;
}

// Desafio 12
// Exercício corrigido com a ajuda de Rafael Medeiros Gomes
// Link: https://trybecourse.slack.com/archives/C01L16B9XC7/p1614785978007300
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if ((lineA < lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    return true;
  }
  return false;
}

// Desafio 13
// Exercício feito com ajuda do código da Beatriz Barbosa
// Link: https://github.com/tryber/sd-010-a-project-playground-functions/blob/527f5796ac7ec7bad9b67ced582b84034acf2531/src/challenges2.js
// d+ (d significa o intervalo de 0-9 e o +, significa que o \d deve repetir 1 ou mais vezes)
// /g (realiza a pesquisa global, por todo a frase, sem o /g, a função match retorna apenas a primeira ocorrência);
function hydrate(phrase) {
  // seu código aqui
  let phraseNumbers = phrase.match(/\d+/g);
  let water = 0;

  for (let index = 0; index < phraseNumbers.length; index += 1) {
    let converting = parseInt (phraseNumbers[index]);
    water += converting;
  }

  if (water === 1) {
    return (`${water} ${'copo de água'}`);
  }
  return (`${water} ${'copos de água'}`);
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
