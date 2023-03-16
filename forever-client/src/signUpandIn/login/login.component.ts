import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private http: HttpClient){}
  name : string ;
  email : string;
  password : string;

  signUp(){
    let obj = {
      name : this.name,
      email : this.email,
      password : this.password
    }
    this.postData(obj);
  }

  postData(data: any){
    return this.http.post('/api/signUp', data);
  }
}
