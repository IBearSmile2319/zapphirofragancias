// Servidor de Express
const express = require('express')

// body-parser
const bodyParser = require('body-parser')

// morgan
const morgan = require('morgan')

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

// All routes
const routes = require('../routes')


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
        // proxy
        this.app.set('trust proxy', true)
        // body-parser
        this.app.use(bodyParser.urlencoded({ extended: false }))
        this.app.use(bodyParser.json())
        // morgan
        this.app.use(morgan('dev'))
        // public
        this.app.use('/public', express.static(path.join(__dirname, '../public/uploads')))
        // this.app.use('/public/icon', express.static(path.join(__dirname, '../public/uploads/icon')))
        // this.app.use('/public/payment', express.static(path.join(__dirname, '../public/uploads/payment')))


        // Habilitar cors
        this.app.use(cors({}))
        // Api EndPoints
        routes(this.app)

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