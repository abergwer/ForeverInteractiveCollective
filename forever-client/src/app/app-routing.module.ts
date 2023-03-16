import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from '../signUpandIn/sign-in/sign-in.component';
import { LoginComponent } from '../signUpandIn/login/login.component';

const routes: Routes = [
  {path : '', component : LoginComponent},
  {path : '/signIn', component : SignInComponent},
  {path: '/signUp', component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
