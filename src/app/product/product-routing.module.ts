import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProducDetailsComponent } from './components/produc-details/produc-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products-list',
    pathMatch: 'full',
  },
  {
    path: 'products-list',
    component: ProductListComponent,
  },
  {
    path: 'product/:id',
    component: ProducDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
