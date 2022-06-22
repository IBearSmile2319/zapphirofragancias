const multer = require("multer")
const inMemoryStorage = multer.memoryStorage()
module.exports = multer({ storage: inMemoryStorage })
