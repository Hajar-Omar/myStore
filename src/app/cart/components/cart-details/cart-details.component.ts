import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/core/models/interfaces/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss'],
})
export class CartDetailsComponent implements OnInit {
  cart: IProduct[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCartDetails();
  }

  loadCartDetails() {
    this.cart = this.cartService.cart;
    this.updateTotal();
  }

  updateTotal() {
    this.total = this.cart.reduce(
      (acc, cur) => acc + cur.selectedAmount * cur.price,
      0
    );
  }

  changeAmount(item: IProduct) {
    this.updateTotal();
  }
}
