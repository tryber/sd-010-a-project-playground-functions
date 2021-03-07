// Desafio 10
// parte do push do objeto feito a partir da lógica do video do plantão dado pelo Isaac da turma 9 - https://trybecourse.slack.com/files/U0192L1KL5U/F01G1FJET51/chsd009_-_dia_5.1_-_plant__o_18h_-_isaac.mp4?origin_team=TMDDFEPFU&origin_channel=C01L16B9XC7
function techList(technology, name) {
  if (technology.length === 0) {
    return 'Vazio!';
  };
  let techsort = technology.sort();
  let techs = [];
  for (let index in techsort) {
    techs.push ({
      tech: techsort[index],
      name: name,
    });
  }
  return techs;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  let index = 0;
  let repetition = numbers[index];
  let number = '';
  let count = 0;
  if (numbers.length !== 11) {
    console.log ("Array com tamanho incorreto.");
  }
  for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < 0 || numbers[index] > 9){
      console.log('não é possível gerar um número de telefone com esses valores');
    } else if (repetition === numbers[index]) {
      count += 1;
    }
  } if (count >= 3){
      console.log('não é possível gerar um número de telefone com esses valores');
  }
}

function phoneDivision (numbers){
  let ddd = numbers[0] + numbers[1];
  let firstPartPhone = numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6];
  let secondPartPhone = numbers[7] + numbers[8] + numbers[9] + numbers[10];
  console.log('(' + ddd + ')' + ' ' + firstPartPhone + '-' + secondPartPhone);
}


// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (la(lineA, lineB, lineC) && lb(lineA, lineB, lineC) && lc(lineA, lineB, lineC)){
    return true;
  } 
    return false;
}

function la(lineA, lineB, lineC) {
  if ((lineA < lineB + lineC) && (lineA > Math.abs (lineB - lineC)));{
    return true;
  }
}

function lb(lineA, lineB, lineC) {
  if (lineB < lineA + lineC && lineB > Math.abs (lineA - lineC)){
    return true;
  }
}

function lc(lineA, lineB, lineC) {
  if (lineC < lineB + lineA && lineC > Math.abs (lineB - lineA)){
    return true;
  }
}    


// Desafio 13
// resposta feita a partir do video https://www.youtube.com/watch?v=pfkkdzeyx6U
function hydrate(phrase) {
  let reg = /\d+/g;
  let result = phrase.match(reg);
  let answer = 0;
  for (index = 0; index < result.length; index += 1) {
    answer += parseInt(result[index]);
  }
  if (answer === 1){
    console.log(answer + ' copo de água');
  } else {
  console.log(answer + ' copos de água');
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
