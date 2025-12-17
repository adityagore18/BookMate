import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styles: [
  ]
})
export class AddBookComponent {
   
   addBookForm:FormGroup;
   filePath= "\\assets\\images\\file-arrow-up-solid-full.svg";
   myfile:any='';
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
  fileList:any=''
  isClick=false;
  fileUrls:string[]=[];
   constructor(private fb:FormBuilder,private bookService:BookService){
      this.addBookForm=fb.group({
         
        title:['',Validators.required],
        author:['',Validators.required],
        category:['',Validators.required],
        description:['',Validators.required],
        status:['Available'],
        
        rentPerMonth:[0,Validators.required],
        price:[0,Validators.required]
      })
  }
   getPhoto(){
      this.isClick=true;
      this.myfile=document.getElementById('myFile') ;
      this.fileList=this.myfile.files as File[];
      for(let f of this.fileList){
        this.fileUrls.push(URL.createObjectURL(f));
      }
       
   }

   onSubmit(){
    alert(this.addBookForm.value.title)
    if(this.addBookForm.valid){
      console.log(this.addBookForm.value)
       const myForm=new FormData();
       myForm.append('title',this.addBookForm.value.title);
       myForm.append('author',this.addBookForm.value.author);
       myForm.append('category',this.addBookForm.value.category);
       myForm.append('description',this.addBookForm.value.description);
       myForm.append('status',this.addBookForm.value.status);
       myForm.append('rentPerMonth',this.addBookForm.value.rentPerMonth);
       myForm.append('price',this.addBookForm.value.price);
       for (let file of this.fileList) {
          myForm.append("coverImagePaths", file);
        }
       try{
         this.bookService.addBook(myForm).subscribe((data)=>{
          alert("Succesfully Your Book Added to youe Book-list ,title: "+myForm.get('title'));
          console.log(data)
        })
       }catch(err){
        alert('failed to add');
        console.log(err);
       }
       this.addBookForm.reset();
       
    }
   }
    
}
