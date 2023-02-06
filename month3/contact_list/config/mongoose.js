
//require mongoose
const mongoose = require('mongoose');

//connect to database
mongoose.connect('mongodb://127.0.0.1:8000/contacts_list_db');


//acquire the connection
const db = mongoose.connection;

//error
db.on('error',console.error.bind(console,'error connecting db'))

//up and running then print message
db.once('open', function(){
    console.log('successfully connected to the database')
})