import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/Service/feedback.service';
import { Feedback } from 'src/app/Types/Feedback';

@Component({
  selector: 'app-viewfeedback',
  templateUrl: './viewfeedback.component.html',
  styleUrls: ['./viewfeedback.component.css']
})
export class ViewfeedbackComponent implements OnInit {

  feedbacklist : Feedback[]=[];

  constructor(private fs : FeedbackService) { }

  ngOnInit(): void {
    const json=window.localStorage.getItem('did') as string;
    console.log('json', json);
    const deviceId=JSON.parse(json);
     this.fs.getfeedback(deviceId).subscribe((response)=>{this.feedbacklist=response;})
     console.log(this.feedbacklist);
  }

}
