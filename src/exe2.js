//faça um algoritmo que leia a idade e informe : maior de idade, menor de idade ou idoso (acima de 60 anos) -- switch case ou if else

const idade = 65

if (idade < 18) {
    console.log("Menor de idade")
} else if (idade >= 18 && idade < 60) {
  console.log("Maior de idade")
} else {
  console.log("Idoso")
} //esse foi o jeito q eu fiz mas eu sei que o senhor quer switch case

switch (idade) {
    case (idade < 18): 
    console.log("Menor de idade")
    break;
      case (idade >= 18 && idade < 60):
      console.log("Maior de idade")
      break;
        default:
        console.log("Idoso")
}