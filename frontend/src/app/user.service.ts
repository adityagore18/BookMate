import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUserDetails(){
      return this.http.get('http://localhost:3000/profile');
  }

  updateProfile(id:string,record:any){
    return this.http.put('http://localhost:3000/profile/'+id,record);
  }
}
