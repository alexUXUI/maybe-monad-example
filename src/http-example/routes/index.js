var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/null-resource', (req, res, next) => {
  res.send(null);
});

router.get('/not-null-uri', (req, res, next) => {
  res.json({
    data: 'all types of wonderful data!'
  });
});

module.exports = router;
