var express = require('express');
const watch_controllers= require('../controllers/watch');
var router = express.Router();
// A little function to check if we have an authorized user and continue on 
//or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
/* GET watch */
router.get('/', watch_controllers.watch_view_all_Page );


/* GET detail watch page */
router.get('/detail', watch_controllers.watch_view_one_Page);

/* GET create costume page */
router.get('/create', watch_controllers.watch_create_Page);

/* GET create update page */
router.get('/update',secured, watch_controllers.watch_update_Page);

/* GET delete costume page */
router.get('/delete', watch_controllers.watch_delete_Page);

module.exports = router;