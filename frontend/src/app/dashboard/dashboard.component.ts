import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
   constructor(private  user:UserService,private auth:AuthService,private router:Router){}

   userDetails:any;

   ngOnInit(){
       this.user.getUserDetails().subscribe((data)=>{
          this.userDetails=data;
           
       })
   }

   logOut(){
      this.auth.logout();
      this.router.navigateByUrl('/login')
       
   }
}
