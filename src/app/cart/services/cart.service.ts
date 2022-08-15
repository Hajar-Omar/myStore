import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from 'src/app/core/models/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart :IProduct[] = [];

  constructor() { }

  addToCart(product: IProduct){
    this.cart.push(product);
  }

  getCartDetails(): IProduct[]{
    return this.cart;
  }

}
