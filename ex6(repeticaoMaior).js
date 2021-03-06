function highestCount(arrayNumbers) {
  let numMaior = 0;
  let contaRepeticao = 0;
  for (let index in arrayNumbers) {
    if (numMaior < arrayNumbers[index]) {
      numMaior = arrayNumbers[index];
    }
    if (numMaior === arrayNumbers[index]) {
      contaRepeticao += 1;
    }
  }
  return contaRepeticao;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
