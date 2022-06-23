const { Router } = require('express');
const router = Router();




const multerUpload = require('../middlewares/multerUpload');
const AzureUpload = require('../middlewares/AzureUpload');

router.post('/upload-payment', multerUpload.single("img"), async (req, res) => {
    const uploadImage = await AzureUpload(req.file).catch(err => {
        console.log(err);
        res.status(500).json({
            message: "Error al subir la imagen",
            error: err
        });
    }
    );
    res.status(200).json({
        message: "Archivo subido correctamente",
        data: uploadImage
    })
});

router.get('/upload-payment', (req, res) => {
    blobService.listBlobsSegmented(containerName, null, (error, result, response) => {
        if (error) {
            console.log(error)
            return
        }
        res.status(200).json({
            message: "Archivos subidos correctamente",
            result,
            response,
        })
    })
})


router.post("/upload", (req, res) => {
    res.status(200).json({
        name: "xxx.png",
        status: "done",
        url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        thumbUrl: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    });
})






// user code Invite
const { userCodeInvite } = require('../controller/user.controller');
router.post("/code-invite", userCodeInvite)

// combo
const { getCombos } = require('../controller/combo.controller');
router.get('/combo', getCombos);

// order
const { firstOrder } = require('../controller/order.controller');



router.post("/firstOrder", multerUpload.single("img"), firstOrder)


module.exports = router;