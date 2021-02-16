const express = require('express') // chamando a biblioteca

const app = express() //Executando a biblioteca

app.listen(3000, ()=> console.log('Servidor rodando, tudo ok'))
                //Quero que fique rodando na porta 3000
                //Coloquei para executar uma função ao ser chamado.

app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos'))//Req é a requisição, o que foi enviado ao servidor
                                    //Res é o que ele vai retornar