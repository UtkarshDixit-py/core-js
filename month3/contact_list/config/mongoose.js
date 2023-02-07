
// //require mongoose
// const mongoose = require('mongoose');

// //connect to database
// mongoose.connect('mongodb://127.0.0.1:8000/contacts_list_db');


// //acquire the connection
// const db = mongoose.connection;

// //error
// db.on('error',console.error.bind(console,'error connecting db'))

// //up and running then print message
// db.once('open', function(){
//     console.log('successfully connected to the database')
// })

const mongoose = require('mongoose');

main().catch(err => console.log("ERROR",err));

async function main() {
  await mongoose.connect('mongodb://localhost/contact_list_db');
  
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

 const db = mongoose.connection;

 db.once('open',function(){
    console.log('successfully connected to the database')
 })
