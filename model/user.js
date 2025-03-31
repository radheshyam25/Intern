const mongoose=require('mongoose')
const Schema=mongoose.Schema
const userSchema=new Schema({
    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true,
    },

    address:{
        type:String,
        required:true,
    },
    refreshtoken:{
        type:String,
        default:null
    },

    createdAt:{
        type:Date,
        default:Date.now
    }


})

module.exports=mongoose.model('user',userSchema)
