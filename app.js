const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const _ = require("lodash");
const User = require("./model/user")
const app = express();

mongoose.connect('mongodb://localhost:27017/UserData')
.then(()=>{
  console.log("Database Connection Done");
}).catch(()=>{
  console.log("Error in establishing Database");
});


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req, res){
  res.render("home");
});

app.post("/home", function(req,res){
  const radio = req.body.radioButton;
  console.log("The value is: "+radio);
  if(radio === "philanthrophist"){
    res.redirect("/register_phil");
  }
  else{
    res.redirect("/register_ngo");
  }

})


app.get("/contact", function(req, res){
  res.render("contact", {contactContent: contactContent});
});

app.get("/login", function(req, res){
  res.render("login");
});

app.post("/login", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  console.log(username);
  console.log(password);
});


app.get("/register", function (req, res) {
  res.redirect("/");
});

app.get("/register_phil", function(req,res){
  res.render("register_phil");
})

app.post("/register_phil", async(req, res)=> {
  const data = new User(req.body);
  await data.save();
  res.send("Saved Data")
});

app.get("/register_phil", function (req, res) {
  res.render("register_phil");
})

app.get("/register_ngo", function (req, res) {
  res.render("register_ngo");
})

// app.post("/compose", function(req, res){
//   const post = new Post({
//     title: req.body.postTitle,
//     body: req.body.postBody
//   });
//   post.save(function(err){
//     if(!err){
//       res.redirect("/");
//     }
//     else  
//       console.log(err);
//   });

 

  

// });

// app.get("/posts/:postID", function(req, res){
//   const requestedID = req.params.postID;
//   Post.findOne({_id:requestedID}, function(err,result){
//     if(!err){
//       res.render("post",{
//         title: result.title,
//         content: result.body
//       });
//     }

//     else
//       console.log(err);
//   })








  // posts.forEach(function(post){
  //   const storedTitle = _.lowerCase(post.title);

  //   if (storedTitle === requestedTitle) {
  //     res.render("post", {
  //       title: post.title,
  //       content: post.content
  //     });
  //   }
  // });

// });




app.listen(3000, function() {
  console.log("Server started on port 3000");
});
