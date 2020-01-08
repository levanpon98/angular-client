import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiddingthemeComponent } from './biddingtheme.component';

describe('BiddingthemeComponent', () => {
  let component: BiddingthemeComponent;
  let fixture: ComponentFixture<BiddingthemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiddingthemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiddingthemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
