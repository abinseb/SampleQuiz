const UserRouter = require('express').Router();
const UserModel = require('../model/UserModel');

UserRouter.post('/reg',async(req,res)=>{
    try{
        const data = await UserModel(req.body);
        data.save();
        res.json("Success");
    }
    catch(err){
        res.status(500).json(err);
    }
})

module.exports = UserRouter;