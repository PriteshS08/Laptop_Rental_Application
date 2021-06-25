
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceService } from 'src/app/Service/device.service';
import { Device } from 'src/app/Types/Device';


@Component({
  selector: 'app-view-devices',
  templateUrl: './view-devices.component.html',
  styleUrls: ['./view-devices.component.css']
})
export class ViewDevicesComponent implements OnInit {

  devicelist:any[]=[];

  constructor(private device: DeviceService,private route:Router) { }

  ngOnInit(): void {
    this.device.GetDevices().subscribe((res:Device[])=>this.devicelist=res,
    error=>{alert('Error in fetching data')});
  // console.log(this.devicelist);
  // console.log(window.localStorage.getItem("UserId"));
  }
  editdevice(id : number){
    window.localStorage.setItem('deviceID',JSON.stringify(id));
    console.log(id);
    this.route.navigate(['/editdevice']);
  }
  deletedevice(imeinumber : any){
    console.log(imeinumber);

    this.device.deleteDevice(imeinumber).subscribe(response=>{
      alert('Successfully deleted');
      window.location.reload();
    },
  error=>{alert('failed to delete data')});
  }
}





