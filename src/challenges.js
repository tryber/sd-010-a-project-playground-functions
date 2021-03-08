// Desafio 1
function compareTrue(value1, value2) {
    //compara valores
  if (value1 === true && value2 === true) {
    //retorna true se os dois valores sao verdadeiros
    return true;
  } else
  //retorna false se algum dos valores é falso
    return false;
}

// Desafio 2
function calcArea(base, height) {
    //retorna valor da area do triangulo formado pela base e altura 
  return ((base*height)/2);
}

// Desafio 3
function splitSentence(string) {
    //divide a string de entrada onde tem o caractere especial ' ' 
  return string.split(' ')
}

// Desafio 4
function concatName(strings) {
    //retorna o ultimo e depois o primeiro valor do array de strings
  return strings[strings.length - 1] + ', ' + strings[0]
}

// Desafio 5
function footballPoints(wins, ties) {
    //retorna o resultado do calculo de soma ponderada dos pontos
  return ((wins * 3) + (ties * 1))
}

// Desafio 6
function highestCount(numbers) {
    let count = 0; //variavel contadora
    let maxNumber = 0; //variavel para armazenar o maior numero encontrado
    //percorrer o parametro pra identificar o maior numero
    for (let index = 0; index < numbers.length; index += 1){
        if (maxNumber < numbers[index]){
            maxNumber = numbers[index]
        }
    }
    //percorre o parametro para contar quantas vezes ele aparece
    for (index = 0; index < numbers.length; index += 1){
        if (maxNumber === numbers[index]){
            count += 1;
        }
    }
    return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
    
    if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {//.abs calcula o valor absoluto. ideia de distancia
      return('cat1');//caso o gato 1 esteja mais perto         
    }
    if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
      return('cat2');//caso o gato 2 esteja mais perto         
    }
    else{
    return('os gatos trombam e o rato foge');//caso os gatos estejam na mesma distancia do rato
    }
}

// Desafio 8
function fizzBuzz(array) {
    let result = [];//variavel para armazenar array de resultados
        //percorre o array para trocar valores
        for (let index = 0; index < array.length; index += 1){
            if (array[index] % 3 === 0 && array[index] % 5 === 0){
              result.push('fizzBuzz');//troca valores inteiros divisiveis por 3 e por 5 
            }
            if (array[index] % 3 === 0 && array[index] % 5 !== 0){
              result.push('fizz');//troca valores inteiros divisiveis apenas por 3 
            }
            if (array[index] % 3 !== 0 && array[index] % 5 === 0){
              result.push('buzz');//troca valores inteiros divisiveis apenas por 5 
            }
            if (array[index] % 3 !== 0 && array[index] % 5 !== 0){
              result.push('bug!');//troca valores inteiros nem divisiveis por 3 nem por 5
            }
        }
    return(result);//retorna array de resultados 
}

// Desafio 9
function encode(string) {
    string = string.replaceAll('a', '1')
    string = string.replaceAll('e', '2')
    string = string.replaceAll('i', '3')
    string = string.replaceAll('o', '4')
    string = string.replaceAll('u', '5')
    return string
}
function decode(string) {
    string = string.replaceAll('1', 'a')
    string = string.replaceAll('2', 'e')
    string = string.replaceAll('3', 'i')
    string = string.replaceAll('4', 'o')
    string = string.replaceAll('5', 'u')
    return string
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
