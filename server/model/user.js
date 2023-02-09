const mongoose= require('mongoose');
const {UserPersonalDetail}=require("./personaldetail");
const pmoUserSchema= new mongoose.Schema({

    firstName:{type: String, required:true},
    lastName:{type: String, required:true},
    phoneNo:{type: Number, required:true},
    aadharNo:{type: Number, required:true},
});
const User= mongoose.model("user",pmoUserSchema);
module.exports={User};