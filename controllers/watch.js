var Watch = require('../models/watch'); 
 
// List of all watches 
exports.watch_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Watch list'); 
}; 
 
// for a specific watch. 
exports.watch_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Watch detail: ' + req.params.id); 
}; 
 
// Handle watch create on POST. 
exports.watch_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Watch create POST'); 
}; 
 
// Handle watch delete form on DELETE. 
exports.watch_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Watch delete DELETE ' + req.params.id); 
}; 
 
// Handle watch update form on PUT. 
exports.watch_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Watch update PUT' + req.params.id); 
}; 
