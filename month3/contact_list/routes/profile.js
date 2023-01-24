const express = require('express');
const router = express.Router();

router.get('/',function(req,res){
    res.send('get req on /profile')
})

// comment 

module.exports = router;