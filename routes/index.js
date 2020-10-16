var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/Kulvir', function(req, res, next) {
  res.render('Kulvir');
});
router.get('/Baljit', function(req, res, next) {
  res.render('Baljit');
});
router.get('/Manveet', function(req, res, next) {
  res.render('Manveet');
});

module.exports = router;
