const cargos = ["Professor", "Diretor", "Coodernador", "cozinheira"];

const cargosComFlexao = cargos.map((cargos) => {
  return cargos + "(a)";
});

console.log(cargos);
console.log(cargosComFlexao);

const usuarios = [
  { nome: "Diego", email: "exemplo@exemplo.com" },
  { nome: "Davi", email: "exemplo1@exemplo.com" },
  { nome: "Rute", email: "exemplo3@exemplo.com" },
];

const usuariosUserName = usuarios.map((usuario) => ({
  ...usuario,
  newUserName: usuario.email.split("@")[0],
}));

console.log(usuariosUserName);
