import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm:FormGroup;
  cpassword="";
  isTermSOk=false
   constructor(private auth:AuthService,private fb:FormBuilder){
    this.registerForm=this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],

    })
   }
   errorMsg=""
   successMsg=""
    

   onSubmit(){
    if(this.cpassword!==this.registerForm.value.password){
        this.errorMsg="Confirm Password should match with Password field";
        return;
    }
    if(this.registerForm.valid){
      console.log(this.registerForm.value);
      this.successMsg="Registered Succssfully !! Plz. Continue to Login.."
      this.auth.doRegistration(this.registerForm.value).subscribe((data)=>{
        console.log(data);
      })
      this.errorMsg="";
      this.registerForm.reset();
      this.cpassword="";
    }
   }


}
