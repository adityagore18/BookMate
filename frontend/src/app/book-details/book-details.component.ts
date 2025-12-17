import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {
  _id="id";
  bookDetails:any;
  initialImgUrl=''
  constructor(private activeRoute:ActivatedRoute,private service:BookService,private location:Location){
    console.log(activeRoute.snapshot.params)
    this._id=activeRoute.snapshot.params['_id'] ;
    this.bookDetails=service.books.filter(book=>book._id==this._id)
    console.log(this.bookDetails[0]);
  }
  
  goBack(){
    this.location.back()
  }

  setBiggerImagePath(path:string){
    this.initialImgUrl=path;
  }
}
