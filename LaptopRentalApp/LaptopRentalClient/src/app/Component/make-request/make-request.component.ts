// import { getLocaleDateTimeFormat } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { MakeRequestService } from 'src/app/make-request.service';
// import { BrowserCatalogueComponent } from '../browser-catalogue/browser-catalogue.component';

// @Component({
//   selector: 'app-make-request',
//   templateUrl: './make-request.component.html',
//   styleUrls: ['./make-request.component.css']
// })
// export class MakeRequestComponent implements OnInit {
//   PasswordUpdate= new FormGroup({});
//   submitted : boolean =  false;
//   requestStatus : string = "Pending";
//   myDate = new Date();
//   constructor(public formBuilder:FormBuilder,
//     private mr : MakeRequestService,
//     private bc : BrowserCatalogueComponent) { }

//   ngOnInit(): void {
//     this.PasswordUpdate=this.formBuilder.group({
//       FromDate: new FormControl,
//       ToDate: new FormControl,
//        });
//   }
//   get f() { return this.PasswordUpdate.controls; }

//   passwordUpdate() {
//     this.submitted = true;
//   const rentingDetails = {
//     RequestDate : new Date(),
//     FromDate: this.PasswordUpdate.get("FromDate")?.value,
//     ToDate: this.PasswordUpdate.get('ToDate')?.value,
//     RequestStatus : this.requestStatus,
//     DeivceId_FK : this.bc.devicedetail.DeviceId
//     }
//     this.mr.
//   }
// }
