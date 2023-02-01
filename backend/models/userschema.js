const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const users=new Schema(
    {
        name:{
            type:String,
            required:true,
            min:5,
        },
        email:{
            type:String,
            required:true,
        },
        address:{
            type:String,
            required:true,
        }
    }
)

module.exports=mongoose.model('user',users);

