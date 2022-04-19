var Watch = require('../models/watch'); 
 
// List of all watches 
exports.watch_list = async function(req, res) { 
    try{ 
        theWatches = await Watch.find(); 
        res.send(theWatches); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
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

// VIEWS 
// Handle a show all view 
exports.watch_view_all_Page = async function(req, res) { 
    try{ 
        theWatches = await Watch.find(); 
        res.render('watches', { title: 'Watch Search Results', results: theWatches }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 