import { NgClass, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-cart',
  standalone: true,
  imports: [NgFor, NgClass, RouterLink],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.css',
})
export class ProductCartComponent {
  @Input() product: any;
  constructor(private router: Router) {}
  handleRedirect(id: any) {
    this.router.navigate(['./productDetails ', id]);
  }
  stars = [1, 2, 3, 4, 5];
  roundedRating: number = 0;
  ngOnInit() {
    this.roundedRating = Math.round(this.product.rating);
  }
}
