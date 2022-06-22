require("dotenv").config()

const Server = require("./models/server")
const config = require("./db/config")
const server = new Server()

server.execute()