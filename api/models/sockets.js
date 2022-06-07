const { adminConnection, adminDisconnection } = require('../controller/Socket.admin.controller.js')
const {compareJWTAdmin} = require('../helper/jwt.js')

class Sockets {

    constructor(io) {
        this.io = io

        this.socketEvents()

    }
    socketEvents() {
        // On connection
        this.io.on('connection', async (socket) => {
            // TODO: Validate JWT token
            const [valid,uid]=compareJWTAdmin(socket.handshake.query['x-token'])
            if(!valid){
                console.log('No se pudo validar el token')
                return socket.disconnect()
            }
            await adminConnection(uid)


            // on disconnect admin
            socket.on('disconnect', async () => {
                await adminDisconnection(uid)
            })
        })
    }
}

module.exports = Sockets