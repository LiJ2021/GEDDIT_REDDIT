const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.set("views", "./views")
app.set("view engine", "pug")

app.use(bodyParser.urlencoded({extended:true}))
//'call' middleware to access static files-folders
app.use(express.static('images'))
app.use(express.static('styles'))
app.use(express.static('scripts'))
app.use(express.static('public'))

//import the stuff that we need
const { MongoClient, ServerApiVersion } = require('mongodb');
const { response } = require('express')
//cnxn address for our mongodb server/db
const uri = "mongodb+srv://lianarogers:TcNaEPDTQ9IHozMa@cluster0.p3wsmb6.mongodb.net/?retryWrites=true&w=majority";


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

let db;
let wonderCollection;
let image;

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
        image = wonderCollection.imagelink
});



app.get("/", (req, res) =>{
    wonderCollection.find().toArray().then(results => { 
        console.log(results)
        //---------------- i want to do a get from the database that returns the new object id. The following code broke it - so I know its not right
        // .then(res =>{
        // do i need to 
        //     return res.json()
        // })
    //     .then(data =>{
    //     let objectId = results._id
    //     //console.log("object id", results._id)
    //     console.log("object id", data)
    // })
    res.render("index", {wonders: results})
   })
})

app.post("/wonders", (req,res)=>{
    console.log("request body", req.body)
    wonderCollection.insertOne(req.body).then(result =>{
        console.log("result", result)
        res.redirect("/") //says go back to the main page
}).catch(error =>console.log(error))

})

app.listen(3030)