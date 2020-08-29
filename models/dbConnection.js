//set connection to db


const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://jaydeep:jaydeep@cluster0-sdhhy.mongodb.net/attainu?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, (err)=>{
    if (!err) { console.log('mongodbconnection sucessful')}
    else { console,log('Error in DB connection: ' + err) }
})

require('./userModel')