import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  makeRequestForm= new FormGroup({});
  submitted : boolean =  false;
  // d1;
  // d2;
  // FromDate! : Date;
  // ToDate! : Date;
  constructor(
    private rs : RequestService,
    private router : Router, private ac: ActivatedRoute,
    public formBuilder:FormBuilder) {
      // this.FromDate = new Date();
      // this.ToDate = new Date();
      this.makeRequestForm=this.formBuilder.group({
        FromDate : ['',[Validators.compose([Validators.required])]],
        ToDate : ['',[Validators.compose([Validators.required])]]
      });
    // this.d1='';
    // this.d2='';
     }

  ngOnInit(): void {
  }
  onToDateChange(event: any) {
    const ToDate = this.makeRequestForm.patchValue({ ToDate: event.target.value });
    window.localStorage.setItem('todate',JSON.stringify(ToDate));
  }
  onFromDateChange(event: any) {
    const FromDate = this.makeRequestForm.patchValue({ FromDate: event.target.value });
    window.localStorage.setItem('fromdate',JSON.stringify(FromDate));
  }
  get f() { return this.makeRequestForm.controls; }
  makeRequest() {
    this.submitted = true;
    let id= this.ac.snapshot.paramMap.get('id');
    const json1=window.localStorage.getItem('user') as string;
    console.log('json1', json1);
    const user=JSON.parse(json1);
    const json2=window.localStorage.getItem('todate') as string;
    console.log('json2', json2);
    const todate=JSON.parse(json2);
    const json3=window.localStorage.getItem('fromdate') as string;
    console.log('json2', json2);
    const fromdate=JSON.parse(json2);
    const rentingDetails = {
    RequestDate : new Date(),
    FromDate: fromdate,
    ToDate: todate,
    RequestStatus : this.requestStatus,
    DeivceId_FK : id,
    UserId_FK : user.UserId
    };
    this.rs.updateRequest(rentingDetails).subscribe((res: any)  => {
    this.requestDetails = res;
    window.localStorage.setItem('RequestID',JSON.stringify(res.RequestId));
    this.router.navigate(['/catalogue']);
      },
        error=>{alert('failed');}
      );
  }

  // makeRequest() {
  // let id= this.ac.snapshot.paramMap.get('id');
  // console.log(id);
  //   const json1=window.localStorage.getItem('user') as string;
  //   console.log('json1', json1);
  //   const user=JSON.parse(json1);
  //   const rentingDetails = {
  //   RequestDate : new Date(),
  //   FromDate: this.d1,
  //   ToDate: this.d2,
  //   RequestStatus : this.requestStatus,
  //   DeivceId_FK : id,
  //   UserId_FK : user.UserId
  //   };
  //   console.log('rent details', rentingDetails);
  //   this.rs.updateRequest(rentingDetails).subscribe((res: any)  => {
  //     this.requestDetails = res;
  //   window.localStorage.setItem('RequestID',JSON.stringify(res.RequestId));
 

  //   this.requestID = res.RequestId; 
  //   alert(this.requestID);
  //   //this.router.navigate(['/catalogue']);
  // },
  //   error=>{alert('failed');}
  // );
   
    
  // };
  
}

