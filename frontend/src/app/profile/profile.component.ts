import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [
  ]
})
export class ProfileComponent {
  userDetails:any;
  profileForm:FormGroup;
  profileUrl='';
  imageFile:any;
   constructor(private userService:UserService,private fb:FormBuilder  ) {
       userService.getUserDetails().subscribe(data=>{
               this.userDetails=data;
               console.log(this.userDetails);
       })
       this.profileForm=fb.group({
        phone:['',Validators.required],
        address:['',Validators.required]
       })
   }

   onSubmit(){
      if(this.profileForm.valid){
        const formData=new FormData();
        formData.append('phone',this.profileForm.value.phone);
        formData.append('address',this.profileForm.value.address);
        formData.append('profileImage',this.imageFile);
        this.userService.updateProfile(this.userDetails._id,formData).subscribe((data)=>{
          console.log(data);
        })
        alert('Data save successfully !!');
        this.profileForm.reset();
       
      }
   }

   getFile(event:any){
    this.imageFile=event.target.files[0] as File;
    this.profileUrl=URL.createObjectURL(this.imageFile);
    console.log(event)
   }
}
