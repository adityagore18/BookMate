import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { NavComponent } from './componentss/nav/nav.component';
import { BooksComponent } from './books/books.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptorService } from './token-interceptor.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FrontComponent } from './front/front.component';
import { AddBookComponent } from './dashboard/add-book/add-book.component';
import { MyLibraryComponent } from './dashboard/my-library/my-library.component';
import { MessagesComponent } from './dashboard/messages/messages.component';
import { BorrowRequestComponent } from './borrow-request/borrow-request.component';
import { IncomingRequestComponent } from './incoming-request/incoming-request.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { RequestSucessComponent } from './dashboard/request-sucess/request-sucess.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BooksComponent,
    LoginComponent,
    RegisterComponent,
    BookDetailsComponent,
    DashboardComponent,
  
    FrontComponent,
       AddBookComponent,
       MyLibraryComponent,
       MessagesComponent,
       BorrowRequestComponent,
       IncomingRequestComponent,
       SettingsComponent,
       ProfileComponent,
       RequestSucessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
