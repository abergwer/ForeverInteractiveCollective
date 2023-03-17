import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SignInComponent } from '../signUpandIn/sign-in/sign-in.component';
import { SignUpComponent } from '../signUpandIn/sign-up/sign-up.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { WhoAreWeComponent } from './home/who-are-we/who-are-we.component';
import { ImagesStatusComponent } from './home/images-status/images-status.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { StoryComponent } from './story/story.component';
import { TrendingStoriesComponent } from './home/trending-stories/trending-stories.component';
import { TogetherComponent } from './home/together/together.component';
import { MainScreenComponent } from './main-screen/main-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    NavbarComponent,
    HomeComponent,
    ImagesStatusComponent,
    WhoAreWeComponent,
    StoryComponent,
    TrendingStoriesComponent,
    TogetherComponent,
    MainScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
