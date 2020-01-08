import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiddingtopbarComponent } from './biddingtopbar.component';

describe('BiddingtopbarComponent', () => {
  let component: BiddingtopbarComponent;
  let fixture: ComponentFixture<BiddingtopbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiddingtopbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiddingtopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
