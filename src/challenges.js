// Desafio 1
function compareTrue(val1, val2) {
  if (val1 === true && val2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  let str = '';
  str = frase;
  str += ' ';
  let letra = [];
  let armazenaPalavra = [];

  for (let index = 0; index < str.length; index += 1) {
    if (str[index] !== ' ') {
      letra += str[index];
    } else {
      armazenaPalavra.push(letra);
      letra = [];
    }
  }
  return armazenaPalavra;
}

splitSentence('Eita Nois');

// Desafio 4
function concatName(paramNomes) {
  let nomes = [];
  let primeiroNome = '';
  let ultimoNome = '';

  for (let index = 0; index < paramNomes.length; index += 1) {
    nomes.push(paramNomes[index]);
  }
  primeiroNome = nomes[nomes.length - 1];
  ultimoNome = nomes[0];
  let fullName = primeiroNome + ', ' + ultimoNome;
  return fullName;
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
