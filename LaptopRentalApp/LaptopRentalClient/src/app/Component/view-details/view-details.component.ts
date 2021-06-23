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
    const json = window.localStorage.getItem('imeiNO') as string;
    console.log('json', json);
    const imeiNO=JSON.parse(json);
    this.bs.getDeviceByImeiNo(imeiNO).subscribe((res)=>{this.deviceDetails=res;
      window.localStorage.setItem('deviceID',JSON.stringify(res.DeviceId_FK));},
        error=>{alert('Error in fetching data')});
    this.router.navigate(['/makerequest']);
  }

}
