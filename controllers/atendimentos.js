const Atendimento = require('../models/atendimentos')

module.exports = app =>{
    app.get('/atendimentos', (req, res) => {
       
        Atendimento.lista(res)
    })

    app.get('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)//Tem que converter para inteiro
        
        Atendimento.buscaPorId(id, res)
    })

    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body
        
        Atendimento.adiciona(atendimento, res)
    })//Req é a requisição, o que foi enviado ao servidor

    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body
    
        Atendimento.altera(id, valores, res)
    })

    app.delete('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        
        Atendimento.deleta(id, res)
    })
}