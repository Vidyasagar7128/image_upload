const mongoose = require('mongoose')
const Schema = mongoose.Schema;
PhotoSchema = new Schema({
    name: String,
    type: String,
    price: Number,
    mobile: Number,
    image:String,
    
    })
module.exports = mongoose.model('Photo', PhotoSchema)
