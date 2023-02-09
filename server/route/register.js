const router= require("express").Router();
const {User}=require("../model/user")

router.post("/",async(req,res)=>{
    try{
        
        console.log(req.body);
        user= await User.findOne({phoneNo: req.body.phoneNo})
        if(user)
            return res.send({message:"UnSuccessfull"});
        
            await new User({...req.body}).save();

        res.send({message:"Successfull"})
    }catch(error){
        console.log(error);
        res.send({message:"Error"});
    }
})

module.exports= router;