import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenderUIComponent } from './lender-ui.component';

describe('LenderUIComponent', () => {
  let component: LenderUIComponent;
  let fixture: ComponentFixture<LenderUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LenderUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LenderUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
