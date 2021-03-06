function splitSentence(frase) {
  let arrayStrings = [];
  for (let index = 0; index < frase.length; index += 1) {
    arrayStrings = frase.split(" ");
    return arrayStrings;
  }
}
console.log(splitSentence("Sou aluno Trybe. Nunca Desisto!"));
