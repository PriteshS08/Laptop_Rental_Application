import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/Service/request.service';
import { DeviceRequest } from 'src/app/Types/Request';
import { BrowserCatalogueComponent } from '../browser-catalogue/browser-catalogue.component';
import { ViewDetailsComponent } from '../view-details/view-details.component';


@Injectable({ 
  providedIn: 'root'
 })
 
@Component({
  selector: 'app-make-request',
  templateUrl: './make-request.component.html',
  styleUrls: ['./make-request.component.css']
})
export class MakeRequestComponent implements OnInit {
  frm : any = null;
  submitted : boolean =  false;
  requestStatus : string = "Pending";
  requestDetails! : DeviceRequest;
  requestID! : number;
  constructor(public formBuilder:FormBuilder,
    private bc : BrowserCatalogueComponent,
    private rs : RequestService,
    private vd : ViewDetailsComponent,
    private router : Router) {
      this.frm=this.formBuilder.group({
        FromDate : ['', [Validators.compose([Validators.required])]],
        ToDate : ['', [Validators.compose([Validators.required])]],
      });
     }

  ngOnInit(): void {
  }
  get f() { return this.frm.controls; }

  makeRequest() {
    this.submitted = true;
    const json = window.localStorage.getItem('deviceID') as string;
    console.log('json', json);
    const deviceID=JSON.parse(json);
    const json1=window.localStorage.getItem('user') as string;
    console.log('json1', json1);
    const user=JSON.parse(json1);
    const rentingDetails = {
    RequestDate : new Date(),
    FromDate: this.frm.get("FromDate")?.value,
    ToDate: this.frm.get('ToDate')?.value,
    RequestStatus : this.requestStatus,
    DeivceId_FK : deviceID,
    UserId_FK : user.UserId
    }
    this.rs.updateRequest(rentingDetails).subscribe((res: any)  => {this.requestDetails = res;
    window.localStorage.setItem('RequestID',JSON.stringify(res.RequestId));
    this.requestID = res.RequestId;
    this.router.navigate(['/catalogue']);
  });
  }
}
