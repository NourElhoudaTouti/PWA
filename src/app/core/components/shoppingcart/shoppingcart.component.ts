import { Component, OnInit } from "@angular/core";
import { ShoppingCartService } from "../../services/ShoppingCart.service";

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  displayedColumns = ['Trip', 'price', 'availableSeat', 'actions'];

  constructor(public shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

}
