import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiddingmenuComponent } from './biddingmenu.component';

describe('BiddingmenuComponent', () => {
  let component: BiddingmenuComponent;
  let fixture: ComponentFixture<BiddingmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiddingmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiddingmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
