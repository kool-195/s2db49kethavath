var express = require('express');
const watch_controlers= require('../controllers/watch'); 
var router = express.Router();

/* GET Watch page. */
router.get('/', function(req, res, next) {
  router.get('/', watch_controlers.watch_view_all_Page ); 
  res.render('watch', { title: 'Search Results Watch' });
});

module.exports = router;
