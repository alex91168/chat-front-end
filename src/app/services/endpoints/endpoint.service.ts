import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin, UserRegister } from '../../Models/User';

@Injectable({
  providedIn: 'root',
})
export class EndpointService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:3000";

  options: object = {
    headers: new HttpHeaders(),
    withCredentials : true
  }

  authenticator_user():Observable<any> {
    return this.http.get<any>(this.url + '/auth/isUserAuth', this.options);
  }
  
  authenticator_validEmail():  Observable<any> {
    return this.http.get(this.url + '/auth/authenticate', this.options)
  }
  
  valid_authenticator_user(token: string):  Observable<any> {
    return this.http.put<any>( `/api/auth/authenticate/${token}`, this.options);
  }

  request_new_email_token(): Observable<any> {
    return this.http.get(this.url + '/auth/request-new-token', this.options);
  }
  
  login_user(userDetails: UserLogin):Observable<any> {
    return this.http.post(this.url + '/login', userDetails, this.options );
  }

  register_user(userRegister: UserRegister):Observable<any> {
    return this.http.post(this.url + '/create', userRegister, this.options);
  }

  logout_user():Observable<any> {
    return this.http.post('/api/logout', this.options);
  }

}
