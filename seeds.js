var mongoose = require("mongoose");
var Article = require("./models/article");

var seedArticles = [
    {
        title: "This is definitely the title", 
        subTitle: "What a great sub-title!",
        body: "111111111111Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
        {
        title: "New Article", 
        subTitle: "What a great NEW sub-title!",
        body: "2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222",
    },
        {
        title: "What's this, a title?", 
        subTitle: "Do you know da way?",
        body: "333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333",
    }
];


function seedDB(){
   //Remove all Articles
   Article.remove({}, function(error){
        if(error){
            console.log(error);
        } else {
            console.log("removed Articles!");
            seedArticles.forEach(function(seed){
                Article.create(seed, function(error, article){
                    if(error){
                        console.log(error);
                    } else {
                        console.log("added an Article");
                    }
                });
            });
        }
    }); 
}

module.exports = seedDB;