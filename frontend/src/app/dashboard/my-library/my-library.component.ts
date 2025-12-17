import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { BookService } from 'src/app/book.service';
import { BookDetails } from 'src/app/book-details.model';
@Component({
  selector: 'app-my-library',
  templateUrl: './my-library.component.html',
  styles: [
  ]
})
export class MyLibraryComponent {
   myBooks:BookDetails[]=[];
    
  constructor(private location:Location,private service:BookService){
     service.getMyBooks().subscribe((data)=>{
      this.myBooks=data as BookDetails[];
     })
  }
  goBack(){
    this.location.back()
  }
}
