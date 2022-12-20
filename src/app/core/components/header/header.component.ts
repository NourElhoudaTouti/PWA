import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ShoppingCartService } from "../../services/ShoppingCart.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public shoppingCartService: ShoppingCartService,
              private router: Router) { }

  ngOnInit() {
  }

  search() {
    console.log('TESTING PHASE');
  }

  navigate() {
    this.router.navigateByUrl('/shoppingCart');
  }

}
