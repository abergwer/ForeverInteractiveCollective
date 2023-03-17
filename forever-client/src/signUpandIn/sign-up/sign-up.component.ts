import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  @ViewChild('myForm') myForm: NgForm;

  constructor(private http: HttpClient, private router: Router){}
  first_name : string ;
  last_name : string ;
  user_name : string;
  email : string;
  password : string;

  signUp(){
    let obj = {
      firstName : this.first_name,
      lastName : this.last_name,
      userName : this.user_name,
      email : this.email,
      password : this.password
    }
    this.myForm.reset();
    console.log(obj);
    this.postData(obj);
    this.router.navigate(['/signIn']);
  }

  postData(data: any){
    return this.http.post('/api/signUp', data);
  }
}