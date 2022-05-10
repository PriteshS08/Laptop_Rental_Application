import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FeedbackService } from 'src/app/Service/feedback.service';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  frm : any = null;
  submitted: boolean = false;
  flag:any;
  
  constructor(public formBuilder:FormBuilder,private fs : FeedbackService) { 
    this.frm=this.formBuilder.group({
      Ratings : ['', [Validators.compose([Validators.required])]],
      Comment : ['', [Validators.compose([Validators.required])]],
    });
   }

  ngOnInit(): void {
  }

  get f() { return this.frm.controls; }

  feedback() {
    this.submitted = true;
    const json=window.localStorage.getItem('user') as string;
    console.log('json', json);
    const user=JSON.parse(json);
    const json1=window.localStorage.getItem('DeviceId') as string;
    console.log('json1', json1);
    const deviceid=JSON.parse(json1);
    const ratingssubmission = {
    
    Ratings: this.frm.get("Ratings")?.value,
    Comment: this.frm.get("Comment")?.value,
    FeedBackDate:new Date(),
    UserId_FK:user.UserId,
    DeviceId_FK:deviceid
    }
    this.fs.Ratingsubmission(ratingssubmission).subscribe((res: any)  => {this.flag = res;
    alert('Feedback Submitted Successfully');},
    error => {alert('Failed to submit feedback')});
  }

}
