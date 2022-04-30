const express = require('express')
const { registerRoutes } = require('./routes')

const auth = require('./middlewares/auth')

// Iniciar express
const app = express()

// Configurar JSON para express
app.use(express.json())


// Configurar rotas
registerRoutes(app)



module.exports = app