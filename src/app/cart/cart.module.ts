import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../core/material.module';
import { DonePaymentComponent } from './components/done-payment/done-payment.component';

@NgModule({
  declarations: [CartDetailsComponent, DonePaymentComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class CartModule {}
