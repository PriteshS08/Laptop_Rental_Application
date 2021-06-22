import { analyzeAndValidateNgModules } from '@angular/compiler';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { DH_NOT_SUITABLE_GENERATOR } from 'constants';
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
      return this.sum;
      console.log(this.sum);
    }

}

  


