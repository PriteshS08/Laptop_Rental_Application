import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../Types/User';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  url : string = "http://localhost:51108/api/signup";
  constructor(private http : HttpClient) { }

  AddUserDetails(obj: { name: any; gender: any; dob: any; age: any; location: any; phoneno: any;  idProof: FormData; idno: any; email: any; password: any; }): Observable <User> {  
    return this.http.post < User > (this.url , obj).pipe(
      catchError(this.handleError));
  }  
  handleError(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      
      errorMessage = error.error.message;
    } else {
   
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}

