import { ProductRequestsService } from '../services/product-requests.service';

import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detailes',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './product-detailes.component.html',
  styleUrl: './product-detailes.component.css',
})
export class ProductDetailesComponent {
  id: number = 0;
  products: Array<any> = [];
  productsObj: any;
  stars = [1, 2, 3, 4, 5];
  constructor(
    private ProductRequestsService: ProductRequestsService,
    private activeLink: ActivatedRoute
  ) {}
  ngOnInit() {
    this.id = this.activeLink.snapshot.params['id'];
    this.ProductRequestsService.getProductsDetials(this.id).subscribe(
      (res: any) => {
        this.productsObj = res;
      }
    );
  }
  quantity = 1;

  increaseQuantity() {
    if (this.quantity < this.productsObj.stock) {
      this.quantity++;
    }
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  onQuantityChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    let value = parseInt(inputElement.value, 10);
    if (isNaN(value) || value < 1) {
      value = 1;
    } else if (value > this.productsObj.stock) {
      value = this.productsObj.stock;
    }
    this.quantity = value;
  }

  addToCart() {
    // Your logic to add the product to the cart
    console.log(
      `Added ${this.quantity} of ${this.productsObj.title} to the cart.`
    );
  }
}
