import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { DonePaymentComponent } from './components/done-payment/done-payment.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cart-detials',
    pathMatch: 'full',
  },
  {
    path: 'cart-detials',
    component: CartDetailsComponent,
  },
  {
    path: 'done',
    component: DonePaymentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule {}
