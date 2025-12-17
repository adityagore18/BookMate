 
 
const mongoose=require('mongoose')

const DB_URI='mongodb://127.0.0.1:27017/bookMateDB'

module.exports=()=>{
    return mongoose.connect(DB_URI);
}