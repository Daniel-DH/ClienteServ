var mongoose = require('mongoose');

var modelSchema = mongoose.Schema({
    username: {
        type: String,
        minlength: [3,"username corto"],
        maxlength:[20,"username largo"],
        required: [true,"se requiere username"],
        unique: [true, "no se puede repetir username"]
    },
    name: {
        type:String,
        minlength: [3,"name corto"],
        maxlength: [30,"name largo"]
    },
    email: {
        type: String,
        minlength: [10,"email corto"],
        maxlength: [40,"email largo"],
        required: [true, "se requiere email"],
        unique: [true, "no se puede repetir email"]
    },
    password: {
        type:String,
        required: [true,"se requiere password"]
    }
});

var usuarios = mongoose.model("usuarios",modelSchema);
module.exports = usuarios;