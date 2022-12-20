import {Component, Input, OnInit} from "@angular/core";
import { ShoppingCartService } from "src/app/core/services/ShoppingCart.service";

@Component({
  selector: 'app-Trip',
  templateUrl: './Trip.component.html',
  styleUrls: ['./Trip.component.css']
})
export class TripComponent implements OnInit{
  @Input()
  Trip: any;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
        throw new Error("Method not implemented.");
    }

  addToShoppingCart() {
    this.shoppingCartService.addTrip(this.Trip, 1);
  }
}
