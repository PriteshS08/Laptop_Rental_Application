import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/Service/device.service';
import { Device } from 'src/app/Types/Device';
import { User } from 'src/app/Types/User';
import { BrowserCatalogueComponent } from '../browser-catalogue/browser-catalogue.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  deviceDetails!:Device;
  userDetails! : User;
  constructor(private bc : BrowserCatalogueComponent,
    private lc : LoginComponent) { 
      this.deviceDetails = this.bc.devicedetail;
      this.userDetails = this.lc.user;
    }

  ngOnInit(): void {
  }

}
