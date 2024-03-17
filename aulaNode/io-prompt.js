const rl = require("readline");

const prompt = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

prompt.question("Qual seu numero favorito?: ", (resposta) => {
  console.log(`O dobro do seu numero favorito é: ${parseInt(resposta) * 2}`);

  prompt.question("Qual sua cor favorita?: ", (resposta) => {
    console.log(`Sua cor favorita é: ${resposta}`);
    prompt.close();
  });
});
