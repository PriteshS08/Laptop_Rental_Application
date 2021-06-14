import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import {catchError, map, retry} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url : string = "http://localhost:51108/api";
  private isLoggedIn = new BehaviorSubject<boolean> (false);
  private CallMethodSource  = new Subject<any>();
  CallMethodSource$ = this.CallMethodSource.asObservable();
  SetAuthenticated() {
    this.CallMethodSource.next();
  }
  OnLoggedIn = this.isLoggedIn.asObservable();
  flag: any;
  constructor(private http : HttpClient, 
    private router: Router) { }
   isAuthenticated(status : boolean) {
     this.isLoggedIn.next(status);
   }

  Validate(userDetails: any) {
    return this.http.post(this.url+ "/login", userDetails).pipe(map((response) => {
      this.flag=response;
      console.log(this.flag);
  return response;
     }
     ),
      retry(1),
      catchError(this.handleError)
    )
  }

  get logout() {
    return this.http.get(this.url + '/logout')
        .pipe(map((response) => {
        
          return response}))
        
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