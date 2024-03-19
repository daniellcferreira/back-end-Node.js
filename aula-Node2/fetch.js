async function makeRequest() {
  const response = await fetch("http://localhost:3000");
  const data = await response.text();

  console.log(data);
}

makeRequest();
