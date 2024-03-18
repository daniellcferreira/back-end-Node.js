const dns = require("node:dns");

const searchedUrl = "google.com";

dns.resolve4(searchedUrl, (err, addresses) => {
  if (err) {
    console.log("url não encontrada!");
    return;
  }

  console.log(addresses);
});

async function bootstrap() {
  const searchedUrl = "google.com";

  const address = await dns.promises.resolve4(searchedUrl);
  console.log(address);

  const nameServers = await dns.promises.resolveNs(searchedUrl);
  console.log(nameServers);
}

bootstrap();
