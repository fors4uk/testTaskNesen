const express = require('express');
const app = express();
const multer = require('multer');
const cors = require('cors');
const csv = require('csv-parser');
const fs = require('fs');
const mongo = require('mongodb');

const MongoClient = mongo.MongoClient;
const uri = "mongodb+srv://fors4uk:q1w2e3r4t5%40@cluster0-uxjgb.mongodb.net/test?retryWrites=true";
const pathToSave = 'public';

app.use(cors());

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, pathToSave)
    },
    filename: function (req, file, cb) {
        cb(null,file.originalname )
    }
});

var upload = multer({ storage: storage }).single('file');

app.post('/upload',function(req, res) {

    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
        res.status(200).send(req.file);
        writeDataToDb(req.file.originalname);

    })

});

app.get('/loadData',function(req, res){
    var client = new MongoClient(uri, { useNewUrlParser: true });

    client.connect(err => {
        let collection = client.db("test_db").collection("tested").find({}).toArray(function(err, result){
            res.send(result);
        });
    });
});

app.listen(3002, function() {

    console.log('App running on port 3002');

});
function writeDataToDb(name){
    if (fs.existsSync('./'+pathToSave+'/'+name)) {
        fs.createReadStream('./'+pathToSave+'/'+name)
            .pipe(csv())
            .on('data', (row) => {
                console.log(row);
                setData(row);
            })
            .on('end', () => {
                console.log('CSV file successfully processed');
            });
    }
}


function setData(row){
    const MongoClient = mongo.MongoClient;
    const uri = "mongodb+srv://fors4uk:q1w2e3r4t5%40@cluster0-uxjgb.mongodb.net/test?retryWrites=true";
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
        const collection = client.db("test_db").collection("tested");
        collection.insertOne(row, function(err, result){

            if(err){
                return console.log(err);
            }
            console.log(result.ops);
            client.close();
        });
    });
}

function getData(){

    var client = new MongoClient(uri, { useNewUrlParser: true });

    client.connect(err => {
        let collection = client.db("test_db").collection("tested").find({}).toArray(function(err, result){
            console.log(result);
        });
        console.log(collection);
        /*collection.find({}).toArray(function(err, result){

            if(err){
                return console.log(err);
            }
            logData(result);
            client.close();
        });*/
    });
}

module.exports = app;
