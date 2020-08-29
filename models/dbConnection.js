//set connection to db


const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/FE_DB", { useNewUrlParser: true, useUnifiedTopology: true }, (err)=>{
    if (!err) { console.log('mongodbconnection sucessful')}
    else { console,log('Error in DB connection: ' + err) }
})

require('./userModel')