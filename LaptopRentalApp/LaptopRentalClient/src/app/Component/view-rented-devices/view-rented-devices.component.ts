import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/Service/device.service';

@Component({
  selector: 'app-view-rented-devices',
  templateUrl: './view-rented-devices.component.html',
  styleUrls: ['./view-rented-devices.component.css']
})
export class ViewRentedDevicesComponent implements OnInit {
  getAllRequest : any[]=[];
  

  constructor(private ds : DeviceService) {
    this.ds.getrentedDevice().subscribe(result=>{this.getAllRequest=result;
      
    console.log(this.getAllRequest);
  });
   }

  ngOnInit(): void {
  }

}

