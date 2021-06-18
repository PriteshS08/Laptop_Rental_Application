import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators} from '@angular/forms';
import { RequestService } from 'src/app/Service/request.service';
import { DeviceRequest } from 'src/app/Types/Request';
import { BrowserCatalogueComponent } from '../browser-catalogue/browser-catalogue.component';

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
  constructor(public formBuilder:FormBuilder,
    private bc : BrowserCatalogueComponent,
    private rs : RequestService) {
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
    const rentingDetails = {
    RequestDate : new Date(),
    FromDate: this.frm.get("FromDate")?.value,
    ToDate: this.frm.get('ToDate')?.value,
    RequestStatus : this.requestStatus,
    DeivceId_FK : this.bc.devicedetail.DeviceId
    }
    this.rs.updateRequest(rentingDetails).subscribe((res: any)  => {this.requestDetails = res});
  }
}
