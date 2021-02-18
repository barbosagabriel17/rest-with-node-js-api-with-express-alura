const express = require('express') // chamando a biblioteca
const consign = require('consign')
const bodyParser = require('body-parser')

module.exports = () =>{
    const app = express() //Executando a biblioteca

    app.use(bodyParser.urlencoded({extended: true}))//Posso adicionar mais de um ao mesmo tempo
    app.use(bodyParser.json())

    consign()
        .include('controllers')
        .into(app)

    return app
}

