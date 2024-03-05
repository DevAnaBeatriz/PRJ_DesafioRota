const Sequelize = require("sequelize")
const sequelize = new Sequelize("exemplo","root","", {
    host: "localhost",
    dialect: "mysql"
})

const express = require("express")

const app = express()
 
sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso")
}).catch(function(erro){
    console.log("Falha ao Conectar" + erro)
})
 
const agendamentos = sequelize.define("agendamentos",{
    nome:{
        type: Sequelize.STRING
    },
    endereco:{
        type: Sequelize.STRING
    },
    bairro:{
        type: Sequelize.STRING
    },
    CEP:{
        type: Sequelize.STRING
    },
    cidade:{
        type: Sequelize.STRING
    },
    estado:{
        type: Sequelize.STRING
    },
    obs:{
        type: Sequelize.STRING
    },
})
 

module.exports = agendamentos


//agendamentos.sync({force: true}) //criando agendamentos
 
// agendamentos.create({
//     nome: "Ana Beatriz",
//     endereco: "Rua Inácio Maciel",
//     bairro: "Vila Jacui",
//     CEP: "08060-010",
//     cidade: "São Paulo",
//     estado: "SP",
//     obs: "Teste",
// })

