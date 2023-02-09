const mongooose= require("mongoose");

module.exports=()=>{
    const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology:true,
    };
    try{
        mongooose.connect("mongodb://localhost:27017/TechnoDb", connectionParams);
        console.log("Connected to database successfully ");
    }catch(error)
    {
        console.log(error);
        console.log("couldnt connect to DB");
    }
}