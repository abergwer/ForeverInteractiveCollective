import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  constructor(private http: HttpClient, private router: Router){}
  email : string;
  password : string;

  signIn(){
    let obj = {
      email : this.email,
      password : this.password
    }
    this.postData(obj);

    this.router.navigate(['']);
  }

  postData(data: any){
    return this.http.post('/api/signIn', data);
  }
}
