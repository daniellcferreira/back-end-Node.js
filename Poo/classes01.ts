type Produto = {
  nome: string;
  valor: number;
};

class Estabelecimento {
  constructor(
    private endereco: string,
    private tipo: string,
    private produtos: Produto[]
  ) {}

  nomeDosProdutos() {
    return this.produtos.map((produto) => produto.nome);
  }
}

const paradaria = new Estabelecimento(
  "Rua das Laranjeiras, 1200",
  "Alimentação",
  [
    { nome: "pão", valor: 0.8 },
    { nome: "arroz", valor: 20 },
    { nome: "leite", valor: 5 },
    { nome: "brigadeiro", valor: 1.5 },
    { nome: "carne moida", valor: 15 },
  ]
);

console.log(paradaria);
