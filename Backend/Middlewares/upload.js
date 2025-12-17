const multer=require('multer');

 

const profileStorage= multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'uploads/profileImages');
    }
    ,
    filename:function(req,file,cb){
        cb(null,Date.now()+"-"+file.originalname);
    }
});

const bookStorage= multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'uploads/booksCoverImages');
    }
    ,
    filename:function(req,file,cb){
        cb(null,Date.now()+"-"+file.originalname);
    }
});



const upload1=multer({
    storage:profileStorage
});

const upload2=multer({
    storage:bookStorage
});

module.exports= {upload1,upload2};



