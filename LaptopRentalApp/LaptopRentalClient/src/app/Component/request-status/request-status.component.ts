import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/Service/request.service';
import { GetAllRequest } from 'src/app/Types/Request';

@Component({
  selector: 'app-request-status',
  templateUrl: './request-status.component.html',
  styleUrls: ['./request-status.component.css']
})
export class RequestStatusComponent implements OnInit {
  GetAllRequest : GetAllRequest[]=[];

  constructor(private reqstatus : RequestService) {
    this.reqstatus.GetRequestStatus().subscribe(result=>this.GetAllRequest=result);
   }

  ngOnInit(): void {
  }

}
