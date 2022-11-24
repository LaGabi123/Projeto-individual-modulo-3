const express = require("express")
const app = express()
const port = process.env.PORT || 3000

app.use(express.json());
const funcionarios = []
const cervejas = []
const petiscos = []

//-----------------------funcionarios
app.get("/funcionarios", (request, response) => {
  return response.json(funcionarios);
}); //visualizar

app.post("/add", (request, response) => {
  const { nome, sobrenome, sexo, cargo, id } = request.body; // nome das rotas
  const funcionarios = { id: uuid(), nome, sobrenome, sexo, cargo, id};
  funcionarios.push(funcionarios);
  return response.status(201).json(funcionarios);
}); //inserir

app.put("/funcionarios/:id", (request, response) => {
  const { id } = request.params;
  const { nome, sobrenome, sexo, cargo} = request.body;
  const newfuncionarios = { nome, sobrenome, sexo, cargo, id};
  const funcionariosindex = funcionarios.findIndex((funcionarios) => funcionarios.id == id);
  funcionarios[funcionariosindex] = newfuncionarios;
  return response.json(newfuncionarios);
}); //atualizar

app.delete("/funcinarios/:id", (request, response) => {
  const { id } = request.params;
  const funcionariosindex = funcionarios.findIndex((funcinarios) => funcinarios.id == id);
  funcionarios.splice(funcionariosindex, 1);
  return response.status(204).send();
}); //excluir

//----------------Cervejas

app.get("/cervejas", (request, response) => {
    return response.json(cervejas);
  }); //visualizar
  
  app.post("/add", (request, response) => {
    const { nome, marca, valor, disponivel, quantidade, id, imagem} = request.body; // nome das rotas
    const cervejas = { id: uuid(), nome, marca, valor, disponivel, quantidade, id, imagem};
    cervejas.push(cervejas);
    return response.status(201).json(cervejas);
  }); //inserir
  
  app.put("/cervejas/:id", (request, response) => {
    const { id } = request.params;
    const { nome, marca, valor, disponivel, quantidade, imagem} = request.body;
    const newcervejas= { nome, marca, valor, disponivel, quantidade, id, imagem};
    const cervejasindex = cervejas.findIndex((cervejas) => cervejas.id == id);
    cervejas[cervejasindex] = newcervejas;
    return response.json(newcervejas);
  }); //atualizar
  
  app.delete("/cervejas/:id", (request, response) => {
    const { id } = request.params;
    const cervejasindex = cervejas.findIndex((cervejas) => cervejas.id == id);
    cervejas.splice(cervejasindex, 1);
    return response.status(204).send();
  }); //excluir

  //-------------------Petiscos

  app.get("/petiscos", (request, response) => {
    return response.json(petiscos);
  }); //visualizar
  
  app.post("/add", (request, response) => {
    const { nome, valor, disponivel, quantidade, id, imagem} = request.body; // nome das rotas
    const petiscos = { id: uuid(), nome, valor, disponivel, quantidade, id, imagem};
    petiscos.push(petiscos);
    return response.status(201).json(petiscos);
  }); //inserir
  
  app.put("/petiscos/:id", (request, response) => {
    const { id } = request.params;
    const { nome, valor, disponivel, quantidade, imagem} = request.body;
    const newpetiscos= { nome, valor, disponivel, quantidade, id, imagem};
    const petiscosindex = petiscos.findIndex((petiscos) => petiscos.id == id);
    cervejas[petiscosindex] = newpetiscos;
    return response.json(newpetiscos);
  }); //atualizar
  
  app.delete("/petiscos/:id", (request, response) => {
    const { id } = request.params;
    const petiscosindex = petiscos.findIndex((petiscos) => petiscos.id == id);
    petiscos.splice(petiscosindex, 1);
    return response.status(204).send();
  }); //excluir


  app.listen(port, () =>{
    console.log("Servidor esta rodando...")
});
