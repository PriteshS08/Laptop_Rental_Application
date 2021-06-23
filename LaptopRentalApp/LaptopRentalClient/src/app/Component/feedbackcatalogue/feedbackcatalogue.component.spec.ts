import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackcatalogueComponent } from './feedbackcatalogue.component';

describe('FeedbackcatalogueComponent', () => {
  let component: FeedbackcatalogueComponent;
  let fixture: ComponentFixture<FeedbackcatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackcatalogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackcatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
