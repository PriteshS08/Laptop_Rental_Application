import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserCatalogService } from 'src/app/Service/browser-catalog.service';
import { Device } from 'src/app/Types/Device';

@Injectable({ 
  providedIn: 'root'
 })

@Component({
  selector: 'app-browser-catalogue',
  templateUrl: './browser-catalogue.component.html',
  styleUrls: ['./browser-catalogue.component.css']
})
export class BrowserCatalogueComponent implements OnInit {
  devicelist:any[]=[];
  imeiNo! : string;
  constructor(private bs : BrowserCatalogService,
    private router : Router) { }

  ngOnInit(): void {
    this.bs.getAllDevices().subscribe((Response)=>{
      this.devicelist=Response;
    console.log(this.devicelist);},
    error=>{alert('Error in fetching data')});
  }
  gotomakeRequest(deviceid: number) {
    window.localStorage.setItem('DeviceId',JSON.stringify(deviceid));
    this.router.navigateByUrl('/makerequest');
  }

  viewDetail(imeiNO : string) {
    window.localStorage.setItem('imeiNO',JSON.stringify(imeiNO));
    this.router.navigate(['/viewdetails']);
  }

 

}
