// Servidor de Express
const express = require('express')
// body-parser
const bodyParser = require('body-parser')

// Servidor de sockets
const http = require('http')

// configuración de sockets	server
const socketIo = require('socket.io')

// cors
const cors = require('cors')

// file system
const path = require('path')

// socket.io
const Sockets = require('./sockets')

// connection to database
const { dbConnection } = require('../db/mongo')


class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT || 3000

        // connection to database
        dbConnection()
        // HTTP server
        this.server = http.createServer(this.app)
        // Config sockets
        this.io = socketIo(this.server, {/*opciones*/ })

    }
    middlewares() {
        // body-parser
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended: false }))
        // Habilitar cors
        this.app.use(cors({
            origin: [
                'http://localhost:3000',
            ],
        }))
        // Api EndPoints
        this.app.use('/api', require('../routes/user.routes'))

        // Desplegar el directiorio publico
        if (process.env.NODE_ENV === 'production') {
            this.app.use(express.static(path.join(__dirname, '../../web/dist')))
            this.app.get('*', (req, res) => {
                res.sendFile(path.join(__dirname, '../../web/dist/index.html'))
            })
        } else {
            this.app.use(express.static(path.resolve(__dirname, '../public')))
        }
        // default 404
        this.app.use((req, res) => {
            res.status(404).json({
                success: false,
                message: "Pagina no encontrada"
            })
        })



    }

    configSockets() {
        new Sockets(this.io);
    }
    execute() {
        // start Middlewares
        this.middlewares()
        // start config sockets
        this.configSockets()
        // start server
        this.server.listen(this.port, () => {
            console.log(`Servidor corriendo en http://localhost:${this.port}`)
        })

    }
}

module.exports = Server