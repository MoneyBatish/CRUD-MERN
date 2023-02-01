const express=require('express');
const {GetAllUsers,AddUsers,DeleteUser,userUpdate}=require('../controller/userConrtroller');
const router=express.Router();

router.route('/').post(AddUsers).get(GetAllUsers);
router.delete('/delete/:id',DeleteUser);
router.patch('/update/:id',userUpdate);

module.exports=router;