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
  requeststatus! :string;
  overdueAmount : any;
  rentalAmount : any;
  constructor(private ds : DeviceService,
    private route : Router) { }

  ngOnInit(): void {
    const json=window.localStorage.getItem('requestID') as string;
    console.log('json', json);
    const requestId =JSON.parse(json);
    const json1=window.localStorage.getItem('requeststatus') as string;
    console.log('json1', json1);
    const requestStatus =JSON.parse(json1);
    this.requeststatus=requestStatus;
    this.ds.getReturnDetails(requestId).subscribe(res => {this.returnDetails = res;
      this.rentalAmount = (res.Device.RentalAmount * res.Device.MaxRentalMonth );
      this.overdueAmount = (res.Device.RentalAmount * res.Device.MaxRentalMonth ) + res.Device.Interest ;
    });
    
   console.log("rent",this.rentalAmount);
   console.log("overdue", this.overdueAmount);
    
  }

  paymentreturn(requestId : number) {
    console.log(requestId);
    this.ds.updateReturnStatus(requestId).subscribe(res => {
      alert('Paid the amount and returned the device successfully');
      return res;
    });
  }

}
