const mongoose = require('mongoose');

const URL = 'mongodb+srv://placement:aditya12@cluster0.zibshld.mongodb.net/placementmern?retryWrites=true&w=majority'

const mongo = async () => {
     
    mongoose.connect(URL,{
            useNewUrlParser:true
        }).then(()=>{
            console.log("connected to database")
        }).catch(e =>console.log(e))
}

module.exports = mongo;