const cargos = ["Professor", "Diretor", "Coodernador", "cozinheira"];

const usuarios = [
  { nome: "Diego", email: "exemplo@gmail.com" },
  { nome: "Davi", email: "exemplo1@exemplo.com" },
  { nome: "Rute", email: "exemplo3@gmail.com" },
];

const usuariosGmail = usuarios.filter((usuario) => {
  return usuario.email.includes("gmail.com");
});

console.log(usuariosGmail);
