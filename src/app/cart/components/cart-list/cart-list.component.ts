import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/core/models/interfaces/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent {
  @Input() cart: IProduct[] = [];
  @Output() cartChange = new EventEmitter<IProduct[]>();

  constructor(private cartService: CartService){
  }

  emitCart() {
    this.cartChange.emit(this.cart);
  }

  removeItem(item: IProduct){
    this.cartService.removeFromCart(item);
  this.cart = this.cartService.getCartDetails();
this.emitCart();
  }
}
