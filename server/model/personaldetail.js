const mongoose= require('mongoose');
const personaldetailSchema= new mongoose.Schema({
    aadharNo:{type:String, required:true},
    birthDate:{type: Date, required:true},
    age:{type:Number, required:true},
    gender:{type:String, required:true},
    weight:{type: Number, required:true},
    height:{type: Number, required:true},
    address:{type:String, required:true},
    medicalproblem:{type:String},
    allergies:{type:String},
    medication:{type:String}
});
const UserPersonalDetail= mongoose.model("personaldetail",personaldetailSchema);
module.exports={UserPersonalDetail};