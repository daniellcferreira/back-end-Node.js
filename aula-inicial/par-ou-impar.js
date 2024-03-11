const listaNumeros = [25, 88, 71, 192, 333, 222, 10, 11, 62];
const listaDePares = [];
const listaDeImpares = [];

let contador = 0;

while (contador < listaNumeros.length) {
  if (listaNumeros[contador] % 2 === 0) {
    listaDePares.push(listaNumeros[contador]);
  } else {
    listaDeImpares.push(listaNumeros[contador]);
  }

  contador += 1;
}

console.log(listaDePares);
console.log(listaDeImpares);
