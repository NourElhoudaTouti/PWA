import { NgModule } from "@angular/core";
import {TripComponent} from "./components/Trips/Trip/Trip.component";
import {TripsComponents} from "./components/Trips/Trips.component";
import {BrandsComponent} from "./components/brands/brands.component"
import { CommonModule } from "@angular/common";

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [TripComponent,TripsComponents , BrandsComponent ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatIconModule,
    MatDividerModule
  ],
  exports: [TripsComponents, BrandsComponent]
})
export class CatalogModule { }
