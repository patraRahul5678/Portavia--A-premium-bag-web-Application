const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    name: String,
    image: Buffer,
    price: Number,
    dicount: {
        type: Number,
        default: 0
    },
    bgcolor: String,
    panelcolor: String,
    textcolor: String,
    quantity: {
        type: Number,
        default: 1
    }
});

module.exports = mongoose.model('product', postSchema);