const pets = [
  { animal: "Dog", age: 5 },
  { animal: "Cat", age: 3.5 },
  { animal: "Parrot", age: 10 },
  { animal: "Bird", age: 1 },
  { animal: "Fish", age: 2 },
];

const petIndex = pets.findIndex((pet) => pet.animal === "Fish");

const findPet = pets.find((pet) => pet.animal === "Dog");

console.log(petIndex);
console.log(findPet);
