import product from "./produto.json";
import fs from "node:fs";
import path from "node:path";

const produtcJson = JSON.stringify(
  [
    {
      name: "Pair of Socks",
      amountInStock: 100,
      unitValue: 5,
    },

    {
      name: "T-Shirt",
      amountInStock: 200,
      unitValue: 30,
    },
  ],
  null,
  2
);

//console.log(product);

const fileOutPath = path.join(__dirname, "generated-products.json");

fs.writeFileSync(fileOutPath, produtcJson);
