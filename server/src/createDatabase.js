require("dotenv").config();
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI)
.then((response)=>{
    console.log('Connection Successful!')
})
.catch((e)=>{
    console.log(`Erorr is ${e}`)
})

const subscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    subscribedChannel:{
        type: String,
        required: true,
    },
    subscribedDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

const subscriberModel = new mongoose.model('YoutubeData',subscriberSchema)
module.exports = subscriberModel;