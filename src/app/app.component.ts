import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { ResgisterComponent } from './resgister/resgister.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailesComponent } from './product-detailes/product-detailes.component';
import { CartComponent } from './cart/cart.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavBarComponent,
    LoginComponent,
    ResgisterComponent,
    ProductCartComponent,
    HomeComponent,
    FooterComponent,
    ProductDetailesComponent,
    CartComponent,
    AddToCartComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'E-commerce';
}
