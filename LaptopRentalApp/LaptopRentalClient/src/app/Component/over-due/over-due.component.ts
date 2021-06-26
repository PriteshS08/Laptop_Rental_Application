import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private ds : DeviceService,private route : Router) {
    this.ds.getOverDueDevices().subscribe((res : any) => {this.overDueList = res;
    console.log(this.overDueList)});
   }

  ngOnInit(): void {
  }
  viewOverDue(deviceId : number , toDate : Date){
    const Details ={
    DeviceId_FK :deviceId ,
    ToDate : toDate,
   
    }
    window.localStorage.setItem('details',JSON.stringify(Details));
    this.route.navigate(['/due']);
  }

}
