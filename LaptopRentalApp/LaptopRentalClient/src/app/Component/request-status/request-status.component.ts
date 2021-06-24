import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/Service/request.service';


@Component({
  selector: 'app-request-status',
  templateUrl: './request-status.component.html',
  styleUrls: ['./request-status.component.css']
})
export class RequestStatusComponent implements OnInit {
  getAllRequest : any[]=[];
  

  constructor(private reqstatus : RequestService) {
    this.reqstatus.GetRequestStatus().subscribe(result=>{this.getAllRequest=result;
      
    console.log(this.getAllRequest);
  });
   }

  ngOnInit(): void {
  }

}
