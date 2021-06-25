import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from 'src/app/Service/request.service';
import { DeviceRequest } from 'src/app/Types/Request';
import { DatePipe } from '@angular/common'

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
  // FromDate! : Date;
  // ToDate! : Date;
  constructor(
    private rs : RequestService,
    private router : Router, private ac: ActivatedRoute,
    public formBuilder:FormBuilder) {
      this.makeRequestForm=this.formBuilder.group({
        FromDate : ['',[Validators.compose([Validators.required])]],
        ToDate : ['',[Validators.compose([Validators.required])]]
      });
     }

  ngOnInit(): void {
  }
 
  get f() { return this.makeRequestForm.controls; }
  makeRequest() {
    this.submitted = true;
    // let id= this.ac.snapshot.paramMap.get('id');
    const json=window.localStorage.getItem('DeviceId') as string;
    console.log('json1', json);
    const deviceid=JSON.parse(json);
    const json1=window.localStorage.getItem('user') as string;
    console.log('json1', json1);
    const user=JSON.parse(json1);
    const rentingDetails = {
     
    RequestDate : new Date(),
    FromDate: this.makeRequestForm.get('FromDate')?.value,
    ToDate:this.makeRequestForm.get('ToDate')?.value,
    RequestStatus : this.requestStatus,
    DeviceId_FK : deviceid as number,
    UserId_FK : user.UserId as number
    };
    console.log(rentingDetails);
    this.rs.updateRequest(rentingDetails).subscribe((res: any)  => {
    this.requestDetails = res;
    window.localStorage.setItem('RequestID',JSON.stringify(res.RequestId));
    alert('Request Successfull');
    this.router.navigate(['/catalogue']);
      },
        error=>{alert('failed');}
      );
  }

  
  
}

