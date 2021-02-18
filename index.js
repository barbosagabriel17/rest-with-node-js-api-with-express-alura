const customExpress = require('./config/customExpress.js')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabelas')

conexao.connect((erro) =>{
    if(erro){
       console.log(erro) 
    }
    else{
        console.log('Conectado com sucesso')

        Tabelas.init(conexao)
        app.listen(3000, ()=> console.log('Servidor rodando, tudo ok'))
                //Quero que fique rodando na porta 3000
                //Coloquei para executar uma função ao ser chamado.
    }
});
const app = customExpress()




