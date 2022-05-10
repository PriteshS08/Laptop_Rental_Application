import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/Service/request.service';
import { GetAllRequest } from 'src/app/Types/Request';


@Component({
  selector: 'app-get-all-request',
  templateUrl: './get-all-request.component.html',
  styleUrls: ['./get-all-request.component.css']
})

export class GetAllRequestComponent implements OnInit {
  getallrequest :any[]=[];

  constructor(private req:RequestService,private router:Router){
     
  }

  ngOnInit(): void {
    this.req.GetAllreq().subscribe((response)=>{this.getallrequest=response;},
     error=>{alert('failed to fetch data')});
    }
    ViewRequest(requestId : number){
          window.localStorage.setItem('RequestID',JSON.stringify(requestId));
          this.router.navigate(['/viewrequest']);
        }
  

}
