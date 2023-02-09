const router= require("express").Router();

const {UserPersonalDetail} = require("../model/personaldetail");

router.post("/",async(req,res)=>{
    try{
        console.log("aadhhar :"+req.query.aadharNo)
        console.log("phone no :"+req.query.phoneNo)
        UserPersonalDetail.findOne({aadharNo : req.query.aadharNo}, (error, data) => {
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