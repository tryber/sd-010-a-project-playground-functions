// Desafio 10
function sorting(a, b) {
  return b.tech > a.tech ? -1 : 1;
}

function techList(array, name) {
  let nameInTheList = name;
  let newArray = [];
  if (array.length === 5) {
    for (let key = 0; key < 5; key += 1) {
      let technologiesList = {
        tech: ' ',
        name: ' ',
      };
      technologiesList.tech = array[key];
      technologiesList.name = nameInTheList;
      newArray[key] = technologiesList;
    }
    return newArray.sort(sorting);
  } if (array.length === 0) {
    return 'Vazio!';
  }
}

/* Referências usadas para resolver o Desafio 10:
 https://pt.stackoverflow.com/questions/338916/colocando-em-ordem-alfabética-um-array-de-objetos
 O plantão do instrutor Bernardo foi de grande ajuda para pensar a estrutura lógica do código deste desafio */

// Desafio 11

// Dividir a função em problemas menores.

// 1 - Descobrir se há repetição na lista.
function verifyDuplicates(numberList) {
  let countNumber = {};
  for (let number in numberList) {
    if (countNumber[numberList[number]]) {
      countNumber[numberList[number]] += 1;
    } else {
      countNumber[numberList[number]] = 1;
    }
  }
  return countNumber;
}

// 2 - Verificar quantos números se repetem na lista (se o número de repetições é igual ou maior do que 3).
function countDuplicates(numberList) {
  let counter = verifyDuplicates(numberList);
  for (let number in numberList) {
    if (counter[numberList[number]] >= 3) {
      return true;
    }
  }
}
/* Consultei o código do colega João Nascimento (@nascjoao) para estruturar as funções 1 e 2 acima
(sobre como encontrar números que se repetem no array por 3 vezes ou mais) */

// 3 - Verificar as outras condições de exclusão.
function theExcludentConditions(arrayOfNumbers) {
  for (let key in arrayOfNumbers) {
    if (arrayOfNumbers[key] < 0 || arrayOfNumbers[key] > 9) {
      return true;
    }
  }
}

// 4 - Transformar em string e colocar em formato de número de telefone.
function phoneNumberFormat(phoneNumber) {
  let messageOne = `(${phoneNumber[0]}${phoneNumber[1]}) `;
  let messageTwo = `${phoneNumber[2]}${phoneNumber[3]}${phoneNumber[4]}`;
  let messageThree = `${phoneNumber[5]}${phoneNumber[6]}`;
  let messageFour = `-${phoneNumber[7]}${phoneNumber[8]}${phoneNumber[9]}${phoneNumber[10]}`;
  return messageOne + messageTwo + messageThree + messageFour;
}

function generatePhoneNumber(phoneNumber) {
  if (phoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (theExcludentConditions(phoneNumber)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  if (countDuplicates(phoneNumber) === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return phoneNumberFormat(phoneNumber);
}

/* Referências utilizadas para resolução do Desafio 11 (sobre laço for...of, toString, repetição de números):
https://woliveiras.com.br/posts/laços-de-repetição-for-for-in-for-of/
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/toString
https://stackoverflow.com/questions/19395257/how-to-count-duplicate-value-in-an-array-in-javascript/19395302#19395302
E deixo aqui meu agradecimento ao colega João Nascimento, pois seu código ajudou muito a perceber em qual parte do meu código eu estava errando */

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA + lineB > lineC && lineB + lineC > lineA && lineC + lineA > lineB) {
    return true;
  }
  return false;
}

/* Referências utilizadas para resolução de Desafio 12:
  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
- Agradecimento especial ao colega Rafael Medeiros Gomes, que deu uma dica sobre como refatorar
  o Desafio 12, segue link da thread no Slack:
https://trybecourse.slack.com/archives/C01L16B9XC7/p1614785978007300
- Link para as regras/condições de Triângulo no Wikipedia:
https://en.wikipedia.org/wiki/Triangle_inequality */

// Desafio 13
function hydrateInstructions(sumOfNumbers) {
  let glassOfWater = 'copo de água';
  let glassesOfWater = 'copos de água';
  if (sumOfNumbers > 1) {
    return `${sumOfNumbers} ${glassesOfWater}`;
  }
  if (sumOfNumbers === 1) {
    return `${sumOfNumbers} ${glassOfWater}`;
  }
}

function hydrate(welcomeToTrybePub) {
  for (let key = 0; key < welcomeToTrybePub.length; key += 1) {
    if (welcomeToTrybePub.match(/\d+/g).map(Number)) {
      let numbers = (welcomeToTrybePub.match(/\d+/g).map(Number));
      let sumOfNumbers = numbers.reduce(function (total, num) {
        return parseInt(total, 9) + parseInt(num, 9);
      });
      return hydrateInstructions(sumOfNumbers);
    }
  }
}

/* Para resolução do Desafio 13, foram consultadas as referências abaixo:

- Para a linha 126 do código acima (que busca a correspondência e extrai números de strings),
  foi utilizado o código postado neste fórum aqui:
https://codereview.stackexchange.com/questions/115885/extract-numbers-from-a-string-javascript

- Para as linhas 127 e 128 do código acima (que somam os números dentro de strings),
  tomei por base o código postado aqui:
https://javascript.plainenglish.io/javascript-algorithm-calculate-sum-of-numbers-in-a-string-dd007da460b7

- Sobre o uso da expressão (/\d+/g) na linha 125, tomei por base as referências anteriores e também
  a documentação abaixo:
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions

- Sobre método reduce:
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

- Inicialmente, utilizava o parseFloat, mas depois pensei que faria mais sentido substituir pelo ParseInt,
  por isso seguem abaixo as referências das documentações usadas sobre os dois métodos e os
  respectivos parâmetros. Uso o 9 como base, em conformidade com as instruções do desafio 13,
  que orientam a considerar que o número na frente de cada bebida está no intervalo entre 1 e 9:
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt */

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
