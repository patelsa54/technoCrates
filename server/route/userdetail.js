const router= require("express").Router();

const {User}=require("../model/user");

router.get("/",async(req,res)=>{
    try{
        console.log("aadhhar :"+req.query.aadharNo)
        console.log("phone no :"+req.query.phoneNo)
        User.findOne({aadharNo : req.query.aadharNo}, (error, data) => {
            if (error) {
                res.send({message :error})
            } else {
                console.log("data fetched with id : "+data);
                console.log("data type : "+typeof(data));
                res.json(data)
            }
        })
    }catch(error){
        console.log(error);
        res.send({message:"UnSuccessfull"});
    }
})

module.exports= router;