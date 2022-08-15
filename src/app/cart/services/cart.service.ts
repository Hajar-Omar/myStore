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
    this.cart.push(product);
  }

  getCartDetails(): IProduct[] {
    return this.cart;
  }

  emitUser(val: IUser) {
    this.user.next(val);
  }

  getUser(): Observable<IUser> {
    return this.user.asObservable();
  }
}
