import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:3000/';

  constructor(private http:HttpClient) { }

  login(data:any):Observable<any>{
    return this.http.post(this.baseUrl+'api/user/login',data, {
      //headers:this.httpHeaders
    });
  }

  public isAuthenticated(): boolean {
    return this.getToken() !== null;
  }
  
  
  getToken() {
    let accessToken = localStorage.getItem('accessToken');
    if (accessToken != null) {
      return accessToken;
    }
    return null;
  } 
}
