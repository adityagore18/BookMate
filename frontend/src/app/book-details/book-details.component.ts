import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { Location } from '@angular/common';
import { BookDetails } from '../book-details.model';
import { Request } from '../request.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {
  _id="id";
  bookDetails:BookDetails[];
  currUser:any;
  initialImgUrl=''
  isborrow=true
  isClickRequest=false;
  shippingAddress='';
  noOfMonth=1;
  res:any=''
  constructor(private activeRoute:ActivatedRoute,private service:BookService,private user:UserService,private location:Location,private router:Router){
    console.log(activeRoute.snapshot.params)
    this._id=activeRoute.snapshot.params['_id'] ;
    this.bookDetails=service.books.filter(book=>book._id==this._id)
     user.getUserDetails().subscribe(data=>{
      // console.log(data)
      this.currUser=data;
     })

    //  console.log(this.currUser)
    // console.log(this.bookDetails[0]);
    

  }
  
  goBack(){
    this.location.back()
  }

  setBiggerImagePath(path:string){
    this.initialImgUrl=path;
  }

  onClickRequest( ){
     this.isClickRequest=true;
   
  }
  callBorrow(){
     this.isborrow=true;
 
    //  this.class1="col-6 border-success  rounded p-1 m-1";
    //   this.class2="col-6 border-secondary  rounded p-1 m-1";
  }
  callRent(){
     this.isborrow=false;
  
    // this.class2="col-6 border-success  rounded p-1 m-1";
    // this.class1="col-6 border-secondary  rounded p-1 m-1";
  }
  cancel(){
    this.isClickRequest=false;
  }
     submitRequest(){
    const reqObj=new Request();
    reqObj.bookId=this.bookDetails[0]._id;
    reqObj.ownerId=this.bookDetails[0].ownerId;
    reqObj.status='Pending';
    reqObj.requestType=this.isborrow?'Borrow':'Rent';
    reqObj.requestDate=new Date();
    reqObj.noOfMonth=this.noOfMonth;
    reqObj.shippingAddress=this.shippingAddress;
  
    alert('Request Sumitted');
     this.service.makeRequest(reqObj).subscribe(data=>{
          this.res= data;
        
        this.router.navigateByUrl('/dashboard/request-success/'+this.res.bookDetails._id)
          
    })
    
    
     
  
     
     
    
  }

}


// bookId:string='';
//     requesterId:string='';
//     ownerId:string='';
//     requestDate:Date=new Date();
//     status:string='';
//     requestType:string='';
//     returnDate:string='';
//     shippingAddress:string='';
