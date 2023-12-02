import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  baseURL: string = ''
  constructor(private http: HttpClient) {

    this.baseURL = "http://localhost:3100";
  }
  DeleteLease(id: any): Observable<any> {
    return this.http.delete(`${this.baseURL}/deleteLease/${id}`)
  }
  EditLease(id: any, leaseModel: any): Observable<any> {
    return this.http.put(`${this.baseURL}/EditLease/${id}`, leaseModel)
  }
}
