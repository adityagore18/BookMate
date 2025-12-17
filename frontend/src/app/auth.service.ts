import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http:HttpClient) { }

  urlLogin="http://localhost:3000/login";
  urlRegister="http://localhost:3000/register";

  doRegistration(data:any){
     return this.http.post(this.urlRegister,data);
  }

  doLogin(data:any){
    return this.http.post(this.urlLogin,data);
  }

  


  storeToken(token:string){
    localStorage.setItem('token',token);
  }

  getToken(){
     return localStorage.getItem("token");
  }

  isLoggedin(){
    return !!localStorage.getItem("token");
  }

    logout() {
    localStorage.removeItem("token");
  }

}