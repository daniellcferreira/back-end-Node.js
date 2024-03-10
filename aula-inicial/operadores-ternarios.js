const idade = 19;
const temCNH = true;

const podeDirigir = idade > 18 && temCNH;

if (podeDirigir) {
  console.log("Esta habilitado para dirigir");
} else {
  console.log("Não está habilitado a dirigir");
}

const numeroDePassageiros = podeDirigir ? 4 : 0;
