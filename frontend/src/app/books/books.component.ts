import { Component } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
   category:String="All Categories";
   sorting:String="Recently Added";
   categoryList=[
    "All Categories",
  "Fiction",
  "Sci-Fi",
  "Self-Help",
  "Drama",
  "Biography",
  "Programming",
  "Novel",
  "Comics",
  "Education",
  "History",
  "Philosophy",
  "Romance",
  "Mystery",
  "Fantasy",
  "Motivation",
  "Children"
  ];
   sortOptions = [
  "Recently Added",
  "Oldest First",
  "Title (A–Z)",
  "Title (Z–A)",
  "Author (A–Z)",
  "Author (Z–A)",
  "Price (Low to High)",
  "Price (High to Low)",
  "Rent (Low to High)",
  "Rent (High to Low)",
  "Available First",
  "Borrowed First",
  "Category (A–Z)"
   ];

   constructor(public service:BookService){}
}
