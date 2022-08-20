import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from 'src/app/cart/services/cart.service';
import { IProduct } from 'src/app/core/models/interfaces/product';
import { ProductService } from 'src/app/product/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  amount: number[] = [];

  products: IProduct[] = [];

  constructor(
    private productService: ProductService,
    private _snackBar: MatSnackBar,
    private cartService: CartService
  ) {
    for (let i = 1; i <= 10; i++) {
      this.amount.push(i);
    }
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe({
      next: (d) => {
        d.forEach((e) => {
          this.products.push({ ...e, selectedAmount: 1 });
        });
      },
    });
  }

  addToCart(item: IProduct) {
    this.cartService.addToCart(item);
    this._snackBar.open('Added to Cart!', '', {
      duration: 500,
      verticalPosition: 'top',
    });
  }
}
