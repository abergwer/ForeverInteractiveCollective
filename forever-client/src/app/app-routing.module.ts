import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from '../signUpandIn/sign-in/sign-in.component';
import { SignUpComponent } from '../signUpandIn/sign-up/sign-up.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { StoryComponent } from './story/story.component';

const routes: Routes = [
  {path : '', component : MainScreenComponent },
  {path : 'signIn', component : SignInComponent},
  {path: 'signUp', component : SignUpComponent},
  {path: 'story', component : StoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
