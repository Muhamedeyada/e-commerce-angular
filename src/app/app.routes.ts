// import { NgModule } from '@angular/core';

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { ResgisterComponent } from './resgister/resgister.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { ProductDetailesComponent } from './product-detailes/product-detailes.component';
import { CartComponent } from './cart/cart.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
export const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'HOME' },
  { path: 'login', component: LoginComponent, title: 'LOGIN ' },
  { path: 'register', component: ResgisterComponent, title: 'RESGITER' },
  { path: 'product', component: ProductCartComponent, title: 'PRODUCT' },
  { path: 'cart', component: CartComponent, title: 'CART' },
  {
    path: 'addToCartProduct',
    component: AddToCartComponent,
    title: 'ADDTOCARTPRODUCT',
  },

  {
    path: 'productDetails/:id',
    component: ProductDetailesComponent,
    title: ' PRODUCT DETIALS',
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent, title: 'NOTFOUND' },
];
// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes, {
//       scrollPositionRestoration: 'enabled'  // Enable scroll position restoration
//     })
//   ]})
