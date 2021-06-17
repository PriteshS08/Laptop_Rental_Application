import { Component, OnInit } from '@angular/core';
import { BrowserCatalogService } from 'src/app/Service/browser-catalog.service';
import { Device } from 'src/app/Types/Device';

@Component({
  selector: 'app-browser-catalogue',
  templateUrl: './browser-catalogue.component.html',
  styleUrls: ['./browser-catalogue.component.css']
})
export class BrowserCatalogueComponent implements OnInit {
  devicelist:Device[]=[];
  devicedetail! : Device;
  constructor(private bc : BrowserCatalogService) { }

  ngOnInit(): void {
    this.bc.getAllDevices().subscribe((Response:Device[])=>this.devicelist=Response,
    error=>{alert('Error in fetching data')});
  }

  viewDetail(ImeiNo : number) {
    this.bc.getDeviceByImeiNo(ImeiNo).subscribe((Response:Device)=>this.devicedetail=Response,
    error=>{alert('Error in fetching data')});
  }

 

}
