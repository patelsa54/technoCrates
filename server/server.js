const express= require('express');
var bodyParser = require('body-parser');
const app= express();
var cors = require('cors');


const connection= require("./database.js");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
connection();
app.use(express.json());

const port=5000;
app.listen(port,()=>{
    console.log(`listening on localhost:${port}`);
})
