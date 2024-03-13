function saudacaoComHora(nome, hora) {
  let comprimento;
  if (hora < 6) {
    comprimento = "Boa Madrugada";
  } else if (hora < 12) {
    comprimento = "Bom Dia";
  } else if (hora < 18) {
    comprimento = "Boa Tarde";
  } else {
    comprimento = "Boa Noite";
  }

  console.log(`${comprimento}, ${nome}`);
}

saudacaoComHora("Pedro", 22);