import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgotpasswordService {
  url:string= "http://localhost:51108/api";

  
  constructor(private http: HttpClient) { }

  UpdatePassword(password:string){
    return this.http.put(this.url,password);
  }

}
