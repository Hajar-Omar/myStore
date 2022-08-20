import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { IProduct, IUser } from 'src/app/core/models/interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: IProduct[] = [];
  user = new BehaviorSubject<IUser>(null);

  constructor() {}

  addToCart(product: IProduct) {
    const isAddedBefore = this.cart.findIndex((e) => e.id === product.id);
    if (isAddedBefore > -1) {
      this.cart[isAddedBefore].selectedAmount = product.selectedAmount;
    } else {
      this.cart.push(product);
    }
  }

  getCartDetails(): IProduct[] {
    return this.cart;
  }

  removeFromCart(item: IProduct) {
    this.cart = this.cart.filter((e) => e.id !== item.id);
  }

  emitUser(val: IUser) {
    this.user.next(val);
  }

  getUser(): Observable<IUser> {
    return this.user.asObservable();
  }
}
