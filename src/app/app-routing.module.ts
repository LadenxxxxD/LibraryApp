import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { BooksComponent } from './books/books.component';
import { AuthGuard } from './guards/auth.guards';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: '', canActivate: [AuthGuard],
    children: [
      {path: 'details', component: DetailsComponent},
      {path: 'books', component: BooksComponent}
    ]
  }
  // {path: 'details', component: DetailsComponent}
  // {path: 'books', component: BooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
