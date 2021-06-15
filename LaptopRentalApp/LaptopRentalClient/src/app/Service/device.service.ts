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


  updateDeviceDetails(device: { ImeiNumber: any; DeviceName: any; DeviceSpecification: any; PreInstalledSoftware: any; UploadDeviceImage: any; RentalAmountMonth: any; MaximumRentalMonths: any; Interest: any; }):Observable<Device>
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
}
