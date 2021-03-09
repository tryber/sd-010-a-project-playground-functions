// Desafio 10
// Este código fiz com ajuda da Elisa França.
// Usei também o W3School para aprender sobre o sort.
function techList(tech, name) {
  if (tech.length === 0) {
    return 'Vazio!';
  }
  let tecno = tech.sort();
  let techSortList = [];
  for (let index = 0; index < tecno.length; index += 1) {
    techSortList.push(
      {
        tech: tecno[index],
        name,
      },
    );
  }
  return techSortList;
}
console.log(techList([]));
// Desafio 11
// Tirei uma dúvida no repositório do Edmilson - PullRequest #139 sobre o segundo for utilizado na função o restante eu já havia feito. Então percebi que o primeiro for guarda o número e o segundo compara todos os outros com esse guardado até que todos sejam comparados para que seja verificado se algum deles se repetem mais de 3 vezes e se são maiores que 9 ou menos que 0.
function generatePhoneNumber(pNumber) {
  if (pNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < pNumber.length; index += 1) {
    let number = pNumber[index];
    let count = 0;
    if (number < 0 || number > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    for (let index2 = 0; index2 < pNumber.length; index2 += 1) {
      if (number === pNumber[index2]) {
        count += 1;
      }
      if (count >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  return `(${pNumber[0]}${pNumber[1]}) ${pNumber[2]}${pNumber[3]}${pNumber[4]}${pNumber[5]}${pNumber[6]}-${pNumber[7]}${pNumber[8]}${pNumber[9]}${pNumber[10]}`;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
