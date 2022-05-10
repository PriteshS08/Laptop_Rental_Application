
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
    this.device.GetDevices().subscribe((res: any[])=>{this.devicelist=res;
      
    console.log(res)},
    error=>{alert('Error in fetching data')});
    for(var id in this.devicelist)
    {
      window.localStorage.setItem('deviceList',JSON.stringify(id));
    }
   
  // console.log(this.devicelist);
  // console.log(window.localStorage.getItem("UserId"));
  }
  editdevice(id : any){
    window.localStorage.setItem('deviceID',JSON.stringify(id));
    console.log(id);
    this.route.navigate(['/editdevice',id]);
  }
  deletedevice(id :number){
    window.localStorage.setItem('deviceId',JSON.stringify(id));
    this.device.deleteDevice().subscribe(response=>{
      alert('Successfully deleted');
     // window.location.reload();
    // this.route.navigate(['/viewdevice'])
    this.route.navigate([this.route.url]);
    },
  error=>{alert('failed to delete data')});
  }
}





