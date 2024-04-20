import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CheckOneWayComponent } from './components/OneWayBinding/check-one-way.component';
import { NotFoundComponent } from './components/NotFound/not-found/not-found.component';
import { CheckTwoWayBindingComponent } from './components/TwoWayBinding/check-two-way-binding.component';
import { CheckInteractionsComponent } from './components/componentInteractions/check-interactions.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'one', component: CheckOneWayComponent },
  { path: 'two', component: CheckTwoWayBindingComponent },
  { path: 'interactions', component: CheckInteractionsComponent },
  { path: '**', component: NotFoundComponent },
];
