import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserCatalogService } from 'src/app/Service/browser-catalog.service';
import { FeedbackService } from 'src/app/Service/feedback.service';
import { Device } from 'src/app/Types/Device';
import { Feedback } from 'src/app/Types/Feedback';

@Component({
  selector: 'app-feedbackcatalogue',
  templateUrl: './feedbackcatalogue.component.html',
  styleUrls: ['./feedbackcatalogue.component.css']
})
export class FeedbackcatalogueComponent implements OnInit {
  feedbacklist : Feedback[]=[];
  devicelist:Device[]=[];
  devicedetail! : Device;
  imeiNo! : string;
  feed :Request[]=[];

  constructor(private bs:FeedbackService,private router : Router) { }

  ngOnInit(): void {

    this.bs.getAllDevices().subscribe((Response)=>{
      this.devicelist=Response;
    console.log(this.devicelist);},
    error=>{alert('Error in fetching data')});
  }

  addRating(deviceId :number,userId :number){
    console.log(deviceId);
    window.localStorage.setItem('UserId',JSON.stringify(userId));
    window.localStorage.setItem('DeviceId',JSON.stringify(deviceId));
    this.router.navigate(['/feedback']);
  }

}
