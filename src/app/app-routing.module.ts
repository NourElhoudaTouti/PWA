import { NgModule } from "@angular/core";
import {RouterModule, Routes } from "@angular/router";
import { BrandsComponent } from "./catalog/components/brands/brands.component";
import {TripComponent} from "./catalog/components/Trips/Trip/Trip.component";
import { ShoppingCartComponent } from "./core/components/shoppingcart/shoppingcart.component";

const routes: Routes = [
  { path: '', component: TripComponent },
  { path: 'trips', component: TripComponent },
  { path: 'brands', component: BrandsComponent },

  { path: 'shoppingCart', component: ShoppingCartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
