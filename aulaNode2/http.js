const http = require("http");

const sports = ["Soccer", "Voley", "Basketball", "Tennis"];

const server = http.createServer(async (request, response) => {
  const { method, statusCode, url } = request;

  request.headers.accept = "*";

  const bodyPromise = new Promise((resolve, reject) => {
    let body;

    request.on("data", (data) => {
      body = JSON.parse(data);
    });

    request.on("end", (data) => {
      resolve(body);
    });
  });

  if (url === "/") {
    response.write("<h1>Hello from Node!<h1>");
    response.end();
    return;
  }

  if (url === "/api/sports") {
    if (method === "GET") {
      response.write(JSON.stringify(sports));
      response.end();
      return;
    }

    if (method === "POST") {
      const body = await bodyPromise;

      const { name } = body;

      sports.push(name);

      response.write(name);
      response.end();
      return;
    }
  }

  response.statusCode = 404;
  response.write("<h1>Pagina não encontrada!</h1>");
  response.end();
});

server.listen(3000, "localhost", () => {
  console.log("server running on http://localhost:3000");
});
