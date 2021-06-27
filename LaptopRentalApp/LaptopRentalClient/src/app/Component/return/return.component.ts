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
  status! : boolean;
  overdueAmount : any;
  constructor(private ds : DeviceService,
    private route : Router) { }

  ngOnInit(): void {
    const json=window.localStorage.getItem('requestID') as string;
    console.log('json', json);
    const requestId =JSON.parse(json);
    this.ds.getReturnDetails(requestId).subscribe(res => {this.returnDetails = res;});
    this.overdueAmount = (this.returnDetails.Device.RentalAmount * this.returnDetails.Device.MaxRentalMonth ) + this.returnDetails.Device.Interest ;
    if (this.returnDetails.Device.Status.lower() == 'rented') {
      this.status = true;
    }
    this.status = false;
  }

  returndevice(requestId : number) {
    this.ds.updateReturnStatus(requestId).subscribe(res => {
      alert('Device has been successfully returned');
      return res;
    });
  }

  paymentreturn(requestId : number) {
    this.ds.updateReturnStatus(requestId).subscribe(res => {
      alert('Paid the overdue amount and returned the device successfully');
      return res;
    });
  }

}
