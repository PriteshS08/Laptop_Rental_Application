import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/Service/device.service';


@Component({
  selector: 'app-over-due',
  templateUrl: './over-due.component.html',
  styleUrls: ['./over-due.component.css']
})
export class OverDueComponent implements OnInit {
  overDueList!: [];
  ViewOverDue =[];
  requestID!: number;
  toDate!: Date;
  constructor(private ds : DeviceService) {
    this.ds.getOverDueDevices().subscribe((res : any) => {this.overDueList = res;});
   }

  ngOnInit(): void {
  }
  viewOverDue(requestID : number , toDate : Date){
    this.requestID = requestID;
    this.toDate = toDate;
  }

}
