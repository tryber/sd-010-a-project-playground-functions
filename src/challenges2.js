// Desafio 10
function techList(arrayNames, name) {
  if ( arrayNames.length === 0){
    return 'Vazio!'
  } 
  
  let ObjetoTech = []; // criei o bjeto que vai ser retornado
  let arrayOrdenado = arrayNames.sort() //coloquei em ordem 

  for (let index = 0; index < arrayOrdenado.length; index += 1){ // percorri o array e cada indice adicio no meu objetoTech
   ObjetoTech.push({
   tech: arrayNames[index],
   name: name
    })
} 
  return ObjetoTech;
}

//console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'lucas'));

//Desafio 11 
function generatePhoneNumber(arrayNumbers) {

/*  // conferindo se o array é diferente de 11 numeros
  if (arrayNumbers.length !== 11){
    return "Array com tamanho incorreto.";
  } 

  // conferindo se o array tem numero 0 ou numero maior q 9
  for (let index = 0; index < arrayNumbers.length; index += 1){
    if (arrayNumbers[index] = 0 || arrayNumbers[index] > 9) {
    return "não é possível gerar um número de telefone com esses valores";
    }
  }

  // conferindo se o numero repete mais de 3 vezes
  let = contaNumeroRepetido = 0;
  for (let index = 0; index < arrayNumbers.length; index += 1){
    if (arrayNumbers[index] === arrayNumbers[index]){
    contaNumeroRepetido += 1;
    }
  return contaNumeroRepetido;  
  }

  if (contaNumeroRepetido >= 3){
  return "não é possível gerar um número de telefone com esses valores";
  }
 
  // montando o numero de telefone
  for (let index = 0; index < arrayNumbers.length; index += 1){
  }
*/

}


// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC) ) {
    return true;
  } else if (lineA > lineB + lineC || lineA < Math.abs(lineB - lineC)) {
    return false; 
  } 
}

// Desafio 13 

function hydrate(string) {
  let stringNumeros = string.match(/\d+/g); //crio um array com os numeros dentro da string o \d+ retorna os numeros juntos /g faz ser global, buscar em toda a frase e não apenas a primeira ocorrência
  let agua = 0;

  for (let index = 0; index < stringNumeros.length; index += 1){
    let  converterCaracter = parseInt (stringNumeros[index]); // A função parseInt() analisa um argumento string e retorna um inteiro
    agua += converterCaracter;
  }

  if (agua === 1){
    return agua + ' copo de água';
  } else if ( agua > 1){
    return agua + ' copos de água';
  }
}


//console.log(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho"));



module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
