function climaAtual() {
  const climaPossiveis = ["Ensolarado", "Chovendo", "Nevando"];
  const climaSorteado = climaPossiveis[Math.round(Math.random() * 2)];
  return `Hoje o tempo está ${climaSorteado}`;
}

console.log(climaAtual());

const climaAtualArrow = () => {
  const climaPossiveis = ["Ensolarado", "Chovendo", "Nevando"];
  const climaSorteado = climaPossiveis[Math.round(Math.random() * 2)];
  return `Hoje o tempo está ${climaSorteado}`;
};

console.log(climaAtual());
