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
exports.watch_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Watch.findById(req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
};  
 
// Handle watch create on POST. 
exports.watch_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Watch(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.watch_name = req.body.watch_name; 
    document.watch_color = req.body.watch_color; 
    document.watch_cost = req.body.watch_cost; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
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