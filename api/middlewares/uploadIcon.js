const path = require('path')
const multer = require('multer')
const shortid = require('shortid')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(path.dirname(__dirname), 'public/uploads/icon'))
    },
    filename: (req, file, cb) => {
        cb(null, `${shortid.generate()}-${file.originalname}`)
    }
})

exports.uploadIcon = multer({ storage })