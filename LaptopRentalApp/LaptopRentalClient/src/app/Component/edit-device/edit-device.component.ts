import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder, Validators}from '@angular/forms';
import { BrowserCatalogService } from 'src/app/Service/browser-catalog.service';
import { DeviceService } from 'src/app/Service/device.service';
import { Device } from 'src/app/Types/Device';

@Component({
  selector: 'app-edit-device',
  templateUrl: './edit-device.component.html',
  styleUrls: ['./edit-device.component.css']
})
export class EditDeviceComponent implements OnInit {
  submitted : boolean = false;
  UpdateDetailform = new FormGroup({});
  fileToUpload!: File ;
  status : string = "Available";
  obj! : Device;
  constructor(private formBuilder:FormBuilder,private device: DeviceService,
    private bs : BrowserCatalogService) { 
      const json=window.localStorage.getItem('deviceID') as string;
      console.log('json', json);
      const id=JSON.parse(json);
      this.bs.getDeviceByID(id).subscribe(res => {this.obj = res;
      console.log(this.obj);})
    }


  ngOnInit(): void {
    this.UpdateDetailform=this.formBuilder.group({
      IMEINumber : [this.obj.IMEINumber, [Validators.compose([Validators.required])]],
      DeviceName : [this.obj.DeviceName, [Validators.compose([Validators.required])]],
      DeviceSpecification : [this.obj.DeviceSpecification, [Validators.compose([Validators.required])]],
      PreInstalledSoftware : [this.obj.PreInstalledSoftware, [Validators.compose([Validators.required])]],
      DeviceImage : [this.obj.DeviceImage, [Validators.compose([Validators.required])]],
      RentalAmount : [this.obj.RentalAmount, [Validators.compose([Validators.required])]],
      MaxRentalMonth : [this.obj.MaxRentalMonth, [Validators.compose([Validators.required])]],
      Interest: [this.obj.Interest, [Validators.compose([Validators.required])]]
     
    });
  } 
  onUploadFile(event : any) {  
    this.fileToUpload = <File>event.target.files[0];
    }  

 
  get f() { return this.UpdateDetailform.controls; }
  
  UpdateDetail(){
    const json=window.localStorage.getItem('user') as string;
      console.log('json', json);
      const user=JSON.parse(json);
      let obj={...this.UpdateDetailform.value};
      obj['UserId_FK']=user.UserId;
      obj['Status']=this.status;
      
      console.log(obj);
      const deviceDetail = new FormData();
      deviceDetail.append('image', this.fileToUpload);
      deviceDetail.append('SignUp', JSON.stringify(obj));
    //   const Detail = {
    //     IMEINumber : this.UpdateDetailform.get("IMEINumber")?.value as string,
    //     DeviceName : this.UpdateDetailform.get("DeviceName")?.value as string,
    //     DeviceSpecification : this.UpdateDetailform.get(" DeviceSpecification")?.value as string,
    //     PreInstalledSoftware : this.UpdateDetailform.get("PreInstalledSoftware")?.value as string,
    //     DeviceImage : DeviceImage,
    //     RentalAmount : this.UpdateDetailform.get("RentalAmount")?.value,
    //     MaxRentalMonth : this.UpdateDetailform.get(" MaxRentalMonth")?.value as number,
    //     Interest:this.UpdateDetailform.get("Interest")?.value,
    //     Status : this.status
    // }

    this.submitted = true;
    this.device.updateDeviceDetails(deviceDetail).subscribe(
      response=>{alert('Update successfull')},
      error=>{alert('Failed')}
  
  );
  }
  

}
