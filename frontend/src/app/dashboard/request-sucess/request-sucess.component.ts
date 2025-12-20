import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookDetails } from 'src/app/book-details.model';
import { BookService } from 'src/app/book.service';
import { Request } from 'src/app/request.model';

@Component({
  selector: 'app-request-sucess',
  templateUrl: './request-sucess.component.html',
  styles: [
  ]
})
export class RequestSucessComponent {
   requestDetails:any;
   ownerDetails:any;
   bookDetails:BookDetails=new BookDetails;
   returnDate:any;

   constructor(private activateRoute:ActivatedRoute,private bookService:BookService,private roter:Router){
   console.log(activateRoute.snapshot.params['id']) ;
    bookService.getRequest(activateRoute.snapshot.params['id']).subscribe((data)=>{
          this.requestDetails=data;
          console.log(data);
          
          bookService.getBookName(this.requestDetails.bookId).subscribe((data)=>{
            this.bookDetails=data as BookDetails;
            console.log(data);

          })
          bookService.getName(this.requestDetails.ownerId).subscribe((data)=>{
            this.ownerDetails=data;
            console.log(this.ownerDetails);
          })
        })



   }

   goToMyRequest(){
    this.roter.navigateByUrl('/dashboard/messages/borrow-requests')
   }
}
