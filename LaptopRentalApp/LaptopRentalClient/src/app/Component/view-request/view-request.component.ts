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
  requestDetails : any;
  constructor(
    private rs : RequestService)
     { 
      const json1=window.localStorage.getItem('RequestID') as string;
      console.log('json1', json1);
      const requestID=JSON.parse(json1);
      this.rs.GetSingleUserRequest(requestID).subscribe(res => { this.requestDetails = res;
        console.log(this.requestDetails);},
        error => {alert('Failed to retrieve data');});
    }
  ngOnInit(): void {
  }

  acceptRequest(){
    const json1=window.localStorage.getItem('RequestID') as string;
      console.log('json1', json1);
      const requestID=JSON.parse(json1);
    this.rs.updateacceptStatus(requestID).subscribe(res  => { return res; });
  }
  rejectRequest() {
    const json1=window.localStorage.getItem('RequestID') as string;
    console.log('json1', json1);
    const requestID=JSON.parse(json1);
    this.rs.updaterejectStatus(this.requestDetails.DeviceId_FK).subscribe(res => {return res;})
  }
}
