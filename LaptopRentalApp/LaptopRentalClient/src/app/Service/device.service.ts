import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from '../Types/Device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
 url:string = "http://localhost:51108/api/EditDevices";
  constructor(private http: HttpClient) { }


  updateDeviceDetails(device: { ImeiNumber: any; DeviceName: any; DeviceSpecification: any; PreInstalledSoftware: any; UploadDeviceImage: any; RentalAmountMonth: any; MaximumRentalMonths: any; Interest: any; }):Observable<Device>
  {
   return this.http.put<Device>(this.url,device);
  }
}
 

