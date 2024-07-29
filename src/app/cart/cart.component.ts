import { Component } from '@angular/core';
import { AddToCartComponent } from '../add-to-cart/add-to-cart.component';
import { CartServiceService } from '../services/cart-service.service';
import { AnyARecord } from 'dns';
import { Product } from '../add-to-cart/interface/product';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [AddToCartComponent, NgFor, NgIf],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cartItems: Product[] = [];

  constructor(private cardservice: CartServiceService) {}
  ngOnInit() {
    this.cardservice.cartItem$.subscribe((res) => (this.cartItems = res));
  }
  removeAllCart() {
    this.cardservice.clearCart();
  }
  getTotalPrice(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }
 
}
