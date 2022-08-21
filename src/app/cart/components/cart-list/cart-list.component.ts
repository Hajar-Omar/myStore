import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/core/models/interfaces/product';
import { CartService } from '../../services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent {
  @Input() cart: IProduct[] = [];
  @Output() cartChange = new EventEmitter<IProduct[]>();

  constructor(private cartService: CartService, private _snackBar: MatSnackBar) {}

  emitCart() {
    this.cartChange.emit(this.cart);
  }

  removeItem(item: IProduct) {
    this.cartService.removeFromCart(item);
    this.cart = this.cartService.getCartDetails();
    this.emitCart();
    this._snackBar.open('Removed from Cart!', '', {
      duration: 500,
      verticalPosition: 'top',
    });
  }
}
