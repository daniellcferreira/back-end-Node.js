const pets = ["dog", "cat", "fish"];

const pluralPets = [];
pets.forEach((pet) => {
  pluralPets.push(`${pet}s`);
});

console.log(pluralPets);
