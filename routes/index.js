var express = require('express');
var router = express.Router();

let video;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET home page. */
router.post('/', function(req, res, next) {
    video = req.body.search;
    console.log(video);
    res.render('video', { title: 'Express', video: video });
});

module.exports = router;
