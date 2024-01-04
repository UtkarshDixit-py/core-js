const express = require("express");
const path = require("path");
const db = require("./config/mongoose");
const port = 8000;

const app = express();
const userRoute = require("./routes/users");
const profileRoute = require("./routes/profile");
const errorRoute = require("./routes/error");
const Contact = require("./models/contact");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/users", userRoute);
app.use("/profile", profileRoute);
// app.use("*",errorRoute);
app.use(express.urlencoded());
app.use(express.static("assets"));

//middleware 1
app.use(function (req, res, next) {
  req.myName = "Utkarsh";
  next();
});

//middleware 2
app.use(function (req, res, next) {
  console.log("from controller 2", req.myName);
  next();
});

var myList = [
  {
    name: "utkarsh",
    contact: "858585851",
  },
  {
    name: "deep work",
    contact: "858585852",
  },
  {
    name: "tony stark",
    contact: "8511185853",
  },
  {
    name: "bruce wayne",
    contact: "858585854",
  },
  {
    name: "johny depp",
    contact: "928585856",
  },
];

app.get("/", function (req, res) {
  console.log("from get / ", req.myName);
  // res.send('express is running')

  Contact.find({}, function (err, allContacts) {
    if (err) {
      console.log("error occured while retrieving data from database");
      return;
    }

    return res.render("home", {
      title: "Contact List",
      contact_list: allContacts,
    });
  });
});

app.get("/practice", function (req, res) {
  return res.render("practice", {
    title: "playground",
  });
});

app.post("/create-contact", function (req, res) {
  console.log(req.body);
  Contact.create(
    {
      name: req.body.name,
      phone: req.body.contact,
    },
    function (err, newContact) {
      if (err) {
        console.log("there is an error while adding new contact", err);
        return;
      }
      console.log("****", newContact);

      res.redirect("back");
    }
  );
});

app.get("/delete-contact/", function (req, res) {
  // /delete-contact/:phone
  // console.log(req.params);

  let id = req.query.id

  Contact.findByIdAndDelete(id,function(err){
    if(err){
        console.log("error while deleting the item");

        return;
    }

  })


  return res.redirect("back");
});

app.listen(port, function (err) {
  if (err) {
    console.log("Error in running the server", err);
  }
  console.log("my express server is running on port", port);
});
