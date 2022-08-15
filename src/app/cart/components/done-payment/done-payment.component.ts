import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/models/interfaces/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-done-payment',
  templateUrl: './done-payment.component.html',
  styleUrls: ['./done-payment.component.scss']
})
export class DonePaymentComponent implements OnInit {

  user: IUser;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getUser().subscribe({next: (d)=> { this.user = d;}})
  }

}
