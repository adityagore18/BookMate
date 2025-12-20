import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { UserService } from '../user.service';
 

@Component({
  selector: 'app-borrow-request',
  templateUrl: './borrow-request.component.html',
  styles: [
  ]
})
export class BorrowRequestComponent {
   myRequests:any
   constructor(private bookService:BookService,private userService :UserService){
            bookService.getBorrowRequest().subscribe((data)=>{
                this.myRequests=data;
                console.log(this.myRequests)
                  for(let i of this.myRequests){
                    bookService.getBookName(i.bookId).subscribe((data)=>{
                      i.bookDetails=data;
                  })
                  bookService.getName(i.ownerId).subscribe(data=>{
                    i.ownerDetails=data
                  })
                 }
                console.log(this.myRequests)
            })
            
   }
  
}
