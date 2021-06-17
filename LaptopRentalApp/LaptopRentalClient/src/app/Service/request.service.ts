import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  url : string ="http://localhost:51108/api/";
  flag : boolean = false;
  constructor(private http : HttpClient) { }

  updateRequest(requestDetails : any) : Observable<any> {
    return this.http.post(this.url,requestDetails).pipe(map((response: any) => {return response}),
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
