const {Router} = require('express');
const router = Router();

router.post("/upload",(req,res)=>{
    res.status(200).json({
        name: "xxx.png",
        status: "done",
        url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        thumbUrl: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    });
})


const { getCombos } = require('../controller/combo.controller');
router.get('/combo', getCombos); 


module.exports = router;