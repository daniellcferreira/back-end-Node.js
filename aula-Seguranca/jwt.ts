import { sign, verify } from "jsonwebtoken";

const jwtSecret = "dsdjijisdjijis";
const user1Token = sign({ role: "teacher" }, jwtSecret);

try {
  const decoded = verify(user1Token, jwtSecret);
  console.log(decoded);
} catch (error) {
  console.error("Assinatura Invalida");
}

//console.log(user1Token);

console.log(Buffer.from("dsdjijisdjijis", "base64").toString());
