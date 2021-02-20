class Tabelas{
    init(conexao){
        this.conexao = conexao //Deixando a conexao visível para todos os métodos
        this.criarAtendimentos()
    }
    criarAtendimentos(){
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (' +
            'id int NOT NULL AUTO_INCREMENT, ' +
            'cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, ' +
            'data datetime NOT NULL, dataCriacao datetime NOT NULL,' +
            'status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'

        this.conexao.query(sql, (erro) =>{
            if(erro){
                console.log(erro)
            }
            else{
                console.log('Tabela atendimentos criada com sucesso')
            }
        }) //Espera uma query sql. Depois, espera uma função a ser executada DEPOIS da query
    }
}

module.exports = new Tabelas //Ao colocar o new eu já estou instanciando a classe
                            // A classe sempre será usada do mesmo jeito, então já posso instanciar