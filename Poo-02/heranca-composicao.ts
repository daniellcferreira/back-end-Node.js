interface AnimalInterface {
  nome: string;
  idadeEmMeses: number;
  comer: () => void;
}

class Animal implements AnimalInterface {
  constructor(public nome: string, public idadeEmMeses: number) {}

  comer(): void {
    console.log(`${this.nome} comendo...`);
  }
}

const cachorro = new Animal("Dog", 12);
cachorro.comer();
