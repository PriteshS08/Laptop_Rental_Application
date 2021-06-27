import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/Service/device.service';


@Component({
  selector: 'app-view-over-due-details',
  templateUrl: './view-over-due-details.component.html',
  styleUrls: ['./view-over-due-details.component.css']
})
export class ViewOverDueDetailsComponent implements OnInit {
  overDueDetails : any;
  overdueAmount : any;
  constructor(private ds : DeviceService) { }

  ngOnInit(): void {
    const json=window.localStorage.getItem('requestId') as string;
    console.log('json', json);
    const Details=JSON.parse(json);
    this.ds.getOverDueDetails(Details).subscribe(res => this.overDueDetails= res);
    this.overdueAmount = (this.overDueDetails.Device.RentalAmount * this.overDueDetails.Device.MaxRentalMonth ) + this.overDueDetails.Device.Interest ;
  }

}
