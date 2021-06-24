import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, ViewChild } from '@angular/core';
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
 userID! : number;

  constructor(private http: HttpClient
    ) { }

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
    const json=window.localStorage.getItem('user') as string;
    console.log('json', json);
    const user=JSON.parse(json);
    return this.http.get<Device[]>(this.url+"/ViewDevices/GetDevice/" + user.UserId
    ).pipe(map((response) => {return response as Device[];}),
    catchError(this.handleError));
   
  }
 
  GetReport() : Observable<any>
  {
    const json=window.localStorage.getItem('user') as string;
    console.log('json', json);
    const user=JSON.parse(json);

    return this.http.get<Device[]>(this.url+"/EarningReport/" + user.UserId
    ).pipe(map((response) => {return response as Device[];}),
    catchError(this.handleError));

  }
  deleteDevice(deviceId : any) :Observable<any>
  {
    const json=window.localStorage.getItem('user') as string;
    console.log('json', json);
    const user=JSON.parse(json);
    console.log(deviceId);
    return this.http.delete(this.url+"/DeleteDevice/"+deviceId).pipe(map((response: any) => {return response}),
    catchError(this.handleError));

  }

  getOverDueDevices() : Observable<any>
  {
    return this.http.get<any>(this.url+"/OverDue/GetAllOverDue").pipe(
    catchError(this.handleError));
  }

  getOverDueDetails(req : any) : Observable<any>
  {
    return this.http.get<any>(this.url+"/OverDue/GetByDeviceID", req).pipe(
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

  getrentedDevice() :Observable<any>{
    const json=window.localStorage.getItem('user') as string;
    console.log('json', json);
    const user=JSON.parse(json);
    return this.http.get(this.url+"/RentedDevices/"+user.UserId).pipe(map((response: any) => {return response}),
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
