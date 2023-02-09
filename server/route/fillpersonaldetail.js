const router= require("express").Router();
const {UserPersonalDetail}=require("../model/personaldetail")

router.post("/",async(req,res)=>{
    try{
        console.log("personal detail "+req.body);
        user = await UserPersonalDetail.findOne({aadharNo: req.body.aadharNo})
        if(user)
            return res.send({message:"UnSuccessfull"});
        
        await new UserPersonalDetail({...req.body}).save();

        res.send({message:"Successfull"})
    }catch(error){
        console.log(error);
        res.send({message:"Error"});
    }
})

module.exports= router;