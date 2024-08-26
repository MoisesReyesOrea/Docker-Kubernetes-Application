import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //private readonly url = "http://localhost:3000";
  private readonly url = "http://localhost:5166/access";

  constructor(private http: HttpClient) { }

  // login
  sendCredentials(email: string, password: string): Observable<any> {
    const body = {
      email,
      password
    }
    return this.http.post<any>(`${this.url}/login`, body)
  }

  // signup
  sendSignup(name:string, lastName:string, email: string, password: string, age:number): Observable<any> {
    const body = {
      name,
      lastName,
      email,
      password,
      age,
    }
    return this.http.post<any>(`${this.url}/signup`, body)
  }
}
