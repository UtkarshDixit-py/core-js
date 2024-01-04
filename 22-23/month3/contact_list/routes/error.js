const express = require('express');

const router = express.Router();

router.get('*',function(req,res){
    res.send("error 404 page not found")
})

module.export = router;