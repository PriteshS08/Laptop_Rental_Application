import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceService } from 'src/app/Service/device.service';

@Component({
  selector: 'app-view-rented-devices',
  templateUrl: './view-rented-devices.component.html',
  styleUrls: ['./view-rented-devices.component.css']
})
export class ViewRentedDevicesComponent implements OnInit {
  getAllRequest : any[]=[];
  constructor(private ds : DeviceService , private route : Router) {
    this.ds.getrentedDevice().subscribe(result=>{this.getAllRequest=result;
    console.log(this.getAllRequest);
  });
   }

  ngOnInit(): void {
  }
  viewDetails(requestID : number,requeststatus :string) {
    window.localStorage.setItem('requestID',JSON.stringify(requestID));
    window.localStorage.setItem('requeststatus',JSON.stringify(requeststatus));
  }

}

