import { Injectable } from "@angular/core";
import { TripComponent } from 'src/app/catalog/components/Trips/Trip/Trip.component';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService{
  totalPrice = 0;
  numberOfTrips = 0;
  content = {};
  elements = [];

  constructor() { }

  addTrip(Trip: any, availableSeat: number){
    if (Trip.id in this.content) {
      // @ts-ignore
      this.content[Trip.id].availableSeat += availableSeat;
    } else {
      // @ts-ignore mean
      this.content[Trip.id] = {};
      // @ts-ignore mean
      this.content[Trip.id].Trip = Trip;
      // @ts-ignore mean
      this.content[Trip.id].availableSeat = availableSeat;
      // @ts-ignore mean
      this.elements.push(this.content[Trip.id]);
    }
    this.totalPrice += Trip.price * availableSeat;
    this.numberOfTrips += availableSeat;
  }
  removeTripSeat(Trip: any, availableSeat: number) {
    if (Trip.id in this.content) {
      // @ts-ignore mean
      if (this.content[Trip.id].availableSeat > availableSeat) {
        // @ts-ignore mean
        this.content[Trip.id].availableSeat -= availableSeat;
        this.totalPrice -= Trip.price * availableSeat;
        this.numberOfTrips -= availableSeat;
      } else {
        // @ts-ignore mean
        this.elements = this.elements.filter(element => element.Trip !== Trip);
        // @ts-ignore mean
        this.totalPrice -= Trip.price * this.content[Trip.id].availableSeat;
        // @ts-ignore mean
        this.numberOfTrips -= this.content[Trip.id].availableSeat;
        // @ts-ignore mean
        delete this.content[Trip.id];
      }
    }
  }

  removeTrip(trip: any) {
    if (trip.id in this.content) {
      // @ts-ignore
      this.removeTripSeat(trip, this.content[trip.id].availableSeat);
    }
  }


}
