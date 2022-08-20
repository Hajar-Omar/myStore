import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/core/models/interfaces/product';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent {
  @Input() cart: IProduct[] = [];
  @Output() cartChange = new EventEmitter<IProduct[]>();

  changeAmount() {
    this.cartChange.emit(this.cart);
  }
}
