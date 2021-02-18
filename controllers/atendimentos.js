const Atendimento = require('../models/atendimentos')

module.exports = app =>{
    app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos executando um método Get'))//Req é a requisição, o que foi enviado ao servidor
                                    //Res é o que ele vai retornar

    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body
        Atendimento.adiciona(atendimento)
        res.send('Você está na rota de atendimentos executando um método POST')
    })//Req é a requisição, o que foi enviado ao servidor
}