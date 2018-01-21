var mongoose = require('mongoose');

// create the schema
var TaskSchema = new mongoose.Schema({
        title: String,
        description: String,
        completed: Boolean,
        created_at: Date,
        updated_at: Date

    })
    // register the schema as a model

var Task = mongoose.model('Task', TaskSchema);