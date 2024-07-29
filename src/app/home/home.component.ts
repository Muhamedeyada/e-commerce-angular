import { Component } from '@angular/core';
import { ProductCartComponent } from '../product-cart/product-cart.component';
import { FooterComponent } from '../footer/footer.component';
import { ProductRequestsService } from '../services/product-requests.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCartComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  products: any;
  constructor(private ProductRequestsService: ProductRequestsService) {}
  ngOnInit() {
    this.ProductRequestsService.getProducts().subscribe((res: any) => {
      this.products = res.products;
    });
  }
}
