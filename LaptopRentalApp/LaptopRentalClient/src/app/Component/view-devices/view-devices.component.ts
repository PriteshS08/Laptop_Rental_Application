import { Component, Injectable, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/Service/device.service';
import { Device } from 'src/app/Types/Device';

@Injectable({ 
  providedIn: 'root'
 })

@Component({
  selector: 'app-view-devices',
  templateUrl: './view-devices.component.html',
  styleUrls: ['./view-devices.component.css']
})
export class ViewDevicesComponent implements OnInit {

  devicelist:Device[]=[];

  constructor(private device: DeviceService) { }

  ngOnInit(): void {
    this.device.GetDevices().subscribe((res:Device[])=>this.devicelist=res,
    error=>{alert('Error in fetching data')});
  // console.log(this.devicelist);
  // console.log(window.localStorage.getItem("UserId"));
  }


}

