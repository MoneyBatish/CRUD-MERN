const joi=require('joi');

const Users=require('../models/userschema')
const GetAllUsers=async(req,res)=>{
    try{
        const users=await Users.find();
        res.status(200).json(users);
    }
    catch(error){
        res.status(401).json(error.message);
    }
}
const userSchema=joi.object({
    name:joi.string().min(5).required(),
    email:joi.string().email().required(),
    address:joi.string().required()
})
const AddUsers=async(req,res)=>{
    const{name,email,address}=req.body;
    const{value,error}=userSchema.validate({name,email,address});
    if(error){
        res.status(401).json({message:error.details[0].message});
    }
    else{
        const userExist=await Users.findOne({email});
        if(userExist)
        {
            res.status(401).json({message:'User Already Exist'});
        }
        else
        {
            const user=await Users.create({name,email,address});
            res.status(201).json(user);
        }
    }
}
const DeleteUser=async(req,res)=>{
    const {id}=req.params;
    const user=await Users.findById(id);
    await user.remove();
    res.status(201).json(user);
}

const userUpdate=async(req,res)=>{
    const {id}=req.params;
    const {name,email,address}=req.body;
    const {error}=userSchema.validate({name,email,address});
    if(error)
    {
        res.status(401).json({message:error.details[0].message});
    }
    else{
        const user=await Users.findById(id);
        user.name=name;
        user.email=email;
        user.address=address;
        const updatedUser=await user.save();
        res.status(201).json(updatedUser);
    }
}
module.exports={GetAllUsers,AddUsers,DeleteUser,userUpdate};

