import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/Service/device.service';
import { Device } from 'src/app/Types/Device';

@Component({
  selector: 'app-view-devices',
  templateUrl: './view-devices.component.html',
  styleUrls: ['./view-devices.component.css']
})
export class ViewDevicesComponent implements OnInit {

  devicelist:Device[]=[];

  constructor(private device:DeviceService) { }

  ngOnInit(): void {
    this.device.GetDevices().subscribe((Response:Device[])=>this.devicelist=Response,
    error=>{alert('Error in fetching data')});
  console.log(this.devicelist);
  }

}