const express        = require("express");
const app            = express();
const bodyParser     = require("body-parser");
const methodOverride = require("method-override");
const mongoose       = require("mongoose");
const PORT           = process.env.PORT || 3000;

const Article                 = require("./models/article");
const seedDB                  = require("./seeds");


mongoose.connect("mongodb://localhost/blog", function(){
    console.log("=================================");
    console.log("MONGOOSE DATABASE IS OPERATIONAL");
    console.log("=================================");
});

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));

// Easy access to these files
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/vendor"));


// SEED THE DATABASE
// seedDB();


// Static Routes
app.get("/", function(req, res){
   res.render("index"); 
});

app.get("/about", function(req, res){
    res.render("about");
    // res.send("TESTING TESTING 1 2 3");
});

app.get("/contact", function(req, res){
    res.render("contact");
    // res.send("TESTING TESTING 1 2 3");
});


// LEARNING RESOURCES 
app.get("/learning", function(req, res){
    res.render("learning");
});

app.get("/learningResources/htmlANDcss", function(req, res){
   res.render("learningResources/htmlANDcss"); 
});

app.get("/learningResources/javascript", function(req, res){
   res.render("learningResources/javascript"); 
});

app.get("/learningResources/arrays", function(req, res){
   res.render("learningResources/arrays"); 
});

app.get("/learningResources/conditionals", function(req, res){
   res.render("learningResources/conditionals"); 
});

app.get("/learningResources/objects", function(req, res){
   res.render("learningResources/objects"); 
});

app.get("/learningResources/theDOM", function(req, res){
   res.render("learningResources/theDOM"); 
});

app.get("/learningResources/whileLoops", function(req, res){
   res.render("learningResources/whileLoops"); 
});



// Dynamic Routes (Article creating routes -- this will become an API)
// INDEX ROUTE - show all Articles
app.get("/posts", function(req, res){
    Article.find({}, function(error, allArticles){
        if(error){
            console.log(error);
        } else {
            res.render("posts", {Articles: allArticles});
        }
    });
});


// CREATE ROUTE - add new Articles to database
app.post("/posts", function(req, res){
    const title             = req.body.title;
    const subTitle          = req.body.subTitle;
    const body              = req.body.body;
    // const sectionHeading    = req.body.sectionHeading;
    // const blockquote        = req.body.blockquote;

    var newArticle = {
        title: title, 
        subTitle: subTitle,
        body: body,
        // sectionHeading: sectionHeading,
        // blockquote: blockquote
    };
    // CREATE A NEW question AND SAVE TO DB
    Article.create(newArticle, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            // REDIRECT BACK TO questionS PAGE
            res.redirect("posts");
        }
    });
    // redirect to the questions page
    // response.redirect("/questions");
});


// NEW DB ENTRY ROUTE - show form to create new Article
app.get("/new", function(req, res){
   res.render("new"); 
});


// SHOW ROUTE - shows more information about a single DB entry on a SHOW template
app.get("/posts/:id", function(req, res){
    Article.findById(req.params.id).exec(function(error, foundArticle){
        if(error){
            console.log(error);
        } else {
            console.log(foundArticle);
            res.render("article", {Article: foundArticle});
        }
    });
});



// Server
app.listen(PORT, function(){
   console.log("=================================");
   console.log("SERVER OPERATIONAL ON PORT: " + PORT); 
   console.log("================================="); 
});