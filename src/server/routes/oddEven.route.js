var router = require('express').Router();

var oddEven = require('../modules/oddEven');

router.get('/:num', function(req, res) {
    console.log('in oddEven get route');
    console.log('');
    
    var num = Number(req.params.num);
    var sendThis = oddEven(num);
    res.send(sendThis);
});

// export
module.exports = router;