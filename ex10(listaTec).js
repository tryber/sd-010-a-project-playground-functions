function TechNames(techArray, nome) {
  let techOrdem = techArray.sort();
  let tecnologias = [];
  let tecOutput;
  if (techArray.length >= 1) {
    for (let index = 0; index < techArray.length; index += 1) {
      tecnologias[index] = {
        tecnologia: techOrdem[index],
        User: nome,
      }
    }
    tecOutput = tecnologias;
  } else {
    tecOutput = "Vazio!";
  }
  return tecOutput;
}
let array = ["React", "Jest", "HTML", "CSS", "Javascript"];
let nome = "Felipe";
console.log(TechNames(array, nome));
