//Implemente um menu de opções com ESCOLHA para um sistema de biblioteca com as seguintes opções: 1 - cadastrar livro, 2 - buscar livro, 3 - sair -- loop

function menu() {
  let opcoes = [5]
  let index = 0; 

  while (index < opcoes.length) {
    let opcao = opcoes[index];
    console.log("\n📚 MENU");
    console.log("1 - Cadastrar Livro");
    console.log("2 - Buscar Livro");
    console.log("3 - Sair");
    console.log(`Opção escolhida: ${opcao}\n`);

    switch (opcao) {
      case 1:
        console.log("Cadastrando Livro...");
        break;
      case 2:
        console.log("Buscando Livro...");
        break;
      case 3:
        console.log("Saindo do sistema...");
        return; 
      default:
        console.log("Opção inválida! Tente novamente.");
    }

    index++; 
  }
}

menu();
