import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LoginComponent } from '../Component/login/login.component';
import { Device } from '../Types/Device';


@Injectable({
  providedIn: 'root'
})
export class DeviceService {
 url:string = "http://localhost:51108/api";

  constructor(private http: HttpClient,
    private lc : LoginComponent) { }

  // getByID(device : any) : Observable<any> {
  //   return this.http.get(this.url + "/AddDevice", device).pipe(map((response: any) => {return response}),
  //   catchError(this.handleError));
  // }
  updateDeviceDetails(device: FormData):Observable<Device>
  {
    const header = new HttpHeaders;
    header.append('Content-Type', 'application/json');
    const options = {headers: header};
    return this.http.put<Device>(this.url+"/EditDevices",device).pipe(map((response: any) => {return response}),
    catchError(this.handleError));
  }

  GetDevices() : Observable<any>
  {
    console.log(this.lc.userID);

    return this.http.get<Device[]>(this.url+"/ViewDevices/GetDevice/"+ this.lc.userID
    ).pipe(map((response: any) => {return response}),
    catchError(this.handleError));
   
  }
 
  GetReport() : Observable<any>
  {
    return this.http.get<Device[]>(this.url+"/EarningReport/"+ this.lc.userID
    ).pipe(map((response) => {return response as Device[];}),
    catchError(this.handleError));

  }

  getOverDueDevices() : Observable<any>
  {
    return this.http.get<any>(this.url+"/OverDue").pipe(map((response: any) => {return response}),
    catchError(this.handleError));
  }

  getOverDueDetails(req : any) : Observable<any>
  {
    return this.http.get<any>(this.url+"/OverDue", req).pipe(map((response: any) => {return response}),
    catchError(this.handleError));
  }


  // GetUser() : Observable<any>
  // {
  //   return this.http.get<User>(this.url+"/ViewDevices/GetUser"+  window.localStorage.getItem("UserId")
  //   ).pipe(map((response: any) => {return response}),
  //   catchError(this.handleError));

  // }

  addDeviceDetails(device: FormData):Observable<any>
  {
    const header = new HttpHeaders;
    header.append('Content-Type', 'application/json');
    const options = {headers: header};
    return this.http.post<Device>(this.url+"/AddDevice",device).pipe(map((response: any) => {return response}),
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
