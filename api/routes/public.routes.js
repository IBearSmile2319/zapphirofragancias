const {Router} = require('express');
const router = require('./admin.routes');

router.post("/upload",(req,res)=>{
    res.status(200).json({
        name: "xxx.png",
        status: "done",
        url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        thumbUrl: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    });
})


module.exports = router;