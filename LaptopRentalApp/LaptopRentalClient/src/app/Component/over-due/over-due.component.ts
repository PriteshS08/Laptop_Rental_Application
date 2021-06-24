import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/Service/device.service';


@Component({
  selector: 'app-over-due',
  templateUrl: './over-due.component.html',
  styleUrls: ['./over-due.component.css']
})
export class OverDueComponent implements OnInit {
  overDueList: any[] =[];
  ViewOverDue =[];
  requestID!: number;
  toDate!: Date;
  constructor(private ds : DeviceService) {
    this.ds.getOverDueDevices().subscribe((res : any) => {this.overDueList = res;
    console.log(this.overDueList)});
   }

  ngOnInit(): void {
  }
  viewOverDue(requestID : number , toDate : Date){
    const Details ={
    RequestId : requestID,
    ToDate : toDate
    }
    window.localStorage.setItem('details',JSON.stringify(Details));
  }

}
