import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from 'src/app/Service/request.service';
import { DeviceRequest } from 'src/app/Types/Request';



 
@Component({
  selector: 'app-make-request',
  templateUrl: './make-request.component.html',
  styleUrls: ['./make-request.component.css']
})
export class MakeRequestComponent implements OnInit {
  requestStatus : string = "Pending";
  requestDetails! : DeviceRequest;
  requestID! : number;
  d1;
  d2;
  constructor(
    private rs : RequestService,
    private router : Router, private ac: ActivatedRoute) {
    this.d1='';
    this.d2='';
     }

  ngOnInit(): void {
  }

  makeRequest() {
  let id= this.ac.snapshot.paramMap.get('id');
  console.log(id);
    const json1=window.localStorage.getItem('user') as string;
    console.log('json1', json1);
    const user=JSON.parse(json1);
    const rentingDetails = {
    RequestDate : new Date(),
    FromDate: this.d1,
    ToDate: this.d2,
    RequestStatus : this.requestStatus,
    DeivceId_FK : id,
    UserId_FK : user.UserId
    };
    console.log('rent details', rentingDetails);
    this.rs.updateRequest(rentingDetails).subscribe((res: any)  => {
      this.requestDetails = res;
    window.localStorage.setItem('RequestID',JSON.stringify(res.RequestId));
 

    this.requestID = res.RequestId; 
    alert(this.requestID);
    //this.router.navigate(['/catalogue']);
  },
    error=>{alert('failed');}
  );
   
    
  };
  
}
