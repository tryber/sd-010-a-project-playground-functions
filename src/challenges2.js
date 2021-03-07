// Desafio 10
function techList(techName, humanName) {
      if (techName.length === 0) {
    return 'Vazio!';
  }
    let list = [];
    let object = {}
  for (let i = 0; i < techName.length; i += 1){
    list.push({
      tech: techName[i], name: humanName,
    });
  }
  /** Source: https://www.edsonemiliano.com.br/blog/como-ordenar-uma-array-de-objetos-com-javascript-sort/#:~:text=Caso%20voc%C3%AA%20tenha%20um%20array,usar%20o%20m%C3%A9todo%20sort().&text=return%20(a.,nome%20%3E%20b. */
  return list.sort(function (a, b) {
	
    return (a.tech > b.tech) ? 1 : ((b.tech > a.tech) ? -1 : 0);
   
  });
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}



console.log(techList(['react', 'jest', 'HTML', 'CSS', 'javascript'], 'lucas'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
1
