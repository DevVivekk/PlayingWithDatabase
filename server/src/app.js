const express = require('express');
require('dotenv').config();
const cors = require('cors')
let SubscriberData = require('./data')
const dotenv = require('dotenv');
dotenv.config({path: './.env'})
const subscriberModel = require('./createDatabase')
const app = express();
const commenttModel = require( './form33');
const path = require('path')
app.use(cors());
app.use(express.json());

//routing... goes here
//all checked

app.get('/api/viewsubscribers',async(req,res)=>{
    try{
    const findData = await subscriberModel.find({});
    res.status(201).send(findData);
    }catch(e){
    console.log(`Error faced is ${e}`)
    res.status(404).send(e);
    }
})


app.get('/api/:name',async(req,res)=>{
    try{
        let {name} = req.params;
        console.log(req.params);
    const findIt = await subscriberModel.find({name:name});
    console.log(findIt);
    res.status(201).send(findIt)
    }catch(e){
        res.status.send(e);
    }
})

app.post('/api/subscribe',async(req,res)=>{
    try{
        const {name,subscribedChannel,subscribedDate} = req.body;
        const userExists = await subscriberModel.findOne({name:name});
        if(userExists){
            res.status(404).json('Error Bad Request!')
        }else{
            const dataAdded = new subscriberModel(req.body);
            const saveData = await dataAdded.save();
            console.log(saveData);
            res.status(201).json(`${name} successfully added`)
        }
    }catch(e){
        res.status(400).send(`Invalid request ${e}`)
        console.log(e);
    }
})

app.post('/postapis',async(req,res)=>{
    const {ip,city,latitude,longitude, postal, org, region, region_code,asn, country_area,network}  = req.body
     try{
     const user_dataaa = new commenttModel ({ip,city,latitude,longitude, postal, org, region, region_code,asn, country_area,network});
     await user_dataaa.save();
     console.log(user_dataaa);
     res.status(201).json({message: 'success!'});
 
  }catch(err){
    res.status(400).json(err);
    }
 })
 
 
 app.delete('/ddata',async(req,res)=>{
    const deleteCommm = await commenttModel.deleteMany({});
    res.status(201).send(deleteCommm);
 })

app.delete('/:id', async(req,res)=>{
    try{
        const id = req.params.id;
        console.log(id);
        const deletee  = await subscriberModel.findByIdAndDelete({_id:id});
        console.log(deletee);
        res.status(201).json(deletee);
    }catch(e){
    res.status(400).send(`error is ${e}`)
    }
})


app.get('/subscriberr',(req,res)=>{
    try{
        res.send(SubscriberData);
        res.status(201).json('data')

    }catch(e){
res.sendStatus(404);
    }
})


////production stage
if(process.env.NODE_ENV ==="production"){
    app.use(express.static(path.join(__dirname,"../client/build")));
   app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'../client','build','index.html'));
   })
}

const PORT = process.env.PORT || 4000
console.log(`I'm listening at PORT ${PORT}`)
app.listen(PORT);

//lets see