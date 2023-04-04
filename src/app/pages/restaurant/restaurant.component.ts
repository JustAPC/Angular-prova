import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RestaurantsService } from "src/app/services/restaurants.service";

@Component({
  selector: "app-restaurant",
  templateUrl: "./restaurant.component.html",
  styleUrls: ["./restaurant.component.scss"],
})
export class RestaurantComponent implements OnInit {
  restaurantId!: string | null;
  restaurant: any;

  constructor(private route: ActivatedRoute, private service: RestaurantsService) {}

  ngOnInit(): void {
    this.restaurantId = this.route.snapshot.paramMap.get("id");
    console.log(this.restaurantId);
  }
}
