import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import {forkJoin, map, switchMap } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProxyService {

  private baseURL = 'http://localhost:8080';
  private tripsURL = this.baseURL + '/rest/catalog/Trips';
  private brandsURL = this.baseURL + '/rest/catalog/brands';
  constructor(private httpClient: HttpClient) { }

  private parse(response: any, key: string): any[] {
    return response._embedded[key];
  }
  private getId(href: string) {
    return href.substring(href.lastIndexOf('/') + 1);
  }
  getTrips(href: string = this.tripsURL) {
    return this.httpClient.get(href)
      .pipe(
        map(response =>
          this.parse(response, 'trips')
        ),
        map(Trips =>
          Trips.map(Trips => {
            Trips.id = this.getId(Trips._links.Trip.href);
            return Trips;
          })
        ),
        switchMap(Trips =>
          forkJoin(Trips.map(
            Trips => this.setBrand(Trips))))
      );
  }

  private setBrand(product: any) {
    return this.httpClient.get(product._links.brand.href).pipe(map((brand: any) => {
      product.brand = {
        id: this.getId(brand._links.self.href),
        name: brand.name
      };
      return product;
    }));
  }

  getBrands() {
    return this.httpClient.get(this.brandsURL).pipe(
      map(response => this.parse(response, 'brands')),
      map((brands: any[]) => brands.map(brand => {
        brand.id = this.getId(brand._links.brand.href);
        return brand;
      }))
    );
  }
}
