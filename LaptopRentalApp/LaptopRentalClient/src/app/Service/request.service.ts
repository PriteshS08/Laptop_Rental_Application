import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { DeviceRequest } from '../Types/Request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  url : string ="http://localhost:51108/api/makerequest";
  flag : boolean = false;
  constructor(private http : HttpClient) { }
  getRequest(resquestID : number) : Observable<any>{
    return this.http.get<DeviceRequest>(this.url).pipe(map((res : any) => {return res}),
    catchError(this.handleError));
  }

  updateRequest(requestDetails : any) : Observable<any> {
    return this.http.post(this.url,requestDetails).pipe(map((response: any) => {return response}),
    catchError(this.handleError));
  }

  updateacceptStatus(obj: { DeviceId: number; Status: string; }) : Observable<any>
  {
    return this.http.put(this.url, status).pipe(map((response: any) => {return response}),
    catchError(this.handleError));
  }

  updaterejectStatus(deviceID: any) : Observable<any>
  {
    return this.http.delete(this.url, deviceID).pipe(map((response: any) => {return response}),
    catchError(this.handleError));
  }
  
  GetAllUsersRequest() : Observable<any>
  {
    return this.http.get(this.url+"/ViewRequest").pipe(map((response: any)=>{return response}),
    catchError(this.handleError));
  }

  GetRequestStatus() :Observable<any>
  {
    return this.http.get(this.url+"/RequestStatus").pipe(map((response: any)=>{return response}),
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
