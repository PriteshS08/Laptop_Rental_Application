import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceService } from 'src/app/Service/device.service';

@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.css']
})
export class ReturnComponent implements OnInit {
  returnDetails : any;
  status! : string;
  constructor(private ds : DeviceService,
    private route : Router) { }

  ngOnInit(): void {
    const json=window.localStorage.getItem('requestID') as string;
    console.log('json', json);
    const requestId =JSON.parse(json);
    this.ds.getReturnDetails(requestId).subscribe(res => {this.returnDetails = res;});
    this.status = this.returnDetails.Device.Status;
  }

  returndevice(requestId : number) {
    this.ds.updateReturnStatus(requestId).subscribe(res => {return res;});
  }

  paymentreturn(requestId : number) {
    this.route.navigate(['']);
  }

}
