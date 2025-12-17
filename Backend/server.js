const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')

//local imports
const dbConnect=require('./db')
const userRoute=require('./Routes/userRoute')
const bookRoute=require('./Routes/bookRoute')
const borrowRoute=require('./Routes/borrowRoute')
app=express()
app.use("/uploads", express.static("uploads"))
app.use(bodyParser.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Welcome to BookMate API..");
})

app.use("/",userRoute)
app.use('/',bookRoute)
app.use('/',borrowRoute)

dbConnect()
.then(()=>{
    console.log("bookMateDB is Connectd..");
    app.listen(3000,()=>{
    console.log("Server is started at port no 3000");
    })
})
.catch((err)=>{
    console.log(err);
})






