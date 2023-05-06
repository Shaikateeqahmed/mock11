const express = require("express");
const { connection } = require("./config/connection.js");
const {post} = require("./routes/postroute.js");
require("dotenv").config();

const app = express();


app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Home page")
})
app.use("/post",post);



app.listen(process.env.port,async()=>{
    await connection
    console.log(`server is rungin on the port ${process.env.port}`);
})