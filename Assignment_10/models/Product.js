const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    product_name: {
        type: String,
        required: true
    },
    product_price: {
        type: Number,
        required: true
    },
    product_desc:{
        type: String,
        required: false
    },
    product_img:{
        type: String,
        required: false
    }
},{timestamps: true})

exports.Product = mongoose.model('product',productSchema);