import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Device } from 'src/app/Types/Device';
import { BrowserCatalogueComponent } from '../browser-catalogue/browser-catalogue.component';
import { MakeRequestComponent } from '../make-request/make-request.component';

@Component({
  selector: 'app-over-due',
  templateUrl: './over-due.component.html',
  styleUrls: ['./over-due.component.css']
})
export class OverDueComponent implements OnInit {
  overDueList : Device[] = [];
  requestID! : number;
  constructor(private bc : BrowserCatalogueComponent,
    private mr : MakeRequestComponent,
    private router : Router) { }

  ngOnInit(): void {
    this.requestID = this.mr.requestID;
    this.router.navigate(['']);
  }

}
