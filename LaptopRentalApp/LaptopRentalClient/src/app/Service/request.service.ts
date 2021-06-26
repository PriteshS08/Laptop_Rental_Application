import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { DeviceRequest, GetAllRequest } from '../Types/Request';

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

  updateRequest(requestDetails : DeviceRequest) : Observable<any> {
    console.log(requestDetails);
    return this.http.post(this.url+"/MakeRequest/AddRequest",requestDetails).pipe(map((response: any) => {return response}),
    catchError(this.handleError));
  }

  updateacceptStatus(DeviceId: number) : Observable<any>
  {
    return this.http.put(this.url+ "/AcceptReject/Accept", DeviceId).pipe(map((response: any) => {return response}),
    catchError(this.handleError));
  }

  updaterejectStatus(deviceID: any) : Observable<any>
  {
    return this.http.delete(this.url+"/AcceptReject/Reject", deviceID).pipe(map((response: any) => {return response}),
    catchError(this.handleError));
  }
  
  GetAllUsersRequest(id :any) : Observable<any>
  {
    return this.http.get(this.url+"/ViewRequest/GetRequest/"+id).pipe(map((response: any)=>{return response}),
    catchError(this.handleError));
  }

  GetAllreq() :Observable<any>
  {
    const json=window.localStorage.getItem('user') as string;
    console.log('json', json);
    const user=JSON.parse(json);
    return this.http.get<GetAllRequest[]>(this.url+"/ViewRequest/GetRequest/"+user.UserId).pipe(map((response) =>{
      console.log(response);
      return response as GetAllRequest[];} ),
      catchError(this.handleError));
  }

  GetSingleUserRequest(requestId : number) : Observable<any>
  {
    return this.http.get(this.url+"/ViewRequest/GetUsersRequest/"+requestId).pipe( catchError(this.handleError));
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
