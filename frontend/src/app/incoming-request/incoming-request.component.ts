import { Component } from '@angular/core';
import { BookDetails } from '../book-details.model';
import { BookService } from '../book.service';
import { Request } from '../request.model';
@Component({
  selector: 'app-incoming-request',
  templateUrl: './incoming-request.component.html',
  styles: [
  ]
})
export class IncomingRequestComponent {
   myRequests:Request[]=[];
   ownerName=""
   constructor(private bookService:BookService){
    bookService.getBorrowRequest().subscribe((data)=>{
      console.log(data)
      this.myRequests=data as Request[];
    })
    console.log(this.myRequests);
   }

   getName(id:string){
      let user:any;
      this.bookService.getName(id).subscribe((data)=>{
        user=data;
      })
      return user.name;

   }

   


    book:BookDetails=new BookDetails();

   getBookName(id:string) {
   
    this.bookService.getBookName(id).subscribe((data)=>{
      this.book=data as BookDetails;
    })
    
   }
    
}
