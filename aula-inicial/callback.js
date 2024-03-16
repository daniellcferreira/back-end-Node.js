function saudacao() {
  console.log("Olá Usuario!");
}

function pontosDoUsuario() {
  console.log("você tem 1000 pontos!");
}

function saldoNaCarteira() {
  console.log("você tem 10 reais");
}

function retornaInfoDoUsuario(callback) {
  console.log(saudacao());
  callback();
}

retornaInfoDoUsuario(pontosDoUsuario);
retornaInfoDoUsuario(saldoNaCarteira);
