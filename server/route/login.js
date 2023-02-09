const router=require("express").Router();
const {User}=require("../model/user");


router.post("/",async(req,res)=>{
    
    try {
        console.log(req.body)
        
        const user= await User.findOne({aadharNo:req.body.aadharNo});
        if(!user)
            return res.send({message:"Invalid Email or Password"})
        else
        {
            if(req.body.phoneNo== user.phoneNo)
            {
                console.log("user : "+user);
                return res.send({message:"Successfull", user: user});
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({message:"Internal server error"});
    }
})

module.exports= router;