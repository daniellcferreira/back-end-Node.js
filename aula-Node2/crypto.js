const crypto = require("node:crypto");

const chave = crypto.randomBytes(12).toString("hex");
console.log(chave);

const uuid = crypto.randomUUID();
console.log(uuid);
