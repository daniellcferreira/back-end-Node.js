const queryString = require("node:querystring");

const baseUrl = "https://siteviagem.com.br";

const uri = queryString.stringify({
  destino: "Rio de Janeiro",
  periodo: "verão",
});

const url = `${baseUrl}/${uri}`;

console.log(url);

const parsedUri = queryString.parse(uri);
console.log(uri);
console.log(parsedUri);
