import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/Service/request.service';
import { GetAllRequest } from 'src/app/Types/Request';

@Component({
  selector: 'app-get-all-request',
  templateUrl: './get-all-request.component.html',
  styleUrls: ['./get-all-request.component.css']
})
export class GetAllRequestComponent implements OnInit {
  GetAllRequest : GetAllRequest[]=[];
  

  constructor(private req:RequestService) {
    this.req.GetAllUsersRequest().subscribe(result=>this.GetAllRequest=result);
   }

  ngOnInit(): void {

  }

}
