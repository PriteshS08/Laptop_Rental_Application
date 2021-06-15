import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Types/User';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  url : string = "http://localhost:51108/api/signup";
  constructor(private http : HttpClient) { }

  AddUserDetails(obj: { name: any; gender: any; dob: any; age: any; location: any; phoneno: any; idno: any; idProof: FormData; email: any; password: any; }): Observable <User> {  
    return this.http.post < User > (this.url , obj);  
  }  
}