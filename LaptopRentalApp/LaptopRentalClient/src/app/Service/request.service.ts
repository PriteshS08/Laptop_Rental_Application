import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { DeviceRequest } from '../Types/Request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  url : string ="http://localhost:51108/api";
  flag : boolean = false;
  constructor(private http : HttpClient) { }
  getRequest(resquestID : number) : Observable<any>{
    return this.http.get<DeviceRequest>(this.url+ "/MakeRequest").pipe(map((res : any) => {return res}),
    catchError(this.handleError));
  }

  updateRequest(requestDetails : any) : Observable<any> {
    return this.http.post(this.url+"/MakeRequest/AddRequest",requestDetails).pipe(map((response: any) => {return response}),
    catchError(this.handleError));
  }

  updateacceptStatus(obj: { DeviceId: number; Status: string; }) : Observable<any>
  {
    return this.http.put(this.url+ "/MakeRequest", status).pipe(map((response: any) => {return response}),
    catchError(this.handleError));
  }

  updaterejectStatus(deviceID: any) : Observable<any>
  {
    return this.http.delete(this.url+"/MakeRequest", deviceID).pipe(map((response: any) => {return response}),
    catchError(this.handleError));
  }
  
  GetAllUsersRequest() : Observable<any>
  {
    return this.http.get(this.url+"/ViewRequest/GetRequest").pipe(map((response: any)=>{return response}),
    catchError(this.handleError));
  }

  GetRequestStatus() :Observable<any>
  {
    const json=window.localStorage.getItem('user') as string;
    console.log('json', json);
    const user=JSON.parse(json);
    return this.http.get(this.url+"/RequestStatus/GetRequest/"+user.UserId).pipe(
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
