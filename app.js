


const express = require("express")

const app = express()


const agendamentos = require('./banco.js')


app.get("/cadastrar/:nome/:endereco/:bairro/:cep/:cidade/:estado/:observacao", function(req, res){
    res.end("Cadastrando Seus Dados, "+req.params.nome+"\n Endereço: "+req.params.endereco+"\n Bairro: "+req.params.bairro+"\n CEP: "+req.params.cep+" \n Cidade: "+req.params.cidade+"\n Estado: "+req.params.estado+" \n Obs: "+req.params.observacao)

    agendamentos.create({
        nome: req.params.nome,
        endereco: req.params.endereco,
        bairro: req.params.bairro,
        CEP: req.params.cep,
        cidade: req.params.cidade,
        estado: req.params.estado,
        obs: req.params.observacao,
    })

})

const port = 8080;
 
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
    });
