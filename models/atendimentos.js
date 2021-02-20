const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Atendimento {
    adiciona(atendimento, res) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')//O início é o formato que eu estou enviado
                                                                           //O final é o formato que eu quero.
       
        const dataEhValida = moment(data).isSameOrAfter(dataCriacao)
        const clienteEhvalido = atendimento.cliente.length >=5

        const validacoes = [
            {
                nome: 'data',
                valido: dataEhValida,
                mensagem: 'A data deve ser maior ou igual data atual'
            },
            {
                nome: 'nome',
                valido: clienteEhvalido,
                mensagem: 'O nome do cliente deve conter pelo menos cinco caractéres'
            }
        ]

        const erros = validacoes.filter(validacao => !validacao.valido)
        const existemErros = erros.length

        if(existemErros){
            res.status(400).json(erros)
        }
        else{
            const sql = 'INSERT INTO Atendimentos SET ?'
            const atendimentoDatado = {...atendimento, dataCriacao, data}//Ao colocar este data, automaticamente sobrescreve o data
            // que já tinha no objeto de atendimentos

            conexao.query(sql, atendimentoDatado, (erro, resultados) => {
                if(erro) {
                    res.status(400).json(erro)//Bad request
                } else {
                    res.status(201).json(resultados)//Created
                }
            })
        }
    }
}

module.exports = new Atendimento