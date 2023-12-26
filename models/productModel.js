const mongoose = require("mongoose");
const User = mongoose.Schema({

    name:{
        type:String
    },
    email:{
        type:String,
        trim:true
    },
},
{
    timestamps:true
})



const productModel  = mongoose.model('products', User, 'products'); 
module.export = productModel;