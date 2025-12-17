import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styles: [
  ]
})
export class MessagesComponent {
    constructor(private location:Location){}
     goBack(){
       this.location.back();
     }
}
