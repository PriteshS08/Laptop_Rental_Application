
import { Component, OnInit, ViewChild } from '@angular/core';
import { DeviceService } from 'src/app/Service/device.service';
import { LoginService } from 'src/app/Service/login.service';
import { Device } from 'src/app/Types/Device';
import { User } from 'src/app/Types/User';

@Component({
  selector: 'app-earning-report',
  templateUrl: './earning-report.component.html',
  styleUrls: ['./earning-report.component.css']
})
export class EarningReportComponent implements OnInit {
  devicelist:Device[]=[];
  devicedetail! : Device;
  deviceID! : number;
  user! : any;
  constructor(private ds:DeviceService ,
    private ls : LoginService) {
    this.ls.userID$.subscribe((data) => {
      this.user = data;
    console.log("Earnings : " ,this.user);
    console.log("data : " ,data);});
   }
 
  ngOnInit(): void {
    this.ds.GetReport().subscribe((Response)=>{
      this.devicelist=Response;
      console.log(this.devicelist);},
    error=>{alert('Error in getting report')});
    }
   sum:number = 0;
   s1 : number =1
    TotalEarnings(): any {
      console.log(this.devicelist);
      for (let val of this.devicelist)
      {
        this.s1 = (val.RentalAmount) * (val.MaxRentalMonth);
        this.sum += this.s1;
      }
      console.log(this.sum);
      return this.sum;
    }

}

  


