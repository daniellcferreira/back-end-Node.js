const prompt = require("prompt-sync")();

console.log("0. Sair do Sistema");
console.log("1. Cadastrar Usuario");
console.log("2. Pesquisar Usuario por CPF");
console.log("3. Adicionar esporte ao Usuario");
console.log("4. Deletar Usuario");

const option = prompt("Escolhaa uma opção: (de 0 a 4): ");
console.log(option);

const users = [];

if (option === 1) {
  const nome = prompt("Digite o NOME do usuario: ");
  const cpf = prompt("Digito o numero do CPF do usuario: ");

  users.push({ nome, cpf });
}
