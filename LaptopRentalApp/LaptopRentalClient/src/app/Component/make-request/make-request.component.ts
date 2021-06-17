import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RequestService } from 'src/app/Service/request.service';
import { BrowserCatalogueComponent } from '../browser-catalogue/browser-catalogue.component';

@Component({
  selector: 'app-make-request',
  templateUrl: './make-request.component.html',
  styleUrls: ['./make-request.component.css']
})
export class MakeRequestComponent implements OnInit {
  requestForm= new FormGroup({});
  submitted : boolean =  false;
  requestStatus : string = "Pending";
  requestDetails! : Request;
  constructor(public formBuilder:FormBuilder,
    private bc : BrowserCatalogueComponent,
    private rs : RequestService) { }

  ngOnInit(): void {
    this.requestForm=this.formBuilder.group({
      FromDate : ['', [Validators.compose([Validators.required])]],
      ToDate : ['', [Validators.compose([Validators.required])]],
    });
  }
  get f() { return this.requestForm.controls; }

  makeRequest() {
    this.submitted = true;
    const rentingDetails = {
    RequestDate : new Date(),
    FromDate: this.requestForm.get("FromDate")?.value,
    ToDate: this.requestForm.get('ToDate')?.value,
    RequestStatus : this.requestStatus,
    DeivceId_FK : this.bc.devicedetail.DeviceId
    }
    this.rs.updateRequest(rentingDetails).subscribe((res: any)  => {this.requestDetails = res});
  }
}
