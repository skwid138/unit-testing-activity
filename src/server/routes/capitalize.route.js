var router = require('express').Router();
var capitalize = require('../modules/oddEven');

router.post('/', function(req, res){
    console.log('in caps post route');
    var str = req.body.sentence;
    console.log('str :', str);
    var sendThis = capitalize(str);
    res.sendStatus(200);
}); // end Post

// export
module.exports = router;