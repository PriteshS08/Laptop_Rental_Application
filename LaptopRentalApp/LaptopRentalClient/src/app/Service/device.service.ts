import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LoginComponent } from '../Component/login/login.component';
import { Device } from '../Types/Device';
import { User } from '../Types/User';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
 url:string = "http://localhost:51108/api";

  constructor(private http: HttpClient,
    private lc : LoginComponent) { }


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
      var x=window.sessionStorage.getItem("UserId")
      console.log(x);
    return this.http.get<Device[]>(this.url+"/ViewDevices/GetDevice/"+  x
    ).pipe(map((response: any) => {return response}),
    catchError(this.handleError));

  }

  // GetUser() : Observable<any>
  // {
  //   return this.http.get<User>(this.url+"/ViewDevices/GetUser"+  window.localStorage.getItem("UserId")
  //   ).pipe(map((response: any) => {return response}),
  //   catchError(this.handleError));

  // }
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
  addDeviceDetails(device: FormData):Observable<Device>
  {
    const header = new HttpHeaders;
    header.append('Content-Type', 'application/json');
    const options = {headers: header};
    return this.http.post<Device>(this.url+"/AddDevice",device).pipe(map((response: any) => {return response}),
    catchError(this.handleError));
  }

}
