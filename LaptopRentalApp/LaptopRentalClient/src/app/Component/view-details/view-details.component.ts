import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserCatalogService } from 'src/app/Service/browser-catalog.service';
import { Device } from 'src/app/Types/Device';
import { BrowserCatalogueComponent } from '../browser-catalogue/browser-catalogue.component';

@Injectable({ 
  providedIn: 'root'
 })

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  deviceDetails!:Device;
 deviceID! : number;
  constructor(private bc : BrowserCatalogueComponent,
    private bs : BrowserCatalogService,
    private router : Router) { 
      // this.deviceDetails = this.bc.devicedetail;
      // this.userDetails = this.lc.user;
      // console.log(this.deviceDetails);
    }

  ngOnInit(): void {
  }
  makeRequest() {
    this.bs.getDeviceByImeiNo(this.bc.imeiNo).subscribe((res)=>{this.deviceDetails=res;
      this.deviceID = res.DeviceId},
        error=>{alert('Error in fetching data')});
    this.router.navigate(['/makerequest']);
  }

}
