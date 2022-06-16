const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.set("views", "./views")
app.set("view engine", "pug")

app.use(bodyParser.urlencoded({extended:true}))

//import the stuff that we need
const { MongoClient, ServerApiVersion } = require('mongodb');
//cnxn address for our mongodb server/db
const uri = "mongodb+srv://lianarogers:TcNaEPDTQ9IHozMa@cluster0.p3wsmb6.mongodb.net/?retryWrites=true&w=majority";


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

let db;
let wonderCollection;

client.connect(err => {
    //check cnxn to database
    if(err){
        console.log(err)
    }else{
        console.log("Connected to MongoDB")
    }
    //to interact with our database  we are making and setting up the databse
//database is named "natural wonders"
//collection inside the database is called "wonders"
     db = client.db("natural-wonders")
     wonderCollection = db.collection("wonders")
    // console.log("Connected to the database")
    // console.log(err)
//   const collection = client.db("test").collection("devices");
  // perform actions on the collection object
//   client.close();
});



app.get("/", (req, res) =>{
    wonderCollection.find().toArray().then(results => { 
        console.log(results)
    
    res.render("index", {wonders: results})
   })
})

app.post("/wonders", (req,res)=>{
    console.log(req.body)
    wonderCollection.insertOne(req.body).then(result =>{
        console.log(result)
        res.redirect("/") //says go back to the main page when done
}).catch(error =>console.log(error))

})

app.listen(3030)