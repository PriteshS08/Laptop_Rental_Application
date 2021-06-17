import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/Types/Device';
import { User } from 'src/app/Types/User';
import { BrowserCatalogueComponent } from '../browser-catalogue/browser-catalogue.component';
import { LoginComponent } from '../login/login.component';
import { MakeRequestComponent } from '../make-request/make-request.component';

@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls: ['./view-request.component.css']
})
export class ViewRequestComponent implements OnInit {
  deviceDetails!:Device;
  userDetails! : User;
  requestDetails! : Request;
  constructor(private bc : BrowserCatalogueComponent,
    private lc : LoginComponent,
    private mr : MakeRequestComponent) { 
      this.deviceDetails = this.bc.devicedetail;
      this.userDetails = this.lc.user;
      this.requestDetails = this.mr.requestDetails;
    }
  ngOnInit(): void {
  }

}
