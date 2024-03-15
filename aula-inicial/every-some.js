const pets = [
  { animal: "Dog", age: 5 },
  { animal: "Cat", age: 3.5 },
  { animal: "Parrot", age: 10 },
  { animal: "Bird", age: 1 },
  { animal: "Fish", age: 2 },
];

const allAnimalsMonth = pets.every((pet) => pet.age > 1 / 12);

console.log(allAnimalsMonth);

const allAnimalsYear = pets.every((pet) => pet.age > 1);

console.log(allAnimalsYear);
