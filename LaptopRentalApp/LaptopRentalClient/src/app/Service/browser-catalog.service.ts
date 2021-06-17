import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Device } from '../Types/Device';

@Injectable({
  providedIn: 'root'
})
export class BrowserCatalogService {
  url:string = "http://localhost:51108/api/catalogue";
  deviceDetails:Device[]=[];
  constructor(private http:HttpClient) { }
  getAllDevices()
  {
    return this.http.get<Device[]>(this.url).pipe(map((response:Device[]) =>{this.deviceDetails=response} ),
      catchError(this.handleError));
  }
  handleError(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      
      errorMessage = error.error.message;
    } else {
   
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
