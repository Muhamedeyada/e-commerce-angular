import { Component, Input } from '@angular/core';
import { CartServiceService } from '../services/cart-service.service';
import { Product } from './interface/product';

@Component({
  selector: 'app-add-to-cart',
  standalone: true,
  imports: [],
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.css',
})
export class AddToCartComponent {
  @Input() item!: Product;
  constructor(private cardservice: CartServiceService) {}

  removeFromCart(id: any) {
    this.cardservice.removeFromCard(id);
  }
  updateQuantity(productId: number, quantity: number) {
    this.cardservice.updateQuantity(productId, quantity);
  }
  // incProduct(dta: any) {
  //   if (dta.controls != dta.max && dta.allData.stock != 0) {
  //     dta.allData.stock -= 1;
  //     dta.controls += 1;
  //   }
  // }
  // dicProduct(dta: any) {
  //   if (dta.controls! > 1) {
  //     dta.allData.stock += 1;
  //     dta.controls -= 1;
  //   }
  // }
}
