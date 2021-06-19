import { Component, Injectable, OnInit } from '@angular/core';
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

  constructor(private device: Devices) { }

  ngOnInit(): void {
    this.device.GetDevices().subscribe((Response:Device[])=>this.devicelist=Response,
    error=>{alert('Error in fetching data')});
  console.log(this.devicelist);
  console.log(window.localStorage.getItem("UserId"));
  }


}