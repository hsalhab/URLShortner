var express = require('express');
var router = express.Router();
var path = require('path');

router.use(express.static(path.join('./build')));

global.URLDirectory = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join('./build', 'index.html'));
});

router.get('/shorten', function(req, res, next) {
  const shortURL = getRandomString(6);
  global.URLDirectory[shortURL] = req.query.url;
  res.json({
    shortURL: shortURL
  });
});

function getRandomString(length) {
  let result           = '';
  const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

module.exports = router;
