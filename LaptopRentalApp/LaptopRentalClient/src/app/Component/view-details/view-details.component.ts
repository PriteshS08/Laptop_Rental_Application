import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceService } from 'src/app/Service/device.service';
import { Device } from 'src/app/Types/Device';
import { User } from 'src/app/Types/User';
import { BrowserCatalogueComponent } from '../browser-catalogue/browser-catalogue.component';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  deviceDetails!:Device;
  userDetails! : User;
  constructor(private bc : BrowserCatalogueComponent,
    private ds : DeviceService,
    private router : Router) { 
      this.deviceDetails = this.bc.devicedetail;
      this.ds.GetUser().subscribe((Response:User)=>this.userDetails=Response,
    error=>{alert('Error in fetching data')});
    }

  ngOnInit(): void {
  }
  makeRequest() {
    this.router.navigate(['/makerequest'])
  }

}
