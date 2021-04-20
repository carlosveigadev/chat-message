import express from 'express';
import './database';

// GET = Buscas
// POST = Criação
// PUT = Alteração
// DELETE = Deletar
// PATCH = Alterar informação específica

const app = express();

// Creating routes 

// app.get("/", (request, response) => {
//   return response.send("Olá NLW 05")
// })

app.get("/", (request, response) => {
  return response.json({
    message: "Hello NLW 05"
  })
})

app.post("/", (request, response) => {
  return response.json({message: "New user saved"})
} )

app.listen(3333, () => console.log("Server is running in port 3333"))