var task = require('../controllers/tasks.js');
var mongoose = require('mongoose');

module.exports = function(app) {
    //showAll
    app.get('/task', function(req, res) {
        task.showAll(req, res)
    });
    //create
    app.post('/task', function(req, res) {
        var id = req.params.id;
        task.create(req, res, id)
    });
    //delete
    app.delete('/task/:id', function(req, res) {
        var id = req.params.id;
        task.remove(req, res, id)
    });
    //retrieve by id
    app.get('/task/:id', function(req, res) {
        var id = req.params.id;
        task.show(req, res, id)
    });
    //update by id
    app.put("/task/:id", (req, res) => {
        var id = req.params.id;
        task.show(req, res, id)

    });

}