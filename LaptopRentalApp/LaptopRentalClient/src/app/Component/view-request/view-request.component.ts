import { Component, OnInit } from '@angular/core';
import { BrowserCatalogService } from 'src/app/Service/browser-catalog.service';
import { RequestService } from 'src/app/Service/request.service';
import { Device } from 'src/app/Types/Device';
import { DeviceRequest } from 'src/app/Types/Request';
import { User } from 'src/app/Types/User';



@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls: ['./view-request.component.css']
})
export class ViewRequestComponent implements OnInit {
 deviceDetails!:Device;
  userDetails! : User;
  requestID! : number;
  requestDetails! : DeviceRequest;
  deviceId! : number;
  constructor(
    private rs : RequestService,
    private bs : BrowserCatalogService) { 
      const json=window.localStorage.getItem('user') as string;
      console.log('json', json);
      const user=JSON.parse(json);
      this.userDetails =user;
      const json1=window.localStorage.getItem('RequestID') as string;
      console.log('json1', json1);
      const requestID=JSON.parse(json1);
      this.requestID = requestID;
      this.rs.getRequest(this.requestID).subscribe(res => {
      this.requestDetails = res;
    this.deviceId = res.DeviceId_FK});
    this.bs.getDeviceByID(this.deviceId).subscribe(res => {
      this.deviceDetails = res;});
    }
  ngOnInit(): void {
  }

  acceptRequest(){
     const requestDetails = {
      DeviceId : this.deviceId,
      Status : "Rented"
    }
    //this.deviceDetails.Status = "Rented";
    this.rs.updateacceptStatus(requestDetails).subscribe(res  => { return res; });
  }
  rejectRequest() {
    this.rs.updaterejectStatus(this.deviceId).subscribe(res => {return res;})
  }
}
