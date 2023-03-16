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
  age : number;
  password : string;

  signUp(){
    let obj = {
      name : this.name,
      email : this.email,
      age : this.age,
      password : this.password
    }
    this.postData(obj);
  }

  postData(data: any){
    return this.http.post('/api/signUp', data);
  }
}
