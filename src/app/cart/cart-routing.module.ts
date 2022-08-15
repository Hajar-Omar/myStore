import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule {}
