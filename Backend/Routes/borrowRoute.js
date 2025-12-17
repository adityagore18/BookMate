const express=require('express');
const router=express.Router();
const bcrypt=require('bcrypt');
const jwt=require("jsonwebtoken")
const Borrow=require('../Models/Borrow');
const Book=require('../Models/Books');
const auth=require('../Middlewares/auth');
const User=require('../Models/Users');
 
router.get('/requests/my-requests',auth,(req,res)=>{
    Borrow.find({requesterId:req.user.id})
     .then((data)=>{
        res.send(data);
     })
     .catch(err=>console.log(err));
})

router.get('/requests/received',auth,(req,res)=>{
    Borrow.find({ownerId:req.user.id})
    .then((data)=>{
        res.send(data);
    })
    .catch(err=>res.send(err));
})

router.get('/requests/user/:id',auth,(req,res)=>{
 
    User.findById(req.params.id)
    .then((data)=>{
      console.log(data);
      res.send(data);
    }).catch(err=>console.log(err))
})

router.get('/requests/book/:bookId',auth,(req,res)=>{
  
 
    Book.findById(req.params.bookId)
    .then((data)=>{
      res.send(data);
    }).catch(err=>console.log(err))
})



router.post('/requests/create',auth,async (req,res)=>{     try{


      const bookInstance= await Book.findById(req.body.bookId,{status:'Available'});
      if(bookInstance) { 
      const newRequest=new Borrow({
        bookId:bookInstance._id,
        requesterId:req.user.id,
        ownerId:bookInstance.ownerId,
        requestDate:req.body.requestDate,
        status:req.body.status,
        requestType:req.body.requestType,
        returnDate:req.body.returnDate
      })

      await Book.findByIdAndUpdate(bookInstance._id,{status:"Not Available"});


      newRequest.save()
      .then(data=>res.status(201).json({
        bookDetails:data,
        msg:'Request Created Successfully'
      }))
      .catch(err=>console.log(err));


      
    }
    }catch(err){
        console.log(err);
    }
})

 



module.exports=router;

// bookId:String,
//     requesterId:String,
//     ownerId:String,
//     requestDate:Date,
//     status:String,
//     requestType:String,
//     returnDate:String

 