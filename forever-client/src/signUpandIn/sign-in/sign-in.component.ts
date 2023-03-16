import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  constructor(private http: HttpClient) {}
  email: string;
  password: string;

  signIn() {
    let obj = {
      email: this.email,
      password: this.password,
    };
    this.http.post('http://localhost:4000/signin', obj).subscribe((res) => {
      console.log(res);
    });
  }
}
