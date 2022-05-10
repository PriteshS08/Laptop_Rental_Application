import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRentedDevicesComponent } from './view-rented-devices.component';

describe('ViewRentedDevicesComponent', () => {
  let component: ViewRentedDevicesComponent;
  let fixture: ComponentFixture<ViewRentedDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRentedDevicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRentedDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
