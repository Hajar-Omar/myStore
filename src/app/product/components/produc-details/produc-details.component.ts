import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart/services/cart.service';
import { IProduct } from 'src/app/core/models/interfaces/product';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-produc-details',
  templateUrl: './produc-details.component.html',
  styleUrls: ['./produc-details.component.scss'],
})
export class ProducDetailsComponent implements OnInit {
  id: number;
  product: IProduct;

  selectedAmount = 1;
  amount: number[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private _snackBar: MatSnackBar,
    private cartService: CartService
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];

    for (let i = 1; i <= 10; i++) {
      this.amount.push(i);
    }
  }

  ngOnInit(): void {
    this.loadProductById();
  }

  loadProductById() {
    this.productService.getProducts().subscribe((d) => {
      this.product = d.find((e) => e.id === Number(this.id));
    });
  }

  addToCart() {
    this.product.selectedAmount = this.selectedAmount;
    this.cartService.addToCart(this.product);
    this._snackBar.open('Added to Cart!', '', {
      duration: 500,
      verticalPosition: 'top',
    });
  }
}
