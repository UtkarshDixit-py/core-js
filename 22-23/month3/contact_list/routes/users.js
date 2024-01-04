const express = require('express');
const router = express.Router()


router.get('/',function(req,res){
    // console.log()
    res.send('get req on /users')
})

module.exports = router;