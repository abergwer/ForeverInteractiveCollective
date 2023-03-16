import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  @ViewChild('myForm') myForm: NgForm;

  constructor(private http: HttpClient) {}
  first_name: string;
  last_name: string;
  user_name: string;
  email: string;
  password: string;

  signUp() {
    let obj = {
      firstName: this.first_name,
      lastName: this.last_name,
      userName: this.user_name,
      email: this.email,
      password: this.password,
    };
    this.myForm.reset();
    console.log(obj);
    this.http.post('http://localhost:4000/signup', obj).subscribe((res) => {
      console.log(res);
    });
  }

  postData(data: any) {
    return;
  }
}
