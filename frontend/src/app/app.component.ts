import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  constructor(private auth:AuthService){

  }
  isnav=true;
  ngOnInit(){
    if(this.auth.isLoggedin()){
      this.isnav=false
    }
  }
}
