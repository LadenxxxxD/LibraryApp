import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { LoginService } from './service/login.service';
import { DetailsService } from './service/details.service';
import { BooksComponent } from './books/books.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BooksService } from './service/books.service';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './guards/auth.guards';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DetailsComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [LoginService, DetailsService, BooksService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
