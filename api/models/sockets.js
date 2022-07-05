const { adminConnection, adminDisconnection } = require('../controller/Socket.admin.controller.js')
const { userConnection, userDisconnection } = require('../controller/Socket.user.controller.js')
const { compareJWTAdmin, compareJWTUser } = require('../helper/jwt.js')

class Sockets {

    constructor(io) {
        this.io = io

        this.socketEvents()

    }
    socketEvents() {
        // On connection
        this.io.on('connection', async (socket) => {
            // extract token from headers
            const tokenAdmin = socket.handshake.query['x-token-admin']
            const tokenUser = socket.handshake.query['x-token']
            // compare token
            const [validAdmin,uidAdmin] = await compareJWTAdmin(tokenAdmin)
            if (validAdmin) {
                // admin connection
                await adminConnection(uidAdmin)
                console.log('admin connected', uidAdmin)
            }
            const [validUser,uidUser] = await compareJWTUser(tokenUser)
            if (validUser) {
                // user connection
                await userConnection(uidUser)
                console.log('user connected', uidUser)
            }

            // on disconnect admin
            socket.on('disconnect', async () => {
                if (validAdmin) {
                    await adminDisconnection(uidAdmin)
                    console.log('admin disconnected', uidAdmin)
                }
                if (validUser) {
                    await userDisconnection(uidUser)
                    console.log('user disconnected', uidUser)
                }
            })
        })
    }
}

module.exports = Sockets