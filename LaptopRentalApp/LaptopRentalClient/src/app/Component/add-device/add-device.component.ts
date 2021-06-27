import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DeviceService } from 'src/app/Service/device.service';




@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit {
AddDeviceDetails = new FormGroup({});
submitted:boolean=false;
fileToUpload!: File ;
user! : any;
deviceId! :any;
//devices! : any;
status : string = "Available";
//ratings: number = 5.0;
constructor(private formBuilder : FormBuilder,
  private device : DeviceService,
  private ar : ActivatedRoute
 // private bs : BrowserCatalogService
 ) {
    this.AddDeviceDetails=this.formBuilder.group({
      IMEINumber : ['', [Validators.compose([Validators.required])]],
      DeviceName : ['', [Validators.compose([Validators.required])]],
      DeviceSpecification : ['', [Validators.compose([Validators.required])]],
      PreInstalledSoftware : ['', [Validators.compose([Validators.required])]],
     // DeviceImage : ['', [Validators.compose([Validators.required])]],
      RentalAmount : ['', [Validators.compose([Validators.required])]],
      MaxRentalMonth : ['', [Validators.compose([Validators.required])]],
      Interest: ['', [Validators.compose([Validators.required])]],
      //Ratings : ['5.0'],

    });
   }

  ngOnInit(): void {
    this.ar.paramMap.subscribe(params => {
      const id = params.get('id');
      if(id)
      {
        this.deviceId=id;
         this.getDevice(id);
      }
      
    });
  }
   getDevice(id : any) {
     this.device.getdevicebyid(id).subscribe(
       (res :any)=>{this.editdevice(res);}),
      (error : any)=>console.log(error);  
   }
   
   editdevice(device :any)
   {
     this.AddDeviceDetails.patchValue({
      IMEINumber :device.IMEINumber,
      DeviceName :device.DeviceName,
      DeviceSpecification :device.DeviceSpecification,
      PreInstalledSoftware :device.PreInstalledSoftware,
      DeviceImage :device.DeviceImage,
      RentalAmount :device.RentalAmount,
      MaxRentalMonth :device.MaxRentalMonth,
      Interest: device.Interest
     });
   }
   
  onUploadFile(event : any) {  
    this.fileToUpload = <File>event.target.files[0];
    }  

    get f() { return this.AddDeviceDetails.controls; }
  
    AddDetail(){
      this.submitted = true;
      const json=window.localStorage.getItem('user') as string;
      console.log('json', json);
      this.user=JSON.parse(json);
      console.log('json', json);
      const user=JSON.parse(json);
      let obj={...this.AddDeviceDetails.value};
      obj['UserId_FK']=user.UserId;
      obj['Status']=this.status;
     
      console.log(obj);
      const Details = new FormData();
      Details.append('image', this.fileToUpload);
      Details.append('AddDevice', JSON.stringify(obj));
     

      console.log(Details);

     
  
      this.device.addDeviceDetails(Details).subscribe(
        response=>{alert('Added successfully')},
        error=>{alert('Failed')}
    
    );}
    resetDetail() {
      this.AddDeviceDetails.reset();
    }

    UpdateDetail()
    {
      this.submitted = true;
      const json=window.localStorage.getItem('user') as string;
      console.log('json', json);
      this.user=JSON.parse(json);
      console.log('json', json);
      const user=JSON.parse(json);
      let obj={...this.AddDeviceDetails.value};
      obj['UserId_FK']=user.UserId;
      obj['Status']=this.status;
     
      console.log(obj);
      const deviceDetail = new FormData();
      deviceDetail.append('image', this.fileToUpload);
      deviceDetail.append('UpdateDetail', JSON.stringify(obj));
     

      console.log(deviceDetail);
      this.device.updateDeviceDetails(deviceDetail,this.deviceId).subscribe(
        response=>{alert('Update successfull');},
        error=>{alert('Failed');}
      );
    }

    
  }


