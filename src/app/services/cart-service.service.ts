import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../add-to-cart/interface/product';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  private cartItem = new BehaviorSubject<Product[]>([]);
  cartItem$ = this.cartItem.asObservable();
  private cartCounter = new BehaviorSubject<number>(0);
  cartCounter$ = this.cartCounter.asObservable();
  private updateCartCounter(cart: any[]) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    this.cartCounter.next(totalItems);
  }

  getcardItem() {
    return this.cartItem.value;
  }
  // addToCartService(productFromAnotherComponent: any) {
  //   const current = this.cartItem.value;
  //   this.cartItem.next([...current, productFromAnotherComponent]);
  // }addToCartService(productFromAnotherComponent: any) {
  addToCart(product: any) {
    const currentCart = this.cartItem.value;
    const existingProduct = currentCart.find((item) => item.id === product.id);

    if (existingProduct && product.quantity < product.stock) {
      existingProduct.quantity += 1;
    } else if (!existingProduct) {
      product.quantity = 1;
      currentCart.push(product);
    } else {
      return;
    }

    this.cartItem.next(currentCart);
  }
  removeFromCard(id: any) {
    const current = this.cartItem.value;
    const updatedCart = current.filter((item) => item.id !== id);
    this.cartItem.next(updatedCart);
  }
  clearCart() {
    this.cartItem.next([]);
  }
  updateQuantity(productId: number, quantity: number) {
    const currentCart = this.cartItem.value;
    const product = currentCart.find((item) => item.id === productId);

    if (product) {
      product.quantity = quantity;
      this.cartItem.next(currentCart);
    }
  }
}
