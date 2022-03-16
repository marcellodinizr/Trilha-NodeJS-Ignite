const express = require("express");

const app = express();
console.log("teste");

app.get("/", (request, response) => {
  return response.json({ message: "Hello World Ignite!" });
});

app.listen(3333);