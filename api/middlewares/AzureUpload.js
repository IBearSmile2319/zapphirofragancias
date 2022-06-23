const GetBlobName = require('../helper/getBlobName');
const azureStorage = require('azure-storage');
const blobService = azureStorage.createBlobService();
const containerName = 'imagenes';

const getStream = require("into-stream")


module.exports = async (file) => {
    // promesa para subir el archivo
    return await new Promise((resolve, reject) => {
        // nombre del archivo a subir
        const blobName = GetBlobName(file.originalname)
        // stream del archivo
        const stream = getStream(file.buffer)
        // length del archivo
        const streamLength = file.buffer.length;
        // subir el archivo
        blobService.createBlockBlobFromStream(containerName, blobName, stream, streamLength, (error, result, response) => {
            if (error) {
                reject({
                    message: "Error al subir el archivo",
                    error
                })
            }
            // obtener la url del archivo
            const url = blobService.getUrl(containerName, blobName)
            // responder al cliente
            resolve({ url })

        })
    }
    )
}