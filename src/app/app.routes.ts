import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CheckOneWayComponent } from './components/OneWayBinding/check-one-way.component';
import { NotFoundComponent } from './components/NotFound/not-found/not-found.component';
import { CheckTwoWayBindingComponent } from './components/TwoWayBinding/check-two-way-binding.component';
import { CheckInteractionsComponent } from './components/componentInteractions/check-interactions.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { ProductFormComponent } from './components/products/product-form/product-form.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'one', component: CheckOneWayComponent },
  { path: 'two', component: CheckTwoWayBindingComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'product/edit/:id', component: ProductFormComponent },
  { path: 'interactions', component: CheckInteractionsComponent },
  { path: '**', component: NotFoundComponent },
];
