import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
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

  paymentForm: FormGroup;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.paymentForm = this.formBuilder.group({
      fullName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      address: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      creditCardNumber: new FormControl('', [
        Validators.required,
        Validators.maxLength(16),
        Validators.minLength(16),
      ]),
    });
  }

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

  changeAmount() {
    this.updateTotal();
  }

  submit() {
    this.cartService.emitUser({
      name: this.paymentForm.get('fullName').value,
      total: this.total,
    });

    // reset cart
    this.cartService.cart = [];
    this.cart = [];
    this.updateTotal();

    this.router.navigate(['cart/done']);
  }
}
