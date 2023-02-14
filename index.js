//abrindo um servidor http com express

const express = require('express');
//chamando o modulo
const app = express();
//a variavel app recebe a função express que vem do modulo express, quando for usar algo do 
//express, vai usar a partir da variavel app

// criando rota (rotas são caminhos para minha aplicação)
// chamo a variavel, e coloco variavel.get
// chamo a função de call back que recebe o parametro req e res, pra enviar uma resposta, uso o parametro
// de resposta (res) e o send, e coloco o que quero enviar
app.get("/", function(req, res){
    res.send("seja bem vindo ao meu app")
})

// se eu quiser criar um caminho com o nome "sobre"
// uma nova rota
app.get("/sobre", function (req, res) {
    res.send("minha pagina sobre")
})

app.get("/Blog", function (req, res){
    res.send("Bem-vindo ao meu blog!!")
})

app.get("/ola/:nome/:cargo/:cor", function(req, res){
    res.send("ola" + " " + req.params.nome + "Seu cargo é: " + req.params.cargo + "Sua cor favorita é: " + req.params.cor)
})

app.listen(8081, function(){
    console.log("servidos esta rodando na url http://localhost:8081")
})//app.listen sempre tem que ficar no final do codigo,a função pede um unico parametro obrigatorio
//que é a porta que vai rodar o codigo, no caso 8081
//localhost:8081 (porta)

//função de call back é uma função que é execultada toda vez que um evento acontece