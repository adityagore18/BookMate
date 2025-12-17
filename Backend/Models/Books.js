const mongoose=require('mongoose')

const bookSchema=new mongoose.Schema({
    ownerId:String,
    title:String,
    author:String,
    category:String,
    description:String,
    coverImagePaths:[String],
    status:String,
    addedDate:Date,
    rentPerMonth:Number,
    price:Number
})


module.exports=mongoose.model('Book',bookSchema);