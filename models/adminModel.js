const mongoose = require("mongoose")

const adminSchema = new mongoose.Schema({

},{timestamps:true})


const Admin = mongoose.model("Admin", adminSchema)

module.exports = Admin

