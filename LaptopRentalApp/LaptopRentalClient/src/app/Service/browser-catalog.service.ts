import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Device } from '../Types/Device';

@Injectable({
  providedIn: 'root'
})
export class BrowserCatalogService {
  url:string = "http://localhost:51108/api/catalogue";
  deviceDetails:Device[]=[];
  devicedetail! : Device;
  constructor(private http:HttpClient) { }
  getAllDevices() : Observable<any>
  {
    return this.http.get<Device[]>(this.url).pipe(map((response) =>{return response as Device[];} ),
      catchError(this.handleError));
  }

  getDeviceByImeiNo(imeiNO : string) : Observable<any>
  {
    return this.http.get<Device>(this.url + imeiNO).pipe(map((response) => {this.devicedetail = response}),
    catchError(this.handleError));
  }

  getDeviceByID(deviceID : number) : Observable<any>
  {
    return this.http.get<Device>(this.url + deviceID).pipe(map((response) => {this.devicedetail = response}),
    catchError(this.handleError));
  }

  handleError(error:any) {
    let errorMessage = '';
    console.log(error);
    if(error.error instanceof ErrorEvent) {
      
      errorMessage = error.error.message;
    } else {
   
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;

    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
