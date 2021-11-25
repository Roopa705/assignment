const dotenv = require('dotenv');
const express = require('express');
const MonogoClient = require('mongodb').MongoClient ;
const app = express();

var cors = require('cors');
app.use(cors());

dotenv.config({path: './config.env'});

const DB = process.env.DATABASE ;
const PORT = process.env.PORT ;

app.use(express.json());

app.get('/api', (req,res) => {
    database.collection('userdatas').find({}).toArray((err,result) =>{
        if(err) throw error;
        res.send(result);
    })
})

app.listen(PORT,() => {
    MonogoClient.connect(DB, (err , result)=>{
        if(err) throw error ;
        database = result.db('bimaxpress');
        console.log("connection Successful");
    })
})