// Desafio 1
function compareTrue(param1 , param2) {
  if(param1 === param2 && param1 === true) {
  return true;

}
else {
  return false;
 
}
};

// Desafio 2
function calcArea(base , height) {  
let resultado = (base*height)/2;
  return resultado; 
};

// Desafio 3
function splitSentence(frase) {
let array = [];
let espaco = ',';
for (let index = 0; index < frase.length; index += 1){
  if (frase[index] != ''){
    frase = frase + espaco;
    console.log(array)
}

// Desafio 4
function concatName() {
  // seu código aqui
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
