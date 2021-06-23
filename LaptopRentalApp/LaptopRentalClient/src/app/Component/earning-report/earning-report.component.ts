import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/Service/device.service';
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

  constructor(private ds:DeviceService ) { }

  ngOnInit(): void {
    this.ds.GetReport().subscribe((Response)=>{
      this.devicelist=Response;
    console.log(Response);},
    error=>{alert('Error in getting report')});
    }
   sum:any = 0;
   
    TotalEarnings(): any {
      for (var val of this.devicelist)
      {
        this.sum += val.RentalAmount;
      }
      console.log(this.sum);
      return this.sum;
    }

}

  


