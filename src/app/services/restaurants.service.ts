import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class RestaurantsService {
  private url = "http://localhost:5000/api";

  constructor(private httpClient: HttpClient) {}

  getCuisinesList() {
    return this.httpClient.get(`${this.url}/tipologiche/getCuisinesList`);
  }

  getRestaurantsList() {
    return this.httpClient.get(`${this.url}/restaurant/getRestaurants/0/3`);
  }
}
