import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiddingdetailsComponent } from './biddingdetails.component';

describe('BiddingdetailsComponent', () => {
  let component: BiddingdetailsComponent;
  let fixture: ComponentFixture<BiddingdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiddingdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiddingdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
