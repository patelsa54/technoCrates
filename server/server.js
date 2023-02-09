const express= require('express');
var bodyParser = require('body-parser');
const app= express();
var cors = require('cors');


const connection= require("./database.js");
const register = require('./route/register');
const login= require("./route/login");
const userdetail =require("./route/userdetail");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
connection();
app.use(express.json());

app.use("/api/register", register);
app.use("/api/login", login);
app.use("/api/userdetail", userdetail);
const port=5000;
app.listen(port,()=>{
    console.log(`listening on localhost:${port}`);
})
