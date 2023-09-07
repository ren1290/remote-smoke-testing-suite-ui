import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private baseUrl = 'http://localhost:8080'; 

  constructor(private http: HttpClient) {}

  submitFormData(formData: any): Observable<any> {
    const apiUrl = `${this.baseUrl}/submit`; 
    return this.http.post(apiUrl, formData);
  }
}
