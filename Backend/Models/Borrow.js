const mongoose=require('mongoose')


const barrowSchema=new mongoose.Schema({
    bookId:String,
    requesterId:String,
    ownerId:String,
    requestDate:Date,
    status:String,
    requestType:String,
    noOfMonth:Number,
    shippingAddress:String
})

module.exports=mongoose.model('Borrow',barrowSchema);