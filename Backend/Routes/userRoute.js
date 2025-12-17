const express=require('express');
const router=express.Router();
const bcrypt=require('bcrypt');
const jwt=require("jsonwebtoken")
const User=require('../Models/Users');
const {upload1} =require('../Middlewares/upload');
const auth=require('../Middlewares/auth');

const getHashPassword = (password) => {
  return bcrypt.hash(password, 10);
};
 


router.post("/register", upload1.single("profileImage"), async (req,res) => {
  try {
    const {email}=req.body;
    const userExists = await User.findOne({ email });
    if (userExists) return res.json({ msg: "User already exists" });

    const pass = await getHashPassword(req.body.password); // wait here

    let imgUrl = "http://localhost:3000/uploads/profileImages/";
    console.log(req.file);
    
    if (req.file && req.file.filename) {
      imgUrl += req.file.filename;
    } else {
      imgUrl += "download.jpeg";
    }
  

    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: pass,
      phone: req.body.phone,
      profileImage: imgUrl,
      address: req.body.address,
      joinedDate: new Date()
    });

    const savedUser = await user.save();
    res.status(201).json({
      data: savedUser,
      msg: "User registered successfully"
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server error" });
  }
});

 

router.post('/login',async (req,res)=>{
  console.log(req.body)
    const {email, password}=req.body;
    const user = await User.findOne({ email });
    if(!user) return res.json({msg:"User not found"})
   
    const isMatch = await bcrypt.compare(password,user.password);
    console.log(isMatch)
    if (!isMatch) return res.json({ msg: "Wrong password" });
    const token=jwt.sign({user:{id:user._id}},"secret123",{expiresIn:"1h"});

    res.json({msg:"Login successfully",token})
});

router.get("/profile",auth,async (req,res)=>{
   
  User.findById(req.user.id)
    .then((data)=>{
      res.send(data);
    })
    .catch(err=>console.log(err));
} )


// admin purpose route

router.get('/profile/:id',(req,res)=>{
    User.findById(req.params.id)
    .then((data)=>{
      res.send(data);
    })
    .catch(err=>console.log(err));
})

router.put('/profile/:id',upload1.single("profileImage"),auth,(req,res)=>{
  let imgUrl = "http://localhost:3000/uploads/profileImages/";
  let flag=false;

  if (req.file && req.file.filename) {
      imgUrl += req.file.filename;
      flag=true;
    }
   console.log(imgUrl)
  if(flag){
    updatedData={
    "phone":req.body.phone,
    "address":req.body.address,
    "profileImage":imgUrl
    }
  }else{
    updatedData={
    "phone":req.body.phone,
    "address":req.body.address 
    }
  }
  updatedData={
    "phone":req.body.phone,
    "address":req.body.address,
    "profileImage":imgUrl
  }

  User.findByIdAndUpdate(req.params.id,updatedData,{})
  .then((data)=> res.json({id:req.params.id,
    msg:'data updated successfully',
    check:data
  }))
})




router.get('/getUsers',(req,res)=>{
    User.find().then((data)=>{
        res.send(data);
    }).catch(err=>console.log(err));
})


module.exports=router;
// name:String,
//     email:String,
//     password:String,
//     phone:String,
//     profileImage:String,
//     address:String,
//     joinedDate:Date