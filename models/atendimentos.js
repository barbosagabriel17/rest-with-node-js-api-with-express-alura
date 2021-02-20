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
            //A interrogação representa o parametro atendimentoDatado na conexao.query, passados dentor de um vetor [?, ?]
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

    lista(res){
        const sql = 'SELECT* FROM Atendimentos'

        conexao.query(sql, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            }
            else{
                res.status(200).json(resultados)
            }
        })
    }

    buscaPorId(id, res){
        const sql = `SELECT* FROM Atendimentos WHERE id=${id}`

        conexao.query(sql, (erro, resultados) => {
            const atendimento = resultados[0]
            if(erro){
                res.status(400).json(erro)
            }
            else{
                res.status(200).json(atendimento)
            }
        })
    }

    altera(id, valores, res) {
        const sql = 'UPDATE Atendimentos SET ? WHERE id=?'
    
        conexao.query(sql, [valores, id], (erro, resultados) => { 
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)   
            }
        })
    }
    
    deleta(id, res){
        const sql = `DELETE FROM Atendimentos WHERE id=${id}`

        conexao.query(sql, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            }
            else{
                //res.status(200).json(resultados)
                res.status(200).json({id})
            }
        })
    }
}

module.exports = new Atendimento