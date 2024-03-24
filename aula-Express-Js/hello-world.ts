import express from "express";

const app = express();

const url = "http://localhost";
const port = 3000;

const users = [
  {
    name: "Fulano",
    age: 20,
  },
  {
    name: "Ciclano",
    age: 35,
  },
];

app.get("/", (req: any, res: { send: (arg0: string) => void }) => {
  return res.send("Hello world!");
});

app.get(
  "/users",
  (
    _req: any,
    res: { json: (arg0: { name: string; age: number }[]) => any }
  ) => {
    return res.json(users);
  }
);

app.listen(port, () => {
  console.log(`Servidor rodando no endereço ${url}:${port}`);
});
