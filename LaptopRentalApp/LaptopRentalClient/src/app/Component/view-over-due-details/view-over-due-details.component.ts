import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/Service/device.service';
import { OverDueComponent } from '../over-due/over-due.component';

@Component({
  selector: 'app-view-over-due-details',
  templateUrl: './view-over-due-details.component.html',
  styleUrls: ['./view-over-due-details.component.css']
})
export class ViewOverDueDetailsComponent implements OnInit {
  overDueDetails! : [] ;
  constructor(private ds : DeviceService,
    private od : OverDueComponent) { }

  ngOnInit(): void {
    const Details ={
      RequestId : this.od.requestID,
      ToDate : this.od.toDate
    }
    this.ds.getOverDueDetails(Details).subscribe(res => this.overDueDetails= res);
  }

}
