import express from 'express'
import cors from 'cors'

import {db,connectToDB} from "./db.js";


const app = express()
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send("Server Running Successfully")
})
app.get('/users',async (req, res) => {
    const details = await db.collection('col1').findOne({name:"haswanth"
    })
    res.json(details);
});
app.get('/dashboard',async (req, res) => {
    const details = await db.collection('col1').find().toArray()
    res.json(details);  
    
})
// app.get('/insert',async(req,res)=>{
//     const details=await db.collection('col1').insertOne({name:'ram',password:'1223'})
//     res.json(details);
// });
app.post('/insertdata/:name/:age',async (req,res)=>{
    const details=await db.collection('col1').insertOne(
        {
            name:req.params.name,
            age:req.params.age
        }
    );
    res.json(details);
});
app.post('/register/:name/:age/:mail',async (req,res)=>{
    const details=await db.collection('col1').insertOne(
        {
            name:req.params.name,
            age:req.params.age,
            mail:req.params.mail,
        }
    );
    res.json(details);
});

app.get('/login/:uid/:pwd',async (req,res)=>{
    console.log(req.params.uid);
    const details=await db.collection('col1').findOne({
        uid:req.params.uid,
        pwd:req.params.pwd
    })
    res.json(details)
   

});

connectToDB(()=>{
    app.listen(8000,()=>{
        console.log("Server Running At port 8000");
    })
})