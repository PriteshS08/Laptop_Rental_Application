import { Component, OnInit} from '@angular/core';
import { DeviceService } from 'src/app/Service/device.service';
import { LoginService } from 'src/app/Service/login.service';
import { Device } from 'src/app/Types/Device';


@Component({
  selector: 'app-earning-report',
  templateUrl: './earning-report.component.html',
  styleUrls: ['./earning-report.component.css']
})
export class EarningReportComponent implements OnInit {
  devicelist:Device[]=[];
  devicedetail! : Device;
  deviceID! : number;
  user : any = null;
  sum:number = 0;
  s1 : number =1;
  constructor(private ds:DeviceService ,
    private ls : LoginService) {
     
  }
 
  ngOnInit(): void {
    console.log('NG On Init execute');
    console.log('user object', this.user);
    this.ds.GetReport().subscribe((Response)=>{
    this.devicelist=Response;
    console.log("device" ,this.devicelist);},
    error=>{alert('Error in getting report')});
    for (let key in this.devicelist) {
      let value = this.devicelist[key]
      this.s1 = (value.RentalAmount) * (value.MaxRentalMonth);
      this.sum += this.s1;
    }
    console.log("sum",this.sum);
    }
   
    //   for (let val of this.devicelist)
    //   {
    //     this.s1 = (val.RentalAmount) * (val.MaxRentalMonth);
    //     this.sum += this.s1;
    //     console.log("1",this.sum);
    //   }
    //   return this.sum;
   }


  


