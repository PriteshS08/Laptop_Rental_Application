import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/Service/request.service';
import { Device } from 'src/app/Types/Device';
import { DeviceRequest } from 'src/app/Types/Request';
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
  requestDetails! : DeviceRequest;
  deviceId! : number;
  constructor(private bc : BrowserCatalogueComponent,
    private lc : LoginComponent,
    private mr : MakeRequestComponent,
    private rs : RequestService) { 
      this.deviceDetails = this.bc.devicedetail;
      this.userDetails = this.lc.user;
      this.requestDetails = this.mr.requestDetails;
    }
  ngOnInit(): void {
  }

  acceptRequest(){
     const requestDetails = {
      DeviceId : this.deviceDetails.DeviceId,
      Status : "Rented"
    }
    //this.deviceDetails.Status = "Rented";
    this.rs.updateacceptStatus(requestDetails).subscribe(res  => { return res; });
  }
  rejectRequest() {
    this.deviceId = this.deviceDetails.DeviceId
    this.rs.updaterejectStatus(this.deviceId).subscribe(res => {return res;})
  }
}
