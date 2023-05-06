const express = require("express");
const {PostModel} = require("../models/postmodel.js");
const post = express.Router();



post.get("/",async(req,res)=>{
    try {
        let posts = await PostModel.find();
        res.json(posts);
    } catch (error) {
        console.log(error);
    }
})

post.post("/create",async(req,res)=>{
    let {AuthorName, NoticeTitle, NoticeDescription} = req.body;
    let date = new Date;
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${day}-${month}-${year}`;
console.log(currentDate);
    
    let post = new PostModel({AuthorName,NoticeTitle,NoticeDescription, date : currentDate });
    await post.save();
    res.json("Notice created Successfully!");
})

post.patch("/edit/:id",async(req,res)=>{
    let ID = req.params.id;
    let payload = req.body;
    await PostModel.findByIdAndUpdate({_id:ID},payload);
    res.json(`Post Of a ${ID} Updated!`)
})

post.delete("/delete/:id",async(req,res)=>{
    let ID = req.params.id;
    await PostModel.findByIdAndDelete({_id:ID});
    res.json(`Notice Of a ${ID} Deleted!`)
})
module.exports={post};