const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    AuthorName : String,
    NoticeTitle : String,
    NoticeDescription : String,
    date : String
})

const PostModel = mongoose.model("post",postSchema);

module.exports={PostModel};