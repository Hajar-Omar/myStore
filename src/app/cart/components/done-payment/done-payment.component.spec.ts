import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonePaymentComponent } from './done-payment.component';

describe('DonePaymentComponent', () => {
  let component: DonePaymentComponent;
  let fixture: ComponentFixture<DonePaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonePaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
