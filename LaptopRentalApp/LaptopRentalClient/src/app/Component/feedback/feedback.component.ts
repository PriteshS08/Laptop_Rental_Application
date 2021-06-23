import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FeedbackService } from 'src/app/Service/feedback.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  frm : any = null;
  submitted: boolean = false;
  flag:any;
  
  constructor(public formBuilder:FormBuilder,private fs : FeedbackService,private lc:LoginComponent) { 
    this.frm=this.formBuilder.group({
      Ratings : ['', [Validators.compose([Validators.required])]],
      Comment : ['', [Validators.compose([Validators.required])]],
    });
   }

  ngOnInit(): void {
  }

  get f() { return this.frm.controls; }

  makeRequest() {
    this.submitted = true;
    const json=window.localStorage.getItem('user') as string;
    console.log('json', json);
    const user=JSON.parse(json);
    const ratingssubmission = {
    
    Ratings: this.frm.get("Ratings")?.value,
    Comment: this.frm.get("Comment")?.value,
    FeedBackDate:new Date(),
    UserId_FK:user.UserId
    }
    this.fs.Ratingsubmission(ratingssubmission).subscribe((res: any)  => {this.flag = res});
  }

}
