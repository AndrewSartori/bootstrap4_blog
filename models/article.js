const mongoose = require("mongoose");

var articleSchema = new mongoose.Schema({
    title: String,
    subTitle: String,
    body: String,
    // sectionHeading: {
    //     type: [],
    //     of: String
    // },
    // blockquote: {
    //     type: [],
    //     of: String
    // },
    created_date: {
        type: Date,
        default: Date.now
    }
});
  
module.exports =  mongoose.model("Article", articleSchema);