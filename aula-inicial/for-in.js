const user = {
  name: "Jose Mariaa",
  email: "Jose.M@teste.com",
  age: 28,
  address: "X Street",
};

for (const key in user) {
  if (key === "name" || key === "email") {
    user[key] = user[key].toLowerCase();
  }
}

console.log(user);
