import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
      loginForm:FormGroup;
      constructor(private fb:FormBuilder,private auth:AuthService,private router:Router){
        this.loginForm=this.fb.group({
          email:['',Validators.required],
          password:['',Validators.required]
        })
      }
      errorMsg:any='';
      onSubmit(){
        console.log(this.loginForm.value)
        this.auth.doLogin(this.loginForm.value).subscribe((data)=>{
          console.log(Object.keys( data).length);
          if(Object.keys( data).length===1){
              this.errorMsg=data;
          }else{
            this.errorMsg=data;
          console.log(this.errorMsg.token)
          this.auth.storeToken(this.errorMsg.token);
          this.router.navigateByUrl('/dashboard')
          }
          
            
        })
      }
}
