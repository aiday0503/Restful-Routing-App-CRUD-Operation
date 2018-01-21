var mongoose = require('mongoose');
var Task = mongoose.model('Task');

module.exports = {
    create: function(req, res) {
        Task.create(req.body, function(err, task) {
            if (err) {
                console.log(err)
                res.json(err);
            } else {
                res.json(task)
            }

        })
    },
    showAll: function(req, res) {
        Task.find({}, function(err, task) {
            if (err) {
                console.log(err)
                res.json(err);
            } else {
                res.json(task)
            }
        })
    },
    remove: function(req, res) {
        Task.remove(req.body, function(err, task) {
            if (err) {
                console.log(err)
                res.json(err);
            } else {
                res.json(task)
            }

        })
    },
    show: function(req, res) {
        Task.find(req.body, function(err, task) {
            if (err) {
                console.log(err)
                res.json(err);
            } else {
                res.json(task)
            }
        })
    },
    update: function(req, res) {
        Task.update(req.body, function(err, task) {
            if (err) {
                console.log(err)
                res.json(err);
            } else {
                res.json(task)
            }
        })
    },

}