const customExpress = require('./config/customExpress.js')

app = customExpress()

app.listen(3000, ()=> console.log('Servidor rodando, tudo ok'))
                //Quero que fique rodando na porta 3000
                //Coloquei para executar uma função ao ser chamado.

