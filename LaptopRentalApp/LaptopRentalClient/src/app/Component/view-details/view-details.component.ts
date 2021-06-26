import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserCatalogService } from 'src/app/Service/browser-catalog.service';
import { Device } from 'src/app/Types/Device';
import { User } from 'src/app/Types/User';


@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  deviceDetails!:any;
 deviceID! : number;
 userDetails! : User;
  constructor(
    private bs : BrowserCatalogService,
    private router : Router) { 
    const json=window.localStorage.getItem('user') as string;
    console.log('json', json);
    const user=JSON.parse(json);
      // this.deviceDetails = this.bc.devicedetail;
      this.userDetails = user;
      // console.log(this.deviceDetails);
    const json1 = window.localStorage.getItem('imeiNO') as string;
    console.log('json1', json1);
    const imeiNO=JSON.parse(json1);
    this.bs.getDeviceByImeiNo(imeiNO).subscribe((res)=>{this.deviceDetails=res;
      console.log("Device obj : ",this.deviceDetails);
      window.localStorage.setItem('deviceID',JSON.stringify(res.DeviceId_FK));},
        error=>{alert('Error in fetching data')});
    }

  ngOnInit(): void {
  }
  makeRequest(Did :number) {
    window.localStorage.setItem('Did',JSON.stringify(Did));
    this.router.navigate(['/makerequest']);
  }

  viewfeedback(did :number) {
    window.localStorage.setItem('did',JSON.stringify(did));
    this.router.navigate(['/viewfeed']);
  }

}
