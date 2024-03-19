const { DateTime } = require("luxon");

const agora = DateTime.now();

console.log(agora.month);
console.log(new Date().toLocaleString());
