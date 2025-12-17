const mongoose=require('mongoose')


const barrowSchema=new mongoose.Schema({
    bookId:String,
    requesterId:String,
    ownerId:String,
    requestDate:Date,
    status:String,
    requestType:String,
    returnDate:String,
    shippingAddress:String
})

module.exports=mongoose.model('Borrow',barrowSchema);