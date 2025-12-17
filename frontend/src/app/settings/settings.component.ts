import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styles: [
  ]
})
export class SettingsComponent {
  constructor(private  user:UserService,private auth:AuthService,private router:Router){}
  
     userDetails:any;
  
     ngOnInit(){
         this.user.getUserDetails().subscribe((data)=>{
            this.userDetails=data;
             
         })
     }
  
     logOut(){
        this.auth.logout();
        this.router.navigateByUrl('/login');
         
     }
}
