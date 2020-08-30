var express = require('express');
var router = express.Router();
var path = require('path');

router.use(express.static(path.join('./build')));

/* GET redirect page. */
router.get('/:shortURL', function(req, res, next) {
  res.redirect(global.URLDirectory[req.params.shortURL])

});

module.exports = router;
