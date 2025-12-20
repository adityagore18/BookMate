const express=require('express');
const router=express.Router();
const bcrypt=require('bcrypt');
const jwt=require("jsonwebtoken")
const Book=require('../Models/Books');
const {upload2} =require('../Middlewares/upload');
const auth=require('../Middlewares/auth');

const mongoose=require('mongoose')
router.get('/books/my-books',auth,(req,res)=>{
    console.log(req.user.id)
    Book.find({ownerId:new mongoose.Types.ObjectId(req.user.id) })
    .then((data)=>res.send(data))
    .catch(err=>console.log(err));
})

router.get('/books' ,(req,res)=>{
     Book.find()
     .then((data)=>{
        res.send(data);
     })
     .catch(err=>console.log(err));
})

router.get('/books/:id',auth,(req,res)=>{
    Book.findById(req.params.id)
    .then((data)=>{
        // console.log(req.user.id)
        res.send(data);
    })
    .catch(err=>res.send(err));

}) 


router.put('/books/:id',(req,res)=>{
    Book.findByIdAndUpdate(req.params.id,req.body,{})
    .then((data)=>{
        console.log(req.user.id)
        res.send(data);
    })
    .catch(err=>res.send(err));

}) 

router.post('/books/add',upload2.array('coverImagePaths',6),auth,(req,res)=>{
     
    if (!req.files) {
    return res.status(400).json({ error: 'No file uploaded' });
    }
     console.log(req.files);
     let imgUrls=[];
     for(let i of req.files){
        console.log("http://localhost:3000/uploads/booksCoverImages/"+i.filename);
        imgUrls.push("http://localhost:3000/uploads/booksCoverImages/"+i.filename);
     }
     console.log(imgUrls)
     newBook=new Book({
        ownerId:req.user.id,
        title:req.body.title,
        author:req.body.author,
        category:req.body.category,
        description:req.body.description,
        coverImagePaths:imgUrls,
        status:req.body.status,
        addedDate:new Date(),
        rentPerMonth:req.body.rentPerMonth,
        price:req.body.price
     });
     newBook.save()
     .then((data)=>{
        res.status(201).json({
            data:data,
            msg:"Book is added."
        })
     })
     .catch(err=>console.log(err));
})


router.delete('/books/delete/:id',auth,(req,res)=>{
    Book.findByIdAndDelete(req.params.id).then((data)=>{
        res.send('book is deleted having id'+req.params.id);
    }).catch(err=>Console.log(err))
})





module.exports=router;

// ownerId:String,
//     title:String,
//     author:String,
//     category:String,
//     description:String,
//     coverImagePaths:[String],
//     status:String,
//     addedDate:Date