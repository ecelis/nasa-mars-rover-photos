var express = require('express');
var router = express.Router();
const {generateAccessToken} = require('../util/jwt');

router.get('/login', function(req, res, next) {
  res.jsonp(generateAccessToken(req.query.username));  // For the sample app I simply return a token
});

module.exports = router;
