import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRegister } from '../../Models/user-register';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:3000";
  
  login_user(email: string, password: string):Observable<any> {
    return this.http.post(this.url + '/login', {email: email, password: password});
  }

  register_user(userRegister: UserRegister):Observable<any> {
    return this.http.post(this.url + '/register', userRegister);
  }

}
