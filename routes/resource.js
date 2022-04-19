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
router.post('/watches', watch_controller.watch_create_post); 
 
// DELETE request to delete Watch. 
router.delete('/watches/:id', watch_controller.watch_delete); 
 
// PUT request to update Watch. 
router.put('/watches/:id', watch_controller.watch_update_put); 
 
// GET request for one Watch. 
router.get('/watches/:id', watch_controller.watch_detail); 
 
// GET request for list of all Watch items. 
router.get('/watches', watch_controller.watch_list); 

module.exports = router; 
 