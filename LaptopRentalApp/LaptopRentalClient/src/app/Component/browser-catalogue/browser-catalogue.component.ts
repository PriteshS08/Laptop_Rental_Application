import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserCatalogService } from 'src/app/Service/browser-catalog.service';
import { Device } from 'src/app/Types/Device';

@Component({
  selector: 'app-browser-catalogue',
  templateUrl: './browser-catalogue.component.html',
  styleUrls: ['./browser-catalogue.component.css']
})
export class BrowserCatalogueComponent implements OnInit {
  devicelist:Device[]=[];
  devicedetail! : Device;
  deviceID! : number;
  constructor(private bs : BrowserCatalogService,
    private router : Router) { }

  ngOnInit(): void {
    this.bs.getAllDevices().subscribe((Response:Device[])=>{this.devicelist=Response,
    console.log(Response)},
    error=>{alert('Error in fetching data')});
  }
  makeRequest() {
    this.router.navigate(['/makerequest']);
  }

  viewDetail(imeiNO : string) {
    this.router.navigate(['/viewdevice']);
    this.bs.getDeviceByImeiNo(imeiNO).subscribe((res)=>{this.devicedetail=res,
    this.deviceID = res.DeviceId},
    error=>{alert('Error in fetching data')});
  }

 

}
