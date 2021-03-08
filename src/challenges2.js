// Desafio 10
function techList(techs, name) {
  let ret = [];

  for (let index = 0; index < techs.length; index += 1) {
    let obj = {tech: techs[index], name: name};
    ret.push(obj);
  }
  ret.sort(function (a, b) {
    if (a.tech > b.tech) {
      return 1;
    }
    if (a.tech < b.tech) {
      return -1;
    }
    return 0;
  });

  if (techs.length === 0) {
    return "Vazio!";
  } else {
    return ret;
  }
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));

// Desafio 11
function generatePhoneNumber(numberPhone) {
  let phone = [];
  let res = '';

  if (numberPhone.length !== 11) {
    return "Array com tamanho incorreto."
  }
  for (index = 0; index < numberPhone.length; index += 1) { 
    if (numberPhone[index] < 0 || numberPhone[index] > 9) {
      return "não é possível gerar um número de telefone com esses valores"
    }
    var quantidadeElementos = numberPhone.filter(x => x === numberPhone[index]).length;
    if (quantidadeElementos >= 3) {
      return "não é possível gerar um número de telefone com esses valores"
    }
    res = res + numberPhone[index];
  }
   res = res.replace(/\D/g,"");             //Remove tudo o que não é dígito
   res = res.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
   res = res.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos

   return res;
 };
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 3, 0, 1]));

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
