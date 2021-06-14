import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Types/User';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  url : string = "http://localhost:51108/api";
  constructor(private http : HttpClient) { }

  AddUserDetails(obj: { name: any; gender: any; dob: any; age: any; location: any; phoneno: any; idno: any;  email: any; password: any; }): Observable <User> {  
    let headers = new HttpHeaders();  
    headers.append('Content-Type', 'application/json');  
    const httpOptions = {  
        headers: headers  
    };  
    return this.http.post < User > (this.url + '/signup', obj, httpOptions);  
  }  
}
