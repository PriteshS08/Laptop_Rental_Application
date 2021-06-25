import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Device } from '../Types/Device';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  url : string ="http://localhost:51108/api/Feedback";
  constructor(private http : HttpClient) { }
  
  Ratingsubmission(ratingssubmission : any) :Observable<any>  {
    return this.http.post(this.url,ratingssubmission).pipe(map((response: any) => {return response}),
    catchError(this.handleError));
  }

  getAllDevices() : Observable<any>
  {
    const json=window.localStorage.getItem('user') as string;
    console.log('json', json);
    const user=JSON.parse(json);
    return this.http.get<Device[]>(this.url+"/GetByDeviceById/"+user.UserId).pipe(map((response) =>{
      console.log(response);
      return response as Device[];} ),
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
