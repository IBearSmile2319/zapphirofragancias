const { uploadPayment } = require('../middlewares/uploadPayment');
const { Router } = require('express');
const router = Router();

router.post("/upload", (req, res) => {
    res.status(200).json({
        name: "xxx.png",
        status: "done",
        url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        thumbUrl: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    });
})

// combo
const { getCombos } = require('../controller/combo.controller');
router.get('/combo', getCombos);

// order
const { firstOrder } = require('../controller/order.controller');
router.post("/firstOrder", uploadPayment.single("img"), firstOrder)


module.exports = router;