import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProxyService } from "src/app/core/services/proxy.service";


@Component({
  selector: 'app-Trips',
  templateUrl: './Trips.component.html',
  styleUrls: ['./Trips.component.css']
})
export class TripsComponents implements OnInit {

  Trips: any;
  brandsURL = 'http://localhost:8080/rest/catalog/brands';


  constructor(private proxyService: ProxyService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(paramMap => {
      if (!paramMap) {
        this.Trips = this.proxyService.getProducts();
      } else {
        const brandId = parseInt(<string>paramMap.get('brandId'), 10);
        if (brandId || brandId === 0) {
          const href = this.brandsURL + `/${brandId}/products`;
          this.Trips = this.proxyService.getProducts(href);
          return;
        }

        this.Trips = this.proxyService.getProducts();
        return;
      }
    });
  }
}
