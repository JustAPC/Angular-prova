import { Component, OnInit } from "@angular/core";
import { RestaurantsService } from "src/app/services/restaurants.service";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.scss"],
})
export class HomepageComponent implements OnInit {
  cuisines: any;
  restaurants: any;

  constructor(private service: RestaurantsService) {}

  ngOnInit() {
    this.service.getCuisinesList().subscribe((response) => {
      this.cuisines = response;
      console.log(this.cuisines);
    });

    this.service.getRestaurantsList().subscribe((response) => {
      this.restaurants = response;
      console.log(this.restaurants);
    });
  }
}
