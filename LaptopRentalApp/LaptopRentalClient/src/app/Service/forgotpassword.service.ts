import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ForgotpasswordService {
  url:string= "http://localhost:51108/api/ForgotPassword/";

  
  constructor(private http: HttpClient) { }

  UpdatePassword(comp: { userid : number; password: string;}) : Observable<any>{
    return this.http.put(this.url + comp.userid ,comp.password).pipe((response => {return response}),
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

