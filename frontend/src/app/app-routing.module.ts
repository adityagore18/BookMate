import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from './auth-guard.service';
import { FrontComponent } from './front/front.component';
import { AddBookComponent } from './dashboard/add-book/add-book.component';
import { MessagesComponent } from './dashboard/messages/messages.component';
import { MyLibraryComponent } from './dashboard/my-library/my-library.component';
import { IncomingRequestComponent } from './incoming-request/incoming-request.component';
import { BorrowRequestComponent } from './borrow-request/borrow-request.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { RequestSucessComponent } from './dashboard/request-sucess/request-sucess.component';
const routes: Routes = [
  {
    path:'',
    component:FrontComponent,
    pathMatch:'full'
  },{
    path:'login',
    component:LoginComponent
  },{
    path:'signup',
    component:RegisterComponent
  },{
    path:'book-details/:_id',
    component:BookDetailsComponent,
    canActivate:[AuthGuardService],
  },{
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[AuthGuardService],
    children:[{
      path:'books',
      component:BooksComponent,

    },
    {
      path:'book-details/:_id',
      component:BookDetailsComponent
    },{
      path:'add-book',
      component:AddBookComponent
    },{
      path:'messages',
      component:MessagesComponent,
      children:[
      {
        path:'incoming-requests',
        component:IncomingRequestComponent,
        pathMatch:'prefix'
      },{
        path:'borrow-requests',
        component:BorrowRequestComponent
      } ,
      { path: '', redirectTo: 'incoming-requests', pathMatch: 'full' }
    ]
    },{
      path:'my-library',
      component:MyLibraryComponent
    },{
        path:'request-success/:id',
        component:RequestSucessComponent,
      },{
      path: '', redirectTo: 'books', pathMatch: 'full' 
    }
  ]
  },
  {
    path:'settings',
    component:SettingsComponent,
     canActivate:[AuthGuardService],
    children:[{
      path:'profile',
      component:ProfileComponent
    },
      {
      path:'books',
      component:BooksComponent,

    },
    {
      path:'book-details/:_id',
      component:BookDetailsComponent
    },{
      path:'add-book',
      component:AddBookComponent
    },{
      path:'messages',
      component:MessagesComponent,
      children:[
      {
        path:'incoming-requests',
        component:IncomingRequestComponent,
        pathMatch:'prefix'
      },{
        path:'borrow-requests',
        component:BorrowRequestComponent
      } ,
      { path: '', redirectTo: 'incoming-requests', pathMatch: 'full' }
    ]
    },{
      path:'my-library',
      component:MyLibraryComponent
    },{
      path: '', redirectTo: 'profile', pathMatch: 'full' 
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
