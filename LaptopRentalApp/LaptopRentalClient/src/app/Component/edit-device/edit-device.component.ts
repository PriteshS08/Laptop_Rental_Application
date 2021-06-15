import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,FormBuilder,Validator,NgForm, Validators}from '@angular/forms';
import { DeviceService } from '../Service/device.service';
import { Device } from '../Types/Device';

@Component({
  selector: 'app-edit-device',
  templateUrl: './edit-device.component.html',
  styleUrls: ['./edit-device.component.css']
})
export class EditDeviceComponent implements OnInit {

   frmDetails!: FormGroup;
  constructor(private formBuilder:FormBuilder,private device:DeviceService) {
    
   }


  ngOnInit(): void {
    this.frmDetails=this.formBuilder.group({
      ImeiNumber : ['', [Validators.compose([Validators.required])]],
      DeviceName : ['', [Validators.compose([Validators.required])]],
      DeviceSpecification : ['', [Validators.compose([Validators.required])]],
      PreInstalledSoftware : ['', [Validators.compose([Validators.required])]],
      UploadDeviceImage : ['', [Validators.compose([Validators.required])]],
      RentalAmountMonth : ['', [Validators.compose([Validators.required])]],
      MaximumRentalMonths : ['', [Validators.compose([Validators.required])]],
      Interest: ['', [Validators.compose([Validators.required])]]
     
    });
  } 
 
  get f() { return this.frmDetails.controls; }
  
  UpdateDetail(){
    const Details = {
      ImeiNumber : this.frmDetails.get("ImeiNumber")?.value,
      DeviceName : this.frmDetails.get("DeviceName")?.value,
      DeviceSpecification : this.frmDetails.get(" DeviceSpecification")?.value,
      PreInstalledSoftware : this.frmDetails.get("PreInstalledSoftware")?.value,
      UploadDeviceImage : this.frmDetails.get(" UploadDeviceImage")?.value,
      RentalAmountMonth : this.frmDetails.get("RentalAmountMonth")?.value,
      MaximumRentalMonths : this.frmDetails.get(" MaximumRentalMonths")?.value,
      Interest:this.frmDetails.get("Interest")?.value,
     
    }

    this.device.updateDeviceDetails(Details).subscribe(
      response=>{alert('Update successfull')},
      error=>{alert('Failed')}
  
  );
  }
  

}
