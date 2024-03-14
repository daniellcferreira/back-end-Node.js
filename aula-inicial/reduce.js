const notaDasProvas = [7.5, 6, 8.5];

const somaDasProvas = notaDasProvas.reduce((acc, prova) => {
  return acc + prova;
}, 0);

const mediaProvas = somaDasProvas / notaDasProvas.length;

console.log(somaDasProvas);
console.log(mediaProvas);
