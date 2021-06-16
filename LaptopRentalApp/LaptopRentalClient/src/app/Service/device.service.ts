import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Device } from '../Types/Device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
 url:string = "http://localhost:51108/api";

  constructor(private http: HttpClient) { }


  updateDeviceDetails(device: Device):Observable<Device>
  {
   return this.http.put<Device>(this.url+"/EditDevices",device).pipe(
    catchError(this.handleError));
  }

  GetDevices()
  {
    return this.http.get<Device[]>(this.url+"/ViewDevices").pipe(
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
  addDeviceDetails(device: Device):Observable<Device>
  {
    return this.http.post<Device>(this.url+"/AddDevice",device);
  }

}
