var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var watch_controller = require('../controllers/watch'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// WATCH ROUTES /// 
 
// POST request for creating a Watch.  
router.post('/watch', watch_controller.watch_create_post); 
 
// DELETE request to delete Watch. 
router.delete('/watch/:id', watch_controller.watch_delete); 
 
// PUT request to update Watch. 
router.put('/watch/:id', watch_controller.watch_update_put); 
 
// GET request for one Watch. 
router.get('/watch/:id', watch_controller.watch_detail); 
 
// GET request for list of all Watch items. 
router.get('/watch', watch_controller.watch_list); 

module.exports = router; 
 