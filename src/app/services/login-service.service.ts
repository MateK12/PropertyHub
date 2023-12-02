import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  baseURL: string = ''
  constructor(private http: HttpClient) {

    this.baseURL = "http://localhost:3100";
  }


  SingIn(user: any): Observable<any> {
    return this.http.post(`${this.baseURL}/signIn`, user);
  }
  CreateLease(lease: any): Observable<any> {
    return this.http.post(`${this.baseURL}/createLease`, lease)
  }
  GetLeases(id: any): Observable<any> {
    return this.http.get(`${this.baseURL}/getLeases/${id}`)
  }
}
